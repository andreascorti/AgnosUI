const G=`export {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5nZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uZ2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7V2lkZ2V0U2xvdENvbnRleHQsIFNsb3RDb250ZW50LCBXaWRnZXQsIERpcmVjdGl2ZX0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuXG5cblxuLyoqXG4gKiBBIHR5cGUgZm9yIHRoZSBzbG90IGNvbnRleHQgb2YgdGhlIHBhZ2luYXRpb24gd2lkZ2V0XG4gKi9cbmV4cG9ydCB0eXBlIFBhZ2luYXRpb25Db250ZXh0ID0gV2lkZ2V0U2xvdENvbnRleHQ8UGFnaW5hdGlvbldpZGdldD47XG5cblxuXG4vKipcbiAqIEEgdHlwZSBmb3IgdGhlIHNsb3QgY29udGV4dCBvZiB0aGUgcGFnaW5hdGlvbiB3aWRnZXQgd2hlbiB0aGUgc2xvdCBpcyB0aGUgbnVtYmVyIGxhYmVsXG4gKi9cbmV4cG9ydCB0eXBlIFBhZ2luYXRpb25OdW1iZXJDb250ZXh0ID0gUGFnaW5hdGlvbkNvbnRleHQgJiB7XG5cdC8qKlxuXHQgKiBEaXNwbGF5ZWQgcGFnZVxuXHQgKi9cblx0ZGlzcGxheWVkUGFnZTogbnVtYmVyO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBQYWdpbmF0aW9uU3RhdGUge1xuXHRcblx0LyoqXG5cdCAqIFRoZSBudW1iZXIgb2YgcGFnZXMuXG5cdCAqL1xuXHRwYWdlQ291bnQ6IG51bWJlcjtcblx0XG5cdC8qKlxuXHQgKiBUaGUgY3VycmVudCBwYWdlcywgdGhlIG51bWJlciBpbiB0aGUgQXJyYXkgaXMgdGhlIG51bWJlciBvZiB0aGUgcGFnZS5cblx0ICovXG5cdHBhZ2VzOiBudW1iZXJbXTtcblx0XG5cdC8qKlxuXHQgKiB0cnVlIGlmIHRoZSBwcmV2aW91cyBsaW5rIG5lZWQgdG8gYmUgZGlzYWJsZWRcblx0ICovXG5cdHByZXZpb3VzRGlzYWJsZWQ6IGJvb2xlYW47XG5cdFxuXHQvKipcblx0ICogdHJ1ZSBpZiB0aGUgbmV4dCBsaW5rIG5lZWQgdG8gYmUgZGlzYWJsZWRcblx0ICovXG5cdG5leHREaXNhYmxlZDogYm9vbGVhbjtcblx0XG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIGVhY2ggXCJQYWdlXCIgcGFnZSBsaW5rLlxuXHQgKi9cblx0cGFnZXNMYWJlbDogc3RyaW5nW107XG5cdFxuXG5cdC8qKiBUaGUgaHJlZnMgZm9yIGVhY2ggXCJQYWdlXCIgcGFnZSBsaW5rICovXG5cdHBhZ2VzSHJlZnM6IHN0cmluZ1tdO1xuXHRcblxuXHQvKiogVGhlIGhyZWZzIGZvciB0aGUgZGlyZWN0aW9uIGxpbmtzICAqL1xuXHRkaXJlY3Rpb25zSHJlZnM6IERpcmVjdGlvbnNIcmVmcztcblx0XG5cblx0LyoqIFRoZSBhcmlhLWxpdmUgdGV4dCAqL1xuXHRhcmlhTGl2ZUxhYmVsVGV4dDogc3RyaW5nO1xuXHRcblx0LyoqXG5cdCAqIFRoZSBjdXJyZW50IHBhZ2UuXG5cdCAqXG5cdCAqIFBhZ2UgbnVtYmVycyBzdGFydCB3aXRoIGAxYC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgMWBcblx0ICovXG5cdHBhZ2U6IG51bWJlcjtcblx0IC8vIHZhbHVlIG9mIHRoZSBjdXJyZW50L2luaXQgcGFnZSB0byBkaXNwbGF5XG5cblx0LyoqXG5cdCAqIFRoZSBwYWdpbmF0aW9uIGRpc3BsYXkgc2l6ZS5cblx0ICpcblx0ICogQm9vdHN0cmFwIGN1cnJlbnRseSBzdXBwb3J0cyBzbWFsbCBhbmQgbGFyZ2Ugc2l6ZXMuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYG51bGxgXG5cdCAqL1xuXHRzaXplOiAnc20nIHwgJ2xnJyB8IG51bGw7XG5cdFxuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBuYXYgZWxlbWVudC5cblx0ICpcblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCdQYWdlIG5hdmlnYXRpb24nYFxuXHQgKi9cblx0YXJpYUxhYmVsOiBzdHJpbmc7XG5cdFxuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcImFjdGl2ZVwiIHBhZ2UuXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICcoY3VycmVudCknXG5cdCAqIGBgYFxuXHQgKi9cblx0YWN0aXZlTGFiZWw6IHN0cmluZztcblx0XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiRmlyc3RcIiBwYWdlIGJ1dHRvbi5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogJ0FjdGlvbiBsaW5rIGZvciBmaXJzdCBwYWdlJ1xuXHQgKiBgYGBcblx0ICovXG5cdGFyaWFGaXJzdExhYmVsOiBzdHJpbmc7XG5cdFxuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcIlByZXZpb3VzXCIgcGFnZSBidXR0b24uXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICdBY3Rpb24gbGluayBmb3IgcHJldmlvdXMgcGFnZSdcblx0ICogYGBgXG5cdCAqL1xuXHRhcmlhUHJldmlvdXNMYWJlbDogc3RyaW5nO1xuXHRcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJOZXh0XCIgcGFnZSBidXR0b24uXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICdBY3Rpb24gbGluayBmb3IgbmV4dCBwYWdlJ1xuXHQgKiBgYGBcblx0ICovXG5cdGFyaWFOZXh0TGFiZWw6IHN0cmluZztcblx0XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiTGFzdFwiIHBhZ2UgYnV0dG9uLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAnQWN0aW9uIGxpbmsgZm9yIGxhc3QgcGFnZSdcblx0ICogYGBgXG5cdCAqL1xuXHRhcmlhTGFzdExhYmVsOiBzdHJpbmc7XG5cdFxuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcIkVsbGlwc2lzXCIgcGFnZS5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCdFbGxpcHNpcyBwYWdlIGVsZW1lbnQnYFxuXHQgKi9cblx0YXJpYUVsbGlwc2lzTGFiZWw6IHN0cmluZztcblx0XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgcGFnaW5hdGlvbiBsaW5rcyB3aWxsIGJlIGRpc2FibGVkLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdGRpc2FibGVkOiBib29sZWFuO1xuXHRcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgXCJOZXh0XCIgYW5kIFwiUHJldmlvdXNcIiBwYWdlIGxpbmtzIGFyZSBzaG93bi5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdGRpcmVjdGlvbkxpbmtzOiBib29sZWFuO1xuXHRcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgXCJGaXJzdFwiIGFuZCBcIkxhc3RcIiBwYWdlIGxpbmtzIGFyZSBzaG93bi5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRib3VuZGFyeUxpbmtzOiBib29sZWFuO1xuXHRcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdGNsYXNzTmFtZTogc3RyaW5nO1xuXHRcblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG5cdCAqIFRoZSBkZWZhdWx0IHN0cnVjdHVyZSB1c2VzIHtAbGluayBQYWdpbmF0aW9uUHJvcHMuZWxsaXBzaXNMYWJlbHxlbGxpcHNpc0xhYmVsfSwge0BsaW5rIFBhZ2luYXRpb25Qcm9wcy5maXJzdFBhZ2VMYWJlbHxmaXJzdFBhZ2VMYWJlbH0sXG5cdCAqIHtAbGluayBQYWdpbmF0aW9uUHJvcHMucHJldmlvdXNQYWdlTGFiZWx8cHJldmlvdXNQYWdlTGFiZWx9LCB7QGxpbmsgUGFnaW5hdGlvblByb3BzLm5leHRQYWdlTGFiZWx8bmV4dFBhZ2VMYWJlbH0sXG5cdCAqIHtAbGluayBQYWdpbmF0aW9uUHJvcHMubGFzdFBhZ2VMYWJlbHxsYXN0UGFnZUxhYmVsfSwge0BsaW5rIFBhZ2luYXRpb25Qcm9wcy5wYWdlc0Rpc3BsYXl8cGFnZXNEaXNwbGF5fSxcblx0ICoge0BsaW5rIFBhZ2luYXRpb25Qcm9wcy5udW1iZXJMYWJlbHxudW1iZXJMYWJlbH0sXG5cdCAqL1xuXHRzdHJ1Y3R1cmU6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBlbGxpcHNpcyBzbG90XG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAn4oCmJ2Bcblx0ICovXG5cdGVsbGlwc2lzTGFiZWw6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBmaXJzdCBzbG90XG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnwqsnYFxuXHQgKi9cblx0Zmlyc3RQYWdlTGFiZWw6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBwcmV2aW91cyBzbG90XG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAn4oC5J2Bcblx0ICovXG5cdHByZXZpb3VzUGFnZUxhYmVsOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdFxuXG5cdC8qKlxuXHQgKiBUaGUgdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgbmV4dCBzbG90XG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAn4oC6J2Bcblx0ICovXG5cdG5leHRQYWdlTGFiZWw6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBsYXN0IHNsb3Rcblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCfCuydgXG5cdCAqL1xuXHRsYXN0UGFnZUxhYmVsOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdFxuXG5cdC8qKlxuXHQgKiBUaGUgdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgcGFnZXMgc2xvdFxuXHQgKiBUbyB1c2UgdG8gY3VzdG9taXplIHRoZSBwYWdlcyB2aWV3XG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICovXG5cdHBhZ2VzRGlzcGxheTogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRcblxuXHQvKipcblx0ICogVGhlIHRlbXBsYXRlIHRvIHVzZSBmb3IgdGhlIG51bWJlciBzbG90XG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBAcGFyYW0gZGlzcGxheWVkUGFnZSAtIFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKHtkaXNwbGF5ZWRQYWdlfTogUGFnaW5hdGlvbk51bWJlckNvbnRleHQpID0+IGAke2Rpc3BsYXllZFBhZ2V9YFxuXHQgKiBgYGBcblx0ICovXG5cdG51bWJlckxhYmVsOiBTbG90Q29udGVudDxQYWdpbmF0aW9uTnVtYmVyQ29udGV4dD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnaW5hdGlvblByb3BzIHtcblx0XG5cdC8qKlxuXHQgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHlvdXIgcGFnaW5hdGVkIGNvbGxlY3Rpb24uXG5cdCAqXG5cdCAqIE5vdGUsIHRoYXQgdGhpcyBpcyBub3QgdGhlIG51bWJlciBvZiBwYWdlcy4gUGFnZSBudW1iZXJzIGFyZSBjYWxjdWxhdGVkIGR5bmFtaWNhbGx5IGJhc2VkIG9uXG5cdCAqIGBjb2xsZWN0aW9uU2l6ZWAgYW5kIGBwYWdlU2l6ZWAuXG5cdCAqXG5cdCAqIEV4LiBpZiB5b3UgaGF2ZSAxMDAgaXRlbXMgaW4geW91ciBjb2xsZWN0aW9uIGFuZCBkaXNwbGF5aW5nIDIwIGl0ZW1zIHBlciBwYWdlLCB5b3UnbGwgZW5kIHVwIHdpdGggNSBwYWdlcy5cblx0ICpcblx0ICogV2hhdGV2ZXIgdGhlIGNvbGxlY3Rpb25TaXplIHRoZSBwYWdlIG51bWJlciBpcyBvZiBtaW5pbXVtIDEuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYDBgXG5cdCAqL1xuXHRjb2xsZWN0aW9uU2l6ZTogbnVtYmVyO1xuXHRcblxuXHQvKipcblx0ICogVGhlIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZS5cblx0ICogQHJlbWFya3MgbWluIHZhbHVlIGlzIDFcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgMTBgXG5cdCAqL1xuXHRwYWdlU2l6ZTogbnVtYmVyO1xuXHRcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiB0aGUgcGFnZSBpcyBjaGFuZ2VkLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIHRoZSBudW1iZXIgb2YgdGhlIG5ld2x5IHNlbGVjdGVkIHBhZ2UuXG5cdCAqXG5cdCAqIFBhZ2UgbnVtYmVycyBzdGFydCB3aXRoIGAxYC5cblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoKSA9PiB7fVxuXHQgKiBgYGBcblx0ICovXG5cdG9uUGFnZUNoYW5nZTogKHBhZ2U6IG51bWJlcikgPT4gdm9pZDtcblx0XG5cblx0LyoqXG5cdCAqIHBhZ2VzRmFjdG9yeSByZXR1cm5zIGEgZnVuY3Rpb24gY29tcHV0aW5nIHRoZSBhcnJheSBvZiBwYWdlcyB0byBiZSBkaXNwbGF5ZWRcblx0ICogYXMgbnVtYmVyICgtMSBhcmUgdHJlYXRlZCBhcyBlbGxpcHNpcykuXG5cdCAqIFVzZSBQYWdlIHNsb3QgdG8gY3VzdG9taXplIHRoZSBwYWdlcyB2aWV3IGFuZCBub3QgdGhpc1xuXHQgKiBAcGFyYW0gcGFnZSAtIFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyXG5cdCAqIEBwYXJhbSBwYWdlQ291bnQgLSBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKF9wYWdlOiBudW1iZXIsIHBhZ2VDb3VudDogbnVtYmVyKSA9PiB7XG5cdCAqIFx0XHRjb25zdCBwYWdlczogbnVtYmVyW10gPSBbXTtcblx0ICogXHRcdGZvciAobGV0IGkgPSAxOyBpIDw9IHBhZ2VDb3VudDsgaSsrKSB7XG5cdCAqIFx0XHRcdHBhZ2VzLnB1c2goaSk7XG5cdCAqIFx0XHR9XG5cdCAqIFx0XHRyZXR1cm4gcGFnZXM7XG5cdCAqIFx0fVxuXHQgKiBgYGBcblx0ICovXG5cdHBhZ2VzRmFjdG9yeTogKHBhZ2U6IG51bWJlciwgcGFnZUNvdW50OiBudW1iZXIpID0+IG51bWJlcltdO1xuXHRcblxuXHQvKipcblx0ICogUHJvdmlkZSB0aGUgbGFiZWwgZm9yIGVhY2ggXCJQYWdlXCIgcGFnZSBidXR0b24uXG5cdCAqIFRoaXMgaXMgdXNlZCBmb3IgYWNjZXNzaWJpbGl0eSBwdXJwb3Nlcy5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBwYXJhbSBwcm9jZXNzUGFnZSAtIFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyXG5cdCAqIEBwYXJhbSBwYWdlQ291bnQgLSBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKHByb2Nlc3NQYWdlOiBudW1iZXIsIHBhZ2VDb3VudDogbnVtYmVyKSA9PiBgUGFnZSAke3Byb2Nlc3NQYWdlfSBvZiAke3BhZ2VDb3VudH1gXG5cdCAqIGBgYFxuXHQgKi9cblx0YXJpYVBhZ2VMYWJlbDogKHByb2Nlc3NQYWdlOiBudW1iZXIsIHBhZ2VDb3VudDogbnVtYmVyKSA9PiBzdHJpbmc7XG5cdFxuXG5cdC8qKlxuXHQgKiBQcm92aWRlIHRoZSBsYWJlbCBmb3IgdGhlIGFyaWEtbGl2ZSBlbGVtZW50XG5cdCAqIFRoaXMgaXMgdXNlZCBmb3IgYWNjZXNzaWJpbGl0eSBwdXJwb3Nlcy5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBwYXJhbSBjdXJyZW50UGFnZSAtIFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyXG5cdCAqIEBwYXJhbSBwYWdlQ291bnQgLSBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKGN1cnJlbnRQYWdlOiBudW1iZXIsIHBhZ2VDb3VudDogbnVtYmVyKSA9PiBgQ3VycmVudCBwYWdlIGlzICR7Y3VycmVudFBhZ2V9YFxuXHQgKiBgYGBcblx0ICovXG5cdGFyaWFMaXZlTGFiZWw6IChjdXJyZW50UGFnZTogbnVtYmVyLCBwYWdlQ291bnQ6IG51bWJlcikgPT4gc3RyaW5nO1xuXHRcblxuXHQvKipcblx0ICogRmFjdG9yeSBmdW5jdGlvbiBwcm92aWRpbmcgdGhlIGhyZWYgZm9yIGEgXCJQYWdlXCIgcGFnZSBhbmNob3IsXG5cdCAqIGJhc2VkIG9uIHRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyXG5cdCAqIEBwYXJhbSBwYWdlTnVtYmVyIC0gVGhlIGluZGV4IHRvIHVzZSBpbiB0aGUgbGlua1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqIChfcGFnZTogbnVtYmVyKSA9PiBQQUdFX0xJTktfREVGQVVMVFxuXHQgKiBgYGBcblx0ICovXG5cdHBhZ2VMaW5rOiAocGFnZU51bWJlcjogbnVtYmVyKSA9PiBzdHJpbmc7XG5cdFxuXHQvKipcblx0ICogVGhlIGN1cnJlbnQgcGFnZS5cblx0ICpcblx0ICogUGFnZSBudW1iZXJzIHN0YXJ0IHdpdGggYDFgLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAxYFxuXHQgKi9cblx0cGFnZTogbnVtYmVyO1xuXHQgLy8gdmFsdWUgb2YgdGhlIGN1cnJlbnQvaW5pdCBwYWdlIHRvIGRpc3BsYXlcblxuXHQvKipcblx0ICogVGhlIHBhZ2luYXRpb24gZGlzcGxheSBzaXplLlxuXHQgKlxuXHQgKiBCb290c3RyYXAgY3VycmVudGx5IHN1cHBvcnRzIHNtYWxsIGFuZCBsYXJnZSBzaXplcy5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgbnVsbGBcblx0ICovXG5cdHNpemU6ICdzbScgfCAnbGcnIHwgbnVsbDtcblx0XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIG5hdiBlbGVtZW50LlxuXHQgKlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ1BhZ2UgbmF2aWdhdGlvbidgXG5cdCAqL1xuXHRhcmlhTGFiZWw6IHN0cmluZztcblx0XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiYWN0aXZlXCIgcGFnZS5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogJyhjdXJyZW50KSdcblx0ICogYGBgXG5cdCAqL1xuXHRhY3RpdmVMYWJlbDogc3RyaW5nO1xuXHRcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJGaXJzdFwiIHBhZ2UgYnV0dG9uLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAnQWN0aW9uIGxpbmsgZm9yIGZpcnN0IHBhZ2UnXG5cdCAqIGBgYFxuXHQgKi9cblx0YXJpYUZpcnN0TGFiZWw6IHN0cmluZztcblx0XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiUHJldmlvdXNcIiBwYWdlIGJ1dHRvbi5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogJ0FjdGlvbiBsaW5rIGZvciBwcmV2aW91cyBwYWdlJ1xuXHQgKiBgYGBcblx0ICovXG5cdGFyaWFQcmV2aW91c0xhYmVsOiBzdHJpbmc7XG5cdFxuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcIk5leHRcIiBwYWdlIGJ1dHRvbi5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogJ0FjdGlvbiBsaW5rIGZvciBuZXh0IHBhZ2UnXG5cdCAqIGBgYFxuXHQgKi9cblx0YXJpYU5leHRMYWJlbDogc3RyaW5nO1xuXHRcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJMYXN0XCIgcGFnZSBidXR0b24uXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICdBY3Rpb24gbGluayBmb3IgbGFzdCBwYWdlJ1xuXHQgKiBgYGBcblx0ICovXG5cdGFyaWFMYXN0TGFiZWw6IHN0cmluZztcblx0XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiRWxsaXBzaXNcIiBwYWdlLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ0VsbGlwc2lzIHBhZ2UgZWxlbWVudCdgXG5cdCAqL1xuXHRhcmlhRWxsaXBzaXNMYWJlbDogc3RyaW5nO1xuXHRcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBwYWdpbmF0aW9uIGxpbmtzIHdpbGwgYmUgZGlzYWJsZWQuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYGZhbHNlYFxuXHQgKi9cblx0ZGlzYWJsZWQ6IGJvb2xlYW47XG5cdFxuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBcIk5leHRcIiBhbmQgXCJQcmV2aW91c1wiIHBhZ2UgbGlua3MgYXJlIHNob3duLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGB0cnVlYFxuXHQgKi9cblx0ZGlyZWN0aW9uTGlua3M6IGJvb2xlYW47XG5cdFxuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBcIkZpcnN0XCIgYW5kIFwiTGFzdFwiIHBhZ2UgbGlua3MgYXJlIHNob3duLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdGJvdW5kYXJ5TGlua3M6IGJvb2xlYW47XG5cdFxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0Y2xhc3NOYW1lOiBzdHJpbmc7XG5cdFxuXHQvKipcblx0ICogVGhlIHRlbXBsYXRlIHRvIHVzZSBmb3IgdGhlIHN0cnVjdHVyZSBvZiB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcblx0ICogVGhlIGRlZmF1bHQgc3RydWN0dXJlIHVzZXMge0BsaW5rIFBhZ2luYXRpb25Qcm9wcy5lbGxpcHNpc0xhYmVsfGVsbGlwc2lzTGFiZWx9LCB7QGxpbmsgUGFnaW5hdGlvblByb3BzLmZpcnN0UGFnZUxhYmVsfGZpcnN0UGFnZUxhYmVsfSxcblx0ICoge0BsaW5rIFBhZ2luYXRpb25Qcm9wcy5wcmV2aW91c1BhZ2VMYWJlbHxwcmV2aW91c1BhZ2VMYWJlbH0sIHtAbGluayBQYWdpbmF0aW9uUHJvcHMubmV4dFBhZ2VMYWJlbHxuZXh0UGFnZUxhYmVsfSxcblx0ICoge0BsaW5rIFBhZ2luYXRpb25Qcm9wcy5sYXN0UGFnZUxhYmVsfGxhc3RQYWdlTGFiZWx9LCB7QGxpbmsgUGFnaW5hdGlvblByb3BzLnBhZ2VzRGlzcGxheXxwYWdlc0Rpc3BsYXl9LFxuXHQgKiB7QGxpbmsgUGFnaW5hdGlvblByb3BzLm51bWJlckxhYmVsfG51bWJlckxhYmVsfSxcblx0ICovXG5cdHN0cnVjdHVyZTogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRcblxuXHQvKipcblx0ICogVGhlIHRlbXBsYXRlIHRvIHVzZSBmb3IgdGhlIGVsbGlwc2lzIHNsb3Rcblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCfigKYnYFxuXHQgKi9cblx0ZWxsaXBzaXNMYWJlbDogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRcblxuXHQvKipcblx0ICogVGhlIHRlbXBsYXRlIHRvIHVzZSBmb3IgdGhlIGZpcnN0IHNsb3Rcblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCfCqydgXG5cdCAqL1xuXHRmaXJzdFBhZ2VMYWJlbDogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRcblxuXHQvKipcblx0ICogVGhlIHRlbXBsYXRlIHRvIHVzZSBmb3IgdGhlIHByZXZpb3VzIHNsb3Rcblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCfigLknYFxuXHQgKi9cblx0cHJldmlvdXNQYWdlTGFiZWw6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBuZXh0IHNsb3Rcblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCfigLonYFxuXHQgKi9cblx0bmV4dFBhZ2VMYWJlbDogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRcblxuXHQvKipcblx0ICogVGhlIHRlbXBsYXRlIHRvIHVzZSBmb3IgdGhlIGxhc3Qgc2xvdFxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ8K7J2Bcblx0ICovXG5cdGxhc3RQYWdlTGFiZWw6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBwYWdlcyBzbG90XG5cdCAqIFRvIHVzZSB0byBjdXN0b21pemUgdGhlIHBhZ2VzIHZpZXdcblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKi9cblx0cGFnZXNEaXNwbGF5OiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdFxuXG5cdC8qKlxuXHQgKiBUaGUgdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgbnVtYmVyIHNsb3Rcblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIEBwYXJhbSBkaXNwbGF5ZWRQYWdlIC0gVGhlIGN1cnJlbnQgcGFnZSBudW1iZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoe2Rpc3BsYXllZFBhZ2V9OiBQYWdpbmF0aW9uTnVtYmVyQ29udGV4dCkgPT4gYCR7ZGlzcGxheWVkUGFnZX1gXG5cdCAqIGBgYFxuXHQgKi9cblx0bnVtYmVyTGFiZWw6IFNsb3RDb250ZW50PFBhZ2luYXRpb25OdW1iZXJDb250ZXh0Pjtcbn1cblxuXG5cbmV4cG9ydCB0eXBlIFBhZ2luYXRpb25XaWRnZXQgPSBXaWRnZXQ8UGFnaW5hdGlvblByb3BzLCBQYWdpbmF0aW9uU3RhdGUsIFBhZ2luYXRpb25BcGksIFBhZ2luYXRpb25BY3Rpb25zLCBQYWdpbmF0aW9uRGlyZWN0aXZlcz47XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0aW9uc0hyZWZzIHtcblx0XG5cdC8qKlxuXHQgKiBUaGUgaHJlZiBmb3IgdGhlICdQcmV2aW91cycgbmF2aWdhdGlvbiBsaW5rXG5cdCAqL1xuXHRwcmV2aW91czogc3RyaW5nO1xuXHRcblx0LyoqXG5cdCAqIFRoZSBocmVmIGZvciB0aGUgJ05leHQnIGRpcmVjdGlvbiBsaW5rXG5cdCAqL1xuXHRuZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnaW5hdGlvbkFjdGlvbnMge1xuXHRcblx0LyoqXG5cdCAqIFRvIFwiZ29cIiB0byBhIHNwZWNpZmljIHBhZ2Vcblx0ICogQHBhcmFtIHBhZ2UgLSBUaGUgcGFnZSBudW1iZXIgdG8gc2VsZWN0XG5cdCAqL1xuXHRzZWxlY3QocGFnZTogbnVtYmVyLCBldmVudD86IE1vdXNlRXZlbnQpOiB2b2lkO1xuXHRcblx0LyoqXG5cdCAqIFRvIFwiZ29cIiB0byB0aGUgZmlyc3QgcGFnZVxuXHQgKi9cblx0Zmlyc3QoZXZlbnQ/OiBNb3VzZUV2ZW50KTogdm9pZDtcblx0XG5cdC8qKlxuXHQgKiBUbyBcImdvXCIgdG8gdGhlIHByZXZpb3VzIHBhZ2Vcblx0ICovXG5cdHByZXZpb3VzKGV2ZW50PzogTW91c2VFdmVudCk6IHZvaWQ7XG5cdFxuXHQvKipcblx0ICogVG8gXCJnb1wiIHRvIHRoZSBuZXh0IHBhZ2Vcblx0ICovXG5cdG5leHQoZXZlbnQ/OiBNb3VzZUV2ZW50KTogdm9pZDtcblx0XG5cdC8qKlxuXHQgKiBUbyBcImdvXCIgdG8gdGhlIGxhc3QgcGFnZVxuXHQgKi9cblx0bGFzdChldmVudD86IE1vdXNlRXZlbnQpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2luYXRpb25EaXJlY3RpdmVzIHtcblx0XG5cdC8qKlxuXHQgKiBBIGRpcmVjdGl2ZSB0byBiZSBhcHBsaWVkIHRvIGVhY2ggcGFnZSBsaW5rXG5cdCAqIFRoaXMgd2lsbCBoYW5kbGUgdGhlIGNsaWNrLCB0YWJpbmRleCBhbmQgYXJpYSBhdHRyaWJ1dGVzXG5cdCAqL1xuXHRwYWdlTGluazogRGlyZWN0aXZlPHtcblx0XHRwYWdlOiBudW1iZXI7XG5cdH0+O1xuXHRcblxuXHQvKipcblx0ICogQSBkaXJlY3RpdmUgdG8gYmUgYXBwbGllZCBvbiB0aGUgcHJldmlvdXMgbGlua1xuXHQgKi9cblx0cGFnZVByZXY6IERpcmVjdGl2ZTtcblx0XG5cblx0LyoqXG5cdCAqIEEgZGlyZWN0aXZlIHRvIGJlIGFwcGxpZWQgb24gdGhlIGZpcnN0IGxpbmtcblx0ICovXG5cdHBhZ2VGaXJzdDogRGlyZWN0aXZlO1xuXHRcblxuXHQvKipcblx0ICogQSBkaXJlY3RpdmUgdG8gYmUgYXBwbGllZCBvbiB0aGUgbmV4dCBsaW5rXG5cdCAqL1xuXHRwYWdlTmV4dDogRGlyZWN0aXZlO1xuXHRcblxuXHQvKipcblx0ICogQSBkaXJlY3RpdmUgdG8gYmUgYXBwbGllZCBvbiB0aGUgTGFzdCBsaW5rXG5cdCAqL1xuXHRwYWdlTGFzdDogRGlyZWN0aXZlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2luYXRpb25BcGkge1xufVxuXG4iXX0=`;export{G as default};
