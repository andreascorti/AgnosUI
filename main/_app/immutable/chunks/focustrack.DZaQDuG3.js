const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tansu = require("@amadeus-it-group/tansu");
const utils_directive = require("../utils/directive.cjs");
const evtFocusIn = "focusin";
const evtFocusOut = "focusout";
const activeElement$ = tansu.readable(null, {
  onUse({ set }) {
    function setActiveElement() {
      set(document.activeElement);
    }
    setActiveElement();
    const container = document.documentElement;
    function onFocusOut() {
      setTimeout(setActiveElement);
    }
    container.addEventListener(evtFocusIn, setActiveElement, { capture: true });
    container.addEventListener(evtFocusOut, onFocusOut, { capture: true });
    return () => {
      container.removeEventListener(evtFocusIn, setActiveElement, { capture: true });
      container.removeEventListener(evtFocusOut, onFocusOut, { capture: true });
    };
  },
  equal: Object.is
});
function createHasFocus() {
  const { elements$, directive } = utils_directive.createStoreArrayDirective();
  const hasFocus$ = tansu.computed(() => {
    const activeElement = activeElement$();
    if (!activeElement) {
      return false;
    }
    for (const element of elements$()) {
      if (element === activeElement || element.contains(activeElement)) {
        return true;
      }
    }
    return false;
  });
  return {
    directive,
    hasFocus$
  };
}
exports.activeElement$ = activeElement$;
exports.createHasFocus = createHasFocus;
`;export{e as default};
