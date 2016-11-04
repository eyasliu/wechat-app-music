'use strict';
(function(module,require){var exports=module.exports={};

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = createStoreWithMiddleware;

var _redux = require('../npm/redux/lib/index.js');

var _reduxThunk = require('../npm/redux-thunk/lib/index.js');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxAsyncAwait = require('../npm/redux-async-await/lib/index.js');

var _reduxAsyncAwait2 = _interopRequireDefault(_reduxAsyncAwait);

var _reduxLogger = require('../npm/redux-logger/lib/index.js');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = [_reduxAsyncAwait2.default, _reduxThunk2.default, (0, _reduxLogger2.default)()];
function createStoreWithMiddleware() {
	return _redux.applyMiddleware.apply(undefined, middlewares)(_redux.createStore).apply(undefined, arguments);
}
})(module,require);