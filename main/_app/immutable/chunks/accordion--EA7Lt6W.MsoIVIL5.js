const n=`import { writablesForProps, stateStores, mergeConfigStores, normalizeConfigStores } from "./utils/stores.js";
import { createTransition } from "./services/transitions/baseTransitions.js";
import { c as collapseVerticalTransition } from "./collapse-BQC9zBIz.js";
import { computed, writable } from "@amadeus-it-group/tansu";
import { n as noop } from "./func-DR0n-ShK.js";
import { c as typeBoolean, f as typeFunction, e as typeString } from "./writables-DoU_XYTX.js";
import { registrationArray, directiveSubscribe, bindDirectiveNoArg } from "./utils/directive.js";
import { g as generateId } from "./dom-B9Oy3i4s.js";
function adjustItemsCloseOthers(items, openItems, oldOpen) {
  let keepOpen;
  if (openItems.length == 2) {
    oldOpen = oldOpen ?? openItems[0];
    keepOpen = openItems.find((id) => id !== oldOpen);
  } else if (openItems.length > 2) {
    keepOpen = openItems[0];
  }
  if (keepOpen) {
    items.forEach((item) => {
      if (item.state$().itemId !== keepOpen && item.state$().itemVisible) {
        item.patch({ itemVisible: false });
      }
    });
  }
  return items;
}
function getItem(items, itemId) {
  return items.find((item) => item.state$().itemId === itemId);
}
const defaultAccordionConfig = {
  closeOthers: false,
  onShown: noop,
  onHidden: noop,
  className: "",
  itemId: "",
  itemDestroyOnHide: true,
  itemDisabled: false,
  itemVisible: false,
  itemAnimated: true,
  itemTransition: collapseVerticalTransition,
  itemHeadingTag: "",
  onItemShown: noop,
  onItemHidden: noop,
  onItemVisibleChange: noop,
  slotItemStructure: void 0,
  slotItemBody: void 0,
  slotItemHeader: void 0,
  itemClass: "",
  itemHeaderClass: "",
  itemButtonClass: "",
  itemBodyContainerClass: "",
  itemBodyClass: ""
};
const defaultItemConfig = {
  itemId: defaultAccordionConfig.itemId,
  itemDestroyOnHide: defaultAccordionConfig.itemDestroyOnHide,
  itemDisabled: defaultAccordionConfig.itemDisabled,
  itemVisible: defaultAccordionConfig.itemVisible,
  itemAnimated: defaultAccordionConfig.itemAnimated,
  itemTransition: defaultAccordionConfig.itemTransition,
  onItemShown: defaultAccordionConfig.onItemShown,
  onItemHidden: defaultAccordionConfig.onItemHidden,
  onItemVisibleChange: defaultAccordionConfig.onItemVisibleChange,
  slotItemStructure: defaultAccordionConfig.slotItemStructure,
  slotItemBody: defaultAccordionConfig.slotItemBody,
  slotItemHeader: defaultAccordionConfig.slotItemHeader,
  itemClass: defaultAccordionConfig.itemClass,
  itemHeaderClass: defaultAccordionConfig.itemHeaderClass,
  itemButtonClass: defaultAccordionConfig.itemButtonClass,
  itemBodyContainerClass: defaultAccordionConfig.itemBodyContainerClass,
  itemBodyClass: defaultAccordionConfig.itemBodyClass,
  itemHeadingTag: defaultAccordionConfig.itemHeadingTag
};
const accordionItemProps = Object.keys(defaultItemConfig);
function getAccordionDefaultConfig() {
  return { ...defaultAccordionConfig };
}
const configAccordionValidator = {
  closeOthers: typeBoolean,
  onShown: typeFunction,
  onHidden: typeFunction,
  itemId: typeString,
  itemDestroyOnHide: typeBoolean,
  itemDisabled: typeBoolean,
  itemVisible: typeBoolean,
  itemAnimated: typeBoolean,
  itemTransition: typeFunction,
  onItemShown: typeFunction,
  onItemHidden: typeFunction,
  onItemVisibleChange: typeFunction,
  itemClass: typeString,
  itemHeaderClass: typeString,
  itemButtonClass: typeString,
  itemBodyContainerClass: typeString,
  itemBodyClass: typeString,
  itemHeadingTag: typeString
};
const configItemValidator = {
  itemId: typeString,
  itemDestroyOnHide: typeBoolean,
  itemDisabled: typeBoolean,
  itemVisible: typeBoolean,
  itemAnimated: typeBoolean,
  itemTransition: typeFunction,
  onItemShown: typeFunction,
  onItemHidden: typeFunction,
  onItemVisibleChange: typeFunction,
  itemClass: typeString,
  itemHeaderClass: typeString,
  itemButtonClass: typeString,
  itemBodyContainerClass: typeString,
  itemBodyClass: typeString,
  itemHeadingTag: typeString
};
function createAccordionItem(accordionOnShown, accordionOnHidden, config) {
  const [
    {
      itemAnimated$,
      itemTransition$,
      itemDestroyOnHide$,
      onItemShown$,
      onItemHidden$,
      onItemVisibleChange$,
      itemVisible$,
      itemId$: _dirtyItemId$,
      itemDisabled$,
      ...stateProps
    },
    patch
  ] = writablesForProps(defaultItemConfig, config, configItemValidator);
  const initDone$ = writable(false);
  const _autoItemId$ = computed(() => generateId());
  const itemId$ = computed(() => _dirtyItemId$() || _autoItemId$());
  const shouldBeInDOM$ = computed(() => itemDestroyOnHide$() === false || !itemTransition.state$().hidden);
  const itemTransition = createTransition({
    props: {
      transition: itemTransition$,
      visible: itemVisible$,
      onVisibleChange: onItemVisibleChange$,
      animated: itemAnimated$,
      animatedOnInit: false,
      initDone: initDone$,
      onHidden: () => {
        accordionOnHidden()(itemId$());
        onItemHidden$()();
      },
      onShown: () => {
        accordionOnShown()(itemId$());
        onItemShown$()();
      }
    }
  });
  return {
    ...stateStores({
      itemVisible$,
      itemId$,
      shouldBeInDOM$,
      itemDisabled$,
      ...stateProps
    }),
    patch,
    actions: {
      click: () => {
        if (!itemDisabled$()) {
          itemVisible$.update((c) => !c);
        }
      }
    },
    api: {
      initDone: () => {
        initDone$.set(true);
      },
      collapse: () => {
        itemVisible$.set(false);
      },
      expand: () => {
        itemVisible$.set(true);
      },
      toggle: () => {
        itemVisible$.update((c) => !c);
      }
    },
    directives: { collapseDirective: bindDirectiveNoArg(itemTransition.directives.directive), accordionItemDirective: noop }
  };
}
function createAccordion(config) {
  const [
    {
      closeOthers$,
      onShown$,
      onHidden$,
      itemId$,
      itemAnimated$,
      itemClass$,
      itemDisabled$,
      itemVisible$,
      itemTransition$,
      itemDestroyOnHide$,
      itemBodyClass$,
      itemButtonClass$,
      itemBodyContainerClass$,
      itemHeaderClass$,
      itemHeadingTag$,
      onItemVisibleChange$,
      onItemHidden$,
      onItemShown$,
      slotItemStructure$,
      slotItemBody$,
      slotItemHeader$,
      ...stateProps
    },
    patch
  ] = writablesForProps(defaultAccordionConfig, config, configAccordionValidator);
  const accordionItemConfig = {
    itemId: itemId$,
    itemClass: itemClass$,
    itemAnimated: itemAnimated$,
    itemDisabled: itemDisabled$,
    itemVisible: itemVisible$,
    itemTransition: itemTransition$,
    itemDestroyOnHide: itemDestroyOnHide$,
    itemBodyClass: itemBodyClass$,
    itemButtonClass: itemButtonClass$,
    itemBodyContainerClass: itemBodyContainerClass$,
    itemHeaderClass: itemHeaderClass$,
    itemHeadingTag: itemHeadingTag$,
    onItemVisibleChange: onItemVisibleChange$,
    onItemHidden: onItemHidden$,
    onItemShown: onItemShown$,
    slotItemStructure: slotItemStructure$,
    slotItemBody: slotItemBody$,
    slotItemHeader: slotItemHeader$
  };
  const itemsWidget$ = registrationArray();
  const openItems$ = computed(() => {
    const openItems = [];
    itemsWidget$().forEach((item) => {
      if (item.state$().itemVisible) {
        openItems.push(item.state$().itemId);
      }
    });
    return openItems;
  });
  const oldOpenItem$ = writable(openItems$()[0]);
  const checkCloseOthersAction$ = computed(() => {
    if (closeOthers$()) {
      adjustItemsCloseOthers(itemsWidget$(), openItems$(), oldOpenItem$());
      oldOpenItem$.set(openItems$()[0]);
    }
  });
  const action$ = computed(() => {
    checkCloseOthersAction$();
  });
  return {
    ...stateStores({ itemsWidget$, ...stateProps }),
    patch,
    actions: {},
    api: {
      expand: (id) => {
        var _a;
        (_a = getItem(itemsWidget$(), id)) == null ? void 0 : _a.api.expand();
      },
      collapse: (id) => {
        var _a;
        (_a = getItem(itemsWidget$(), id)) == null ? void 0 : _a.api.collapse();
      },
      toggle: (id) => {
        var _a;
        (_a = getItem(itemsWidget$(), id)) == null ? void 0 : _a.api.toggle();
      },
      expandAll: () => {
        itemsWidget$().forEach((i) => i.api.expand());
      },
      collapseAll: () => {
        itemsWidget$().forEach((i) => i.api.collapse());
      },
      registerItem: (propsConfig) => {
        const item = createAccordionItem(onShown$, onHidden$, {
          config: mergeConfigStores(accordionItemProps, normalizeConfigStores(accordionItemProps, propsConfig == null ? void 0 : propsConfig.config), accordionItemConfig),
          props: propsConfig == null ? void 0 : propsConfig.props
        });
        item.directives.accordionItemDirective = () => ({ destroy: itemsWidget$.register(item) });
        return item;
      }
    },
    directives: { accordionDirective: directiveSubscribe(action$) }
  };
}
export {
  createAccordion as c,
  getAccordionDefaultConfig as g
};
`;export{n as default};
