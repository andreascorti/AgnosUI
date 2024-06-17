const e=`import type { WidgetSlotContext, SlotContent, Widget, Directive } from '@agnos-ui/angular-headless';
export type SliderContext = WidgetSlotContext<SliderWidget>;
export type SliderSlotLabelContext = SliderContext & {
    value: number;
};
export type SliderSlotHandleContext = SliderContext & {
    item: SliderHandle;
};
export interface SliderState {
    /**
     * Sorted slider values
     */
    sortedValues: number[];
    /**
     * Combined label left offset in %
     */
    combinedLabelPositionLeft: number;
    /**
     * Combined label top offset in %
     */
    combinedLabelPositionTop: number;
    /**
     * If true, the minimum label will be visible
     */
    minValueLabelDisplay: boolean;
    /**
     * If true, the maximum label will be visible
     */
    maxValueLabelDisplay: boolean;
    /**
     * If true, the label when the handles are close is visible
     */
    combinedLabelDisplay: boolean;
    /**
     * Array of the sorted handles to display
     */
    sortedHandles: SliderHandle[];
    /**
     * Array of objects representing progress display options
     */
    progressDisplayOptions: ProgressDisplayOptions[];
    /**
     * Array of objects representing handle display options
     */
    handleDisplayOptions: HandleDisplayOptions[];
    /**
     * Check if the slider is interactive, meaning it is not disabled or readonly
     */
    interactive: boolean;
    /**
     * Minimum value that can be assigned to the slider
     */
    min: number;
    /**
     * Maximum value that can be assigned to the slider
     */
    max: number;
    /**
     * Unit value between slider steps
     */
    stepSize: number;
    /**
     * If \`true\` slider value cannot be changed but the slider is still focusable
     */
    readonly: boolean;
    /**
     * If \`true\` slider value cannot be changed and the slider cannot be focused
     */
    disabled: boolean;
    /**
     * If \`true\` is vertically positioned otherwise it is horizontal
     */
    vertical: boolean;
    /**
     * Current slider values
     */
    values: number[];
    /**
     * If \`true\` the value labels are displayed on the slider
     */
    showValueLabels: boolean;
    /**
     * If \`true\` the min and max labels are displayed on the slider
     */
    showMinMaxLabels: boolean;
    /**
     * It \`true\` slider display is inversed
     */
    rtl: boolean;
    /**
     * CSS classes to be applied on the widget main container
     */
    className: string;
    /**
     * Slot to change the default display of the slider
     */
    slotStructure: SlotContent<SliderContext>;
    /**
     * Slot to change the default labels of the slider
     */
    slotLabel: SlotContent<SliderSlotLabelContext>;
    /**
     * Slot to change the handlers
     */
    slotHandle: SlotContent<SliderSlotHandleContext>;
}
export interface SliderProps {
    /**
     * Return the value for the 'aria-label' attribute for the handle
     */
    ariaLabelHandle: (value: number, sortedIndex: number, index: number) => string;
    /**
     * Return the value for the 'aria-valuetext' attribute for the handle
     */
    ariaValueText: (value: number, sortedIndex: number, index: number) => string;
    /**
     * An event emitted when slider values are changed
     *
     * Event payload equals to the updated slider values
     */
    onValuesChange: (values: number[]) => void;
    /**
     * Minimum value that can be assigned to the slider
     */
    min: number;
    /**
     * Maximum value that can be assigned to the slider
     */
    max: number;
    /**
     * Unit value between slider steps
     */
    stepSize: number;
    /**
     * If \`true\` slider value cannot be changed but the slider is still focusable
     */
    readonly: boolean;
    /**
     * If \`true\` slider value cannot be changed and the slider cannot be focused
     */
    disabled: boolean;
    /**
     * If \`true\` is vertically positioned otherwise it is horizontal
     */
    vertical: boolean;
    /**
     * Current slider values
     */
    values: number[];
    /**
     * If \`true\` the value labels are displayed on the slider
     */
    showValueLabels: boolean;
    /**
     * If \`true\` the min and max labels are displayed on the slider
     */
    showMinMaxLabels: boolean;
    /**
     * It \`true\` slider display is inversed
     */
    rtl: boolean;
    /**
     * CSS classes to be applied on the widget main container
     */
    className: string;
    /**
     * Slot to change the default display of the slider
     */
    slotStructure: SlotContent<SliderContext>;
    /**
     * Slot to change the default labels of the slider
     */
    slotLabel: SlotContent<SliderSlotLabelContext>;
    /**
     * Slot to change the handlers
     */
    slotHandle: SlotContent<SliderSlotHandleContext>;
}
export type SliderWidget = Widget<SliderProps, SliderState, SliderApi, SliderActions, SliderDirectives>;
export interface ProgressDisplayOptions {
    /**
     * Right offset of the progress in %
     */
    left: number | null;
    /**
     * Left offset of the progress in %
     */
    right: number | null;
    /**
     * Top offset of the progress in %
     */
    top: number | null;
    /**
     * Bottom offset of the progress in %
     */
    bottom: number | null;
    /**
     * Width of the progress in %
     */
    width: number;
    /**
     * Height of hte progress in %
     */
    height: number;
}
export interface HandleDisplayOptions {
    /**
     * Left offset of the handle in %
     */
    left: number | null;
    /**
     * Top offset of the handle in %
     */
    top: number | null;
}
export interface SliderHandle {
    /**
     * Value of the handle
     */
    value: number;
    /**
     * Handle id
     */
    id: number;
    /**
     * ariaLabel of the handle
     */
    ariaLabel: string;
    /**
     * ariaValueText of the handle
     */
    ariaValueText: string;
}
export interface SliderApi {
}
export interface SliderDirectives {
    /**
     * Directive to get the slider component elementRef
     */
    sliderDirective: Directive;
    /**
     * Directive used to style the progress display for each handle
     */
    progressDisplayDirective: Directive<{
        option: ProgressDisplayOptions;
    }>;
    /**
     * Directive to apply to the slider clickable area, to directly move the handle to a given specific position
     */
    clickableAreaDirective: Directive;
    /**
     * Directive to apply to the slider handle if any
     */
    handleDirective: Directive<{
        item: SliderHandle;
    }>;
    /**
     * Directive to get the minLabel elementRef
     */
    minLabelDirective: Directive;
    /**
     * Directive to get the maxLabel elementRef
     */
    maxLabelDirective: Directive;
    /**
     * Directive to apply to the handle when combined label display is active
     */
    combinedHandleLabelDisplayDirective: Directive;
    /**
     * Directive to apply to the handle when combined label display is not active
     */
    handleLabelDisplayDirective: Directive<{
        index: number;
    }>;
}
export interface SliderActions {
    /**
     * Method to handle click on the slider
     */
    click(event: MouseEvent): void;
    /**
     * Method to process the keyboard event
     */
    keydown(event: KeyboardEvent, handleNumber: number): void;
    /**
     * Method describing the behavior of the slider handle on mouse down event
     */
    mouseDown(event: MouseEvent, handleId: number): void;
    /**
     * Method describing the behavior of the slider handle on touch start event
     */
    touchStart(event: TouchEvent, handleId: number): void;
}
`;export{e as default};
