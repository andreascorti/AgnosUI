const t=`{
	"name": "@agnos-ui/style-bootstrap",
	"description": "Scss and css files needed to style AgnosUI components not styled by Bootstrap",
	"version": "0.0.0",
	"keywords": [
		"bootstrap",
		"css",
		"scss",
		"style"
	],
	"type": "module",
	"main": "./dist/index.cjs",
	"module": "./dist/index.js",
	"types": "./dist/index.d.ts",
	"exports": {
		".": {
			"types": "./dist/index.d.ts",
			"require": "./dist/index.cjs",
			"default": "./dist/index.js"
		},
		"./components/*": {
			"types": "./dist/components/*/index.d.ts",
			"require": "./dist/components/*/index.cjs",
			"default": "./dist/components/*/index.js"
		},
		"./config": {
			"types": "./dist/config.d.ts",
			"require": "./dist/config.cjs",
			"default": "./dist/config.js"
		},
		"./scss/agnosui.scss": {
			"require": "./src/scss/agnosui.scss",
			"default": "./src/scss/agnosui.scss"
		},
		"./css/agnosui.css": {
			"require": "./dist/css/agnosui.css",
			"default": "./dist/css/agnosui.css"
		}
	},
	"scripts": {
		"build": "wireit"
	},
	"wireit": {
		"build": {
			"command": "vite build && tsc -p tsconfig.build.json && node ../scripts/buildPackageJson.js . dist && sass src/scss/agnosui.scss dist/css/agnosui.css && copyfiles -u 1 src/scss/** dist",
			"files": [
				"src/**",
				"tsconfig.build.json",
				"../tsconfig.json",
				"vite.config.ts",
				"README.md"
			],
			"output": [
				"dist/**"
			],
			"dependencies": [
				"../core:build"
			]
		}
	},
	"files": [
		"scss",
		"css"
	],
	"license": "MIT",
	"bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
	"repository": {
		"type": "git",
		"url": "git+https://github.com/AmadeusITGroup/AgnosUI.git",
		"directory": "style-bootstrap"
	},
	"devDependencies": {
		"copyfiles": "^2.4.1",
		"sass": "^1.74.1"
	},
	"dependencies": {
		"@agnos-ui/core": "0.0.0"
	},
	"peerDependencies": {}
}
`;export{t as default};
