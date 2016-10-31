'use strict';
(function(module,require){var exports=module.exports={};

var _keys = require('../../npm/babel-runtime/core-js/object/keys.js');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('../../npm/babel-runtime/helpers/typeof.js');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : (0, _typeof3.default)(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : (0, _typeof3.default)(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = (0, _keys2.default)(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

function wrapActionCreators(actionCreators) {
  return function (dispatch) {
    return bindActionCreators(actionCreators, dispatch);
  };
}

module.exports = wrapActionCreators;
})(module,require);