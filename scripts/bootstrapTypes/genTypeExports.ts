import path from 'path';
import ts from 'typescript';
import type {Node} from 'typescript';
import {readdir, writeFile} from 'fs/promises';

/**
 * #######################################################
 * #### Generator of bootstrap component type exports ####
 * #######################################################
 *
 * This script takes a framework as input and parses through all components in the package core-bootstrap
 * to generate type exports in the package ${framework}/bootstrap.
 */

const root = path.resolve(import.meta.dirname, '../..');
const coreBootstrapComponents = path.join(root, 'core-bootstrap/src/components');

const framework = process.argv[2];

const program = ts.createProgram([path.join(root, 'core-bootstrap/src/index.ts')], {
	baseUrl: root,
	paths: {
		'@agnos-ui/core': ['./core/src'],
		'@agnos-ui/core/*': ['./core/src/*'],
	},
});
const typeChecker = program.getTypeChecker();

/**
 * Utility method to resolve all used types from some provided typescript code.
 *
 * @param nodes the typescript source code nodes
 * @returns the map to import used types
 */
function getTypesImportsMap(nodes: Node[], excludedNames: Set<string>) {
	const importsByModule = new Map<string, string[]>();
	const processedNames = new Set<string>(excludedNames);
	function visit(node: Node) {
		if (ts.isTypeReferenceNode(node)) {
			const name = node.typeName.getText();
			if (!processedNames.has(name)) {
				let symbol = typeChecker.getSymbolAtLocation(node.typeName);
				while (symbol && symbol.flags & ts.SymbolFlags.Alias && !(symbol.declarations?.[0] && ts.isImportSpecifier(symbol.declarations?.[0]))) {
					symbol = typeChecker.getImmediateAliasedSymbol(symbol);
				}
				const declaration = symbol?.declarations?.[0];
				if (declaration && ts.isImportSpecifier(declaration) && ts.isStringLiteral(declaration.parent.parent.parent.moduleSpecifier)) {
					let moduleSpecifier = declaration.parent.parent.parent.moduleSpecifier.text;
					if (moduleSpecifier.startsWith('.')) {
						const modulePath = path.relative(root, path.dirname(declaration.getSourceFile().fileName)).split(path.sep);
						if (modulePath[0] !== 'core-bootstrap' && modulePath[0] !== 'core') {
							throw new Error('Unexpected import path: ' + moduleSpecifier + ' in ' + declaration.getSourceFile().fileName);
						}
						modulePath[0] = `@agnos-ui/${modulePath[0]}`;
						modulePath.splice(1, 1); // remove src
						moduleSpecifier = path.posix.join(modulePath.join('/'), moduleSpecifier);
					}
					moduleSpecifier = moduleSpecifier.replace(/^@agnos-ui\/core\//, `@agnos-ui/${framework}-headless/`);
					processedNames.add(name);
					let importsArray = importsByModule.get(moduleSpecifier);
					if (!importsArray) {
						importsArray = [];
						importsByModule.set(moduleSpecifier, importsArray);
					}
					importsArray.push(name);
				}
			}
		}
		ts.forEachChild(node, visit);
	}
	nodes.forEach(visit);
	return importsByModule;
}

const componentsProps: [string, string, number][] = [];

const components = await readdir(coreBootstrapComponents);
for (const component of components) {
	const sourceFile = program.getSourceFile(path.join(coreBootstrapComponents, `${component}/${component}.ts`))!;
	const sourceFileSymbol = typeChecker.getSymbolAtLocation(sourceFile)!;

	// The first stage of the generator is determining what we need to export.
	// We take all type aliases or interface exports from the file
	// core-bootstrap/src/components/${component}/${component}.ts and filter out Extra or Common ones.
	const exportsList = typeChecker.getExportsOfModule(sourceFileSymbol);
	let exports = '';
	const exportedNodes: Node[] = [];
	const exportNames = new Set<string>();
	for (const bootstrapExport of exportsList.filter(
		(btsExport) => !btsExport.name.endsWith('CommonPropsAndState') && !btsExport.name.endsWith('ExtraProps') && !btsExport.name.startsWith('Common'),
	)) {
		exportNames.add(bootstrapExport.name);
		const node = bootstrapExport.getDeclarations()![0];
		if (ts.isTypeAliasDeclaration(node)) {
			// type aliases are copied as defined
			exports += node.getText() + '\n\n';
			exportedNodes.push(node);
		} else if (ts.isInterfaceDeclaration(node)) {
			// interfaces are resolved to obtain a *flattened* version
			exports += `export interface ${bootstrapExport.name}${node.typeParameters?.length ? `<${node.typeParameters.map((typeParam) => typeParam.getText()).join(', ')}>` : ''} {\n`;
			exportedNodes.push(...(node.typeParameters ?? []));
			for (const property of typeChecker.getTypeAtLocation(node).getProperties()) {
				const propertyDeclaration = property.getDeclarations()![0];
				// TODO the js documentation is copied as-is, though it could be interesting for Props interfaces
				// to add the tag @defaultValue based on the getDefaultConfig functions
				exports += `\t/**\n\t * ${ts.displayPartsToString(property.getDocumentationComment(typeChecker)).split('\n').join('\n\t * ')}\n\t */\n`;
				exports += `\t${propertyDeclaration.getText()}\n`;
				exportedNodes.push(propertyDeclaration);
			}
			exports += `}\n\n`;
			if (bootstrapExport.name === `${component.slice(0, 1).toUpperCase()}${component.slice(1)}Props`) {
				componentsProps.push([component, bootstrapExport.name, node.typeParameters?.length ?? 0]);
			}
		}
	}
	const mapImportsByModule = getTypesImportsMap(exportedNodes, exportNames);

	let imports = '';
	for (const [importFile, importNames] of mapImportsByModule.entries()) {
		imports += `import type {${importNames.join(', ')}} from '${importFile}';\n`;
	}
	await writeFile(path.join(root, `${framework}/bootstrap/src/components/${component}/${component}.gen.ts`), imports + '\n' + exports);
}

// Finally, we generate and export the WidgetsConfig in `@agnos-ui/${framework}-bootstrap/src/config.gen.ts`
await writeFile(
	path.join(root, `${framework}/bootstrap/src/config.gen.ts`),
	componentsProps.map((componentProps) => `import type {${componentProps[1]}} from './components/${componentProps[0]}';`).join('\n') +
		'\n\n' +
		`export type WidgetsConfig = {\n` +
		componentsProps
			.map(
				(componentProps) =>
					`\t/**\n\t * the ${componentProps[0]} widget config\n\t */\n\t` +
					`${componentProps[0]}: ${componentProps[1]}${componentProps[2] > 0 ? `<${'any, '.repeat(componentProps[2]).slice(0, -2)}>` : ''};`,
			)
			.join(`\n`) +
		'\n}\n',
);
