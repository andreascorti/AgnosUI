const n=`"use strict";
const utils_writables = require("./writables-D46sFgGK.cjs");
const utils_stores = require("./utils/stores.cjs");
const tansu = require("@amadeus-it-group/tansu");
const defaultConfig = {
  min: 0,
  max: 100,
  value: 0,
  ariaLabel: "Progressbar",
  className: "",
  slotStructure: void 0,
  slotDefault: void 0,
  height: "",
  striped: false,
  animated: false,
  ariaValueTextFn: () => void 0
};
function getProgressbarDefaultConfig() {
  return { ...defaultConfig };
}
const configValidator = {
  min: utils_writables.typeNumber,
  max: utils_writables.typeNumber,
  value: utils_writables.typeNumber,
  ariaLabel: utils_writables.typeString,
  className: utils_writables.typeString,
  height: utils_writables.typeString,
  striped: utils_writables.typeBoolean,
  animated: utils_writables.typeBoolean,
  ariaValueTextFn: utils_writables.typeFunction
};
function createProgressbar(config) {
  const [
    {
      // dirty inputs that need adjustment:
      max$: _dirtyMaximum$,
      value$: _dirtyValue$,
      // clean inputs
      min$,
      ariaValueTextFn$,
      ...stateProps
    },
    patch
  ] = utils_stores.writablesForProps(defaultConfig, config, configValidator);
  const max$ = tansu.computed(() => Math.max(min$(), _dirtyMaximum$()));
  const value$ = tansu.computed(() => utils_writables.clamp(_dirtyValue$(), max$(), min$()));
  const percentage$ = tansu.computed(() => {
    const max = max$();
    const min = min$();
    if (max > min) {
      return utils_writables.clamp((value$() - min) * 100 / (max - min), 100, 0);
    } else {
      return 0;
    }
  });
  const started$ = tansu.computed(() => value$() > min$());
  const finished$ = tansu.computed(() => value$() === max$());
  const ariaValueText$ = tansu.computed(() => ariaValueTextFn$()(value$(), min$(), max$()));
  return {
    ...utils_stores.stateStores({
      min$,
      max$,
      value$,
      percentage$,
      started$,
      finished$,
      ariaValueText$,
      ...stateProps
    }),
    patch,
    api: {},
    directives: {},
    actions: {}
  };
}
exports.createProgressbar = createProgressbar;
exports.getProgressbarDefaultConfig = getProgressbarDefaultConfig;
`;export{n as default};
