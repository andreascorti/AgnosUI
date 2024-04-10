const r=`import type {
	ProgressbarDirectives,
	ProgressbarState as CoreState,
	ProgressbarProps as CoreProps,
	ProgressbarApi,
} from '@agnos-ui/core/components/progressbar';
import {createProgressbar as createCoreProgressbar, getProgressbarDefaultConfig as getCoreDefaultConfig} from '@agnos-ui/core/components/progressbar';
import type {ConfigValidator, SlotContent, Widget, WidgetFactory, WidgetSlotContext} from '@agnos-ui/core/types';
import {typeBoolean, typeString} from '@agnos-ui/core/utils/writables';
import type {ExtendWidgetAdaptSlotWidgetProps} from '@agnos-ui/core/services/extendWidget';
import {extendWidgetProps} from '@agnos-ui/core/services/extendWidget';

export type ProgressbarContext = WidgetSlotContext<ProgressbarWidget>;

export interface ProgressbarExtraProps {
	/**
	 * Global template for the Progressbar.
	 */
	slotStructure: SlotContent<ProgressbarContext>;
	/**
	 * Label of the progress.
	 */
	slotDefault: SlotContent<ProgressbarContext>;
	/**
	 * Height of the progressbar, can be any valid css height value.
	 */
	height: string;
	/**
	 * If \`true\`, shows a striped progressbar.
	 */
	striped: boolean;
	/**
	 * If \`true\`, animates a striped progressbar.
	 * Takes effect only for browsers supporting CSS3 animations, and if \`striped\` is \`true\`.
	 */
	animated: boolean;
	/**
	 * Type of the progressbar, following bootstrap types.
	 */
	type: 'success' | 'info' | 'warning' | 'danger' | 'primary' | 'secondary' | 'light' | 'dark' | undefined;
}

export type {ProgressbarApi, ProgressbarDirectives} from '@agnos-ui/core/components/progressbar';
export interface ProgressbarState extends ExtendWidgetAdaptSlotWidgetProps<CoreState, ProgressbarExtraProps, object> {}
export interface ProgressbarProps extends ExtendWidgetAdaptSlotWidgetProps<CoreProps, ProgressbarExtraProps, object> {}

export type ProgressbarWidget = Widget<ProgressbarProps, ProgressbarState, ProgressbarApi, object, ProgressbarDirectives>;

const defaultConfig: ProgressbarExtraProps = {
	slotStructure: undefined,
	slotDefault: undefined,
	height: '',
	striped: false,
	animated: false,
	type: undefined,
};

const configValidator: ConfigValidator<ProgressbarExtraProps> = {
	height: typeString,
	striped: typeBoolean,
	animated: typeBoolean,
	type: typeString as any,
};

/**
 * Retrieve a shallow copy of the default Progressbar config
 * @returns the default Progressbar config
 */
export function getProgressbarDefaultConfig(): ProgressbarProps {
	return {...getCoreDefaultConfig(), ...defaultConfig} as any;
}

/**
 * Create a Progressbar with given config props
 * @param config - an optional progressbar config
 * @returns a ProgressbarWidget
 */

export const createProgressbar: WidgetFactory<ProgressbarWidget> = extendWidgetProps(createCoreProgressbar, defaultConfig, configValidator);
`;export{r as default};
