'use strict';
(function(module,require){var exports=module.exports={};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 处理 promise 的 redux 中间件
 * 可处理 es7 的 async/await 语法
 * 可处理 原生 promise action
 */

function isPromise(val) {
  return val && typeof val.then === 'function';
}

exports.default = function (_ref) {
  var dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      return isPromise(action) ? action.then(function (res) {
        return dispatch(res);
      }) : next(action);
    };
  };
};
})(module,require);