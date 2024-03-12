const e=`"use strict";
const tansu = require("@amadeus-it-group/tansu");
const services_extendWidget = require("./services/extendWidget.cjs");
const utils_directive = require("./utils/directive.cjs");
const utils_writables = require("./writables-D46sFgGK.cjs");
const common = require("./common-CZb4iSH3.cjs");
const toastDefaultConfig = {
  autoHide: true,
  delay: 5e3,
  slotHeader: void 0
};
const toastConfigValidator = {
  autoHide: utils_writables.typeBoolean,
  delay: utils_writables.typeNumberInRangeFactory(0, Infinity, { strict: true })
};
function getToastDefaultConfig() {
  return { ...common.getCommonAlertDefaultConfig(), ...toastDefaultConfig };
}
function createToast(config) {
  let _timeout;
  const extendedAlert = services_extendWidget.extendWidgetProps(
    common.createCommonAlert,
    toastDefaultConfig,
    toastConfigValidator
  )(config);
  const time$ = tansu.computed(() => {
    clearTimeout(_timeout);
    if (extendedAlert.stores.autoHide$()) {
      _timeout = setTimeout(() => extendedAlert.api.close(), extendedAlert.stores.delay$());
    }
  });
  return {
    ...extendedAlert,
    directives: {
      ...extendedAlert.directives,
      autoHideDirective: utils_directive.directiveSubscribe(time$)
    }
  };
}
exports.createToast = createToast;
exports.getToastDefaultConfig = getToastDefaultConfig;
`;export{e as default};
