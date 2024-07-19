const l=`import { getAlertDefaultConfig, createAlert } from '@agnos-ui/core-bootstrap/components/alert';
/**
 * Retrieve a shallow copy of the default Alert config
 * @returns the default Alert config
 */
const export_getAlertDefaultConfig = getAlertDefaultConfig;
export { export_getAlertDefaultConfig as getAlertDefaultConfig };
/**
 * Create an AlertWidget with given config props
 * @param config - an optional alert config
 * @returns an AlertWidget
 */
const export_createAlert = createAlert;
export { export_createAlert as createAlert };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuZ2VuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuZ2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxXQUFXLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQU03Rjs7O0dBR0c7QUFDSCxNQUFNLDRCQUE0QixHQUFxQixxQkFBNEIsQ0FBQztBQUNwRixPQUFPLEVBQUMsNEJBQTRCLElBQUkscUJBQXFCLEVBQUMsQ0FBQztBQW1ML0Q7Ozs7R0FJRztBQUNILE1BQU0sa0JBQWtCLEdBQStCLFdBQWtCLENBQUM7QUFDMUUsT0FBTyxFQUFDLGtCQUFrQixJQUFJLFdBQVcsRUFBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRBbGVydERlZmF1bHRDb25maWcsIGNyZWF0ZUFsZXJ0fSBmcm9tICdAYWdub3MtdWkvY29yZS1ib290c3RyYXAvY29tcG9uZW50cy9hbGVydCc7XG5pbXBvcnQgdHlwZSB7V2lkZ2V0U2xvdENvbnRleHQsIFNsb3RDb250ZW50LCBUcmFuc2l0aW9uRm4sIFdpZGdldCwgV2lkZ2V0RmFjdG9yeSwgRGlyZWN0aXZlfSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQgdHlwZSB7QlNDb250ZXh0dWFsQ2xhc3N9IGZyb20gJ0BhZ25vcy11aS9jb3JlLWJvb3RzdHJhcC90eXBlcyc7XG5cblxuXG4vKipcbiAqIFJldHJpZXZlIGEgc2hhbGxvdyBjb3B5IG9mIHRoZSBkZWZhdWx0IEFsZXJ0IGNvbmZpZ1xuICogQHJldHVybnMgdGhlIGRlZmF1bHQgQWxlcnQgY29uZmlnXG4gKi9cbmNvbnN0IGV4cG9ydF9nZXRBbGVydERlZmF1bHRDb25maWc6ICgpID0+IEFsZXJ0UHJvcHMgPSBnZXRBbGVydERlZmF1bHRDb25maWcgYXMgYW55O1xuZXhwb3J0IHtleHBvcnRfZ2V0QWxlcnREZWZhdWx0Q29uZmlnIGFzIGdldEFsZXJ0RGVmYXVsdENvbmZpZ307XG5cblxuXG5leHBvcnQgdHlwZSBBbGVydENvbnRleHQgPSBXaWRnZXRTbG90Q29udGV4dDxBbGVydFdpZGdldD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnRTdGF0ZSB7XG5cdFxuXHQvKipcblx0ICogSXMgYHRydWVgIHdoZW4gdGhlIGFsZXJ0IGlzIGhpZGRlbi4gQ29tcGFyZWQgdG8gYHZpc2libGVgLCB0aGlzIGlzIHVwZGF0ZWQgYWZ0ZXIgdGhlIHRyYW5zaXRpb24gaXMgZXhlY3V0ZWQuXG5cdCAqL1xuXHRoaWRkZW46IGJvb2xlYW47XG5cdFxuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbGVydCBjYW4gYmUgZGlzbWlzc2VkIGJ5IHRoZSB1c2VyLlxuXHQgKiBUaGUgY2xvc2UgYnV0dG9uICjDlykgd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHlvdSBjYW4gYmUgbm90aWZpZWQgb2YgdGhlIGV2ZW50IHdpdGggdGhlIChjbG9zZSkgb3V0cHV0LlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGB0cnVlYFxuXHQgKi9cblx0ZGlzbWlzc2libGU6IGJvb2xlYW47XG5cdFxuXHQvKipcblx0ICogSWYgYHRydWVgIHRoZSBhbGVydCBpcyB2aXNpYmxlIHRvIHRoZSB1c2VyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYHRydWVgXG5cdCAqL1xuXHR2aXNpYmxlOiBib29sZWFuO1xuXHRcblxuXHQvKipcblx0ICogQWNjZXNzaWJpbGl0eSBjbG9zZSBidXR0b24gbGFiZWxcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ0Nsb3NlJ2Bcblx0ICovXG5cdGFyaWFDbG9zZUJ1dHRvbkxhYmVsOiBzdHJpbmc7XG5cdFxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0Y2xhc3NOYW1lOiBzdHJpbmc7XG5cdFxuXHQvKipcblx0ICogR2xvYmFsIHRlbXBsYXRlIGZvciB0aGUgYWxlcnQgY29tcG9uZW50XG5cdCAqL1xuXHRzdHJ1Y3R1cmU6IFNsb3RDb250ZW50PEFsZXJ0Q29udGV4dD47XG5cdFxuXHQvKipcblx0ICogVGVtcGxhdGUgZm9yIHRoZSBhbGVydCBjb250ZW50XG5cdCAqL1xuXHRjaGlsZHJlbjogU2xvdENvbnRlbnQ8QWxlcnRDb250ZXh0Pjtcblx0XG5cdC8qKlxuXHQgKiBUeXBlIG9mIHRoZSBhbGVydCwgZm9sbG93aW5nIGJvb3RzdHJhcCB0eXBlcy5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ3ByaW1hcnknYFxuXHQgKi9cblx0dHlwZTogQlNDb250ZXh0dWFsQ2xhc3M7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnRQcm9wcyB7XG5cdFxuXHQvKipcblx0ICogVGhlIHRyYW5zaXRpb24gZnVuY3Rpb24gd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBhbGVydCBpcyBkaXNwbGF5ZWQgb3IgaGlkZGVuLlxuXHQgKlxuXHQgKiBEZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIGBhbmltYXRlZE9uSW5pdGAsIHRoZSBhbmltYXRpb24gY2FuIGJlIG9wdGlvbmFsbHkgc2tpcHBlZCBkdXJpbmcgdGhlIHNob3dpbmcgcHJvY2Vzcy5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFkZVRyYW5zaXRpb25gXG5cdCAqL1xuXHR0cmFuc2l0aW9uOiBUcmFuc2l0aW9uRm47XG5cdFxuXHQvKipcblx0ICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIGFsZXJ0IHZpc2liaWxpdHkgY2hhbmdlZC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoKSA9PiB7fVxuXHQgKiBgYGBcblx0ICovXG5cdG9uVmlzaWJsZUNoYW5nZTogKHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWQ7XG5cdFxuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgYWxlcnQgaXMgaGlkZGVuLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICgpID0+IHt9XG5cdCAqIGBgYFxuXHQgKi9cblx0b25IaWRkZW46ICgpID0+IHZvaWQ7XG5cdFxuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgYWxlcnQgaXMgc2hvd24uXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKCkgPT4ge31cblx0ICogYGBgXG5cdCAqL1xuXHRvblNob3duOiAoKSA9PiB2b2lkO1xuXHRcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbGVydCBvcGVuaW5nIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqXG5cdCAqIEFuaW1hdGlvbiBpcyB0cmlnZ2VyZWQgIHdoZW4gdGhlIGAub3BlbigpYCBmdW5jdGlvbiBpcyBjYWxsZWRcblx0ICogb3IgdGhlIHZpc2libGUgcHJvcCBpcyBjaGFuZ2VkXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYGZhbHNlYFxuXHQgKi9cblx0YW5pbWF0ZWRPbkluaXQ6IGJvb2xlYW47XG5cdFxuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbGVydCBjbG9zaW5nIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqXG5cdCAqIEFuaW1hdGlvbiBpcyB0cmlnZ2VyZWQgIHdoZW4gY2xpY2tlZCBvbiB0aGUgY2xvc2UgYnV0dG9uICjDlyksXG5cdCAqIHZpYSB0aGUgYC5jbG9zZSgpYCBmdW5jdGlvbiBvciB0aGUgdmlzaWJsZSBwcm9wIGlzIGNoYW5nZWRcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdGFuaW1hdGVkOiBib29sZWFuO1xuXHRcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYWxlcnQgY2FuIGJlIGRpc21pc3NlZCBieSB0aGUgdXNlci5cblx0ICogVGhlIGNsb3NlIGJ1dHRvbiAow5cpIHdpbGwgYmUgZGlzcGxheWVkIGFuZCB5b3UgY2FuIGJlIG5vdGlmaWVkIG9mIHRoZSBldmVudCB3aXRoIHRoZSAoY2xvc2UpIG91dHB1dC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdGRpc21pc3NpYmxlOiBib29sZWFuO1xuXHRcblx0LyoqXG5cdCAqIElmIGB0cnVlYCB0aGUgYWxlcnQgaXMgdmlzaWJsZSB0byB0aGUgdXNlclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGB0cnVlYFxuXHQgKi9cblx0dmlzaWJsZTogYm9vbGVhbjtcblx0XG5cblx0LyoqXG5cdCAqIEFjY2Vzc2liaWxpdHkgY2xvc2UgYnV0dG9uIGxhYmVsXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCdDbG9zZSdgXG5cdCAqL1xuXHRhcmlhQ2xvc2VCdXR0b25MYWJlbDogc3RyaW5nO1xuXHRcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdGNsYXNzTmFtZTogc3RyaW5nO1xuXHRcblx0LyoqXG5cdCAqIEdsb2JhbCB0ZW1wbGF0ZSBmb3IgdGhlIGFsZXJ0IGNvbXBvbmVudFxuXHQgKi9cblx0c3RydWN0dXJlOiBTbG90Q29udGVudDxBbGVydENvbnRleHQ+O1xuXHRcblx0LyoqXG5cdCAqIFRlbXBsYXRlIGZvciB0aGUgYWxlcnQgY29udGVudFxuXHQgKi9cblx0Y2hpbGRyZW46IFNsb3RDb250ZW50PEFsZXJ0Q29udGV4dD47XG5cdFxuXHQvKipcblx0ICogVHlwZSBvZiB0aGUgYWxlcnQsIGZvbGxvd2luZyBib290c3RyYXAgdHlwZXMuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCdwcmltYXJ5J2Bcblx0ICovXG5cdHR5cGU6IEJTQ29udGV4dHVhbENsYXNzO1xufVxuXG5cblxuZXhwb3J0IHR5cGUgQWxlcnRXaWRnZXQgPSBXaWRnZXQ8QWxlcnRQcm9wcywgQWxlcnRTdGF0ZSwgQWxlcnRBcGksIG9iamVjdCwgQWxlcnREaXJlY3RpdmVzPjtcblxuXG5cbi8qKlxuICogQ3JlYXRlIGFuIEFsZXJ0V2lkZ2V0IHdpdGggZ2l2ZW4gY29uZmlnIHByb3BzXG4gKiBAcGFyYW0gY29uZmlnIC0gYW4gb3B0aW9uYWwgYWxlcnQgY29uZmlnXG4gKiBAcmV0dXJucyBhbiBBbGVydFdpZGdldFxuICovXG5jb25zdCBleHBvcnRfY3JlYXRlQWxlcnQ6IFdpZGdldEZhY3Rvcnk8QWxlcnRXaWRnZXQ+ID0gY3JlYXRlQWxlcnQgYXMgYW55O1xuZXhwb3J0IHtleHBvcnRfY3JlYXRlQWxlcnQgYXMgY3JlYXRlQWxlcnR9O1xuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0QXBpIHtcblx0XG5cdC8qKlxuXHQgKiBUcmlnZ2VycyBhbGVydCBjbG9zaW5nIHByb2dyYW1tYXRpY2FsbHkgKHNhbWUgYXMgY2xpY2tpbmcgb24gdGhlIGNsb3NlIGJ1dHRvbiAow5cpKS5cblx0ICovXG5cdGNsb3NlKCk6IHZvaWQ7XG5cdFxuXG5cdC8qKlxuXHQgKiBUcmlnZ2VycyB0aGUgYWxlcnQgdG8gYmUgZGlzcGxheWVkIGZvciB0aGUgdXNlci5cblx0ICovXG5cdG9wZW4oKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGVydERpcmVjdGl2ZXMge1xuXHRcblx0LyoqXG5cdCAqIHRoZSB0cmFuc2l0aW9uIGRpcmVjdGl2ZSwgcGlsb3Rpbmcgd2hhdCBpcyB0aGUgdmlzdWFsIGVmZmVjdCBvZiBnb2luZyBmcm9tIGhpZGRlbiB0byB2aXNpYmxlXG5cdCAqL1xuXHR0cmFuc2l0aW9uRGlyZWN0aXZlOiBEaXJlY3RpdmU7XG59XG5cbiJdfQ==`;export{l as default};
