'use strict';
(function(module,require){var exports=module.exports={};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createReducer;
/**
 * 创建高效率，安全，可读性好的redux reducer
 * @param  {obj} initState  初始state
 * @param  {obj} actions    操作
 * @return {reducer}        redux可使用的reducer
 */
function createReducer() {
  var initState = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return function () {
    var actions = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    return function () {
      var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
      var action = arguments[1];
      return actions.hasOwnProperty(action.type) ? actions[action.type].apply(undefined, [state, action]) : state;
    };
  };
}
})(module,require);