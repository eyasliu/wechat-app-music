'use strict';
(function(module,require){var exports=module.exports={};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('./npm/babel-runtime/helpers/classCallCheck.js');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _labrador = require('./npm/labrador/index.js');

var _labrador2 = _interopRequireDefault(_labrador);

var _util = require('./utils/util.js');

var _store = require('./utils/store.js');

var _store2 = _interopRequireDefault(_store);

var _reducers = require('./reducers.js');

var _reducers2 = _interopRequireDefault(_reducers);

var _connect = require('./utils/wechat-weapp-redux/connect.js');

var _connect2 = _interopRequireDefault(_connect);

var _Provider = require('./utils/wechat-weapp-redux/Provider.js');

var _Provider2 = _interopRequireDefault(_Provider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _store2.default)(_reducers2.default);

var _class = function _class() {
  (0, _classCallCheck3.default)(this, _class);
  this.store = store;
  this.dispatch = store.dispatch;
  this.connect = _connect2.default;

  // 音乐播放状态
  var setSongStatus = function setSongStatus(isPlaying) {
    return function () {
      _labrador2.default.setStorage({
        key: 'isPlaying',
        data: isPlaying
      });
    };
  };
  _labrador2.default.onBackgroundAudioPause(setSongStatus(false));
  _labrador2.default.onBackgroundAudioStop(setSongStatus(false));
  _labrador2.default.onBackgroundAudioPlay(setSongStatus(true));
};

exports.default = _class;
{
var __app=new exports.default();Object.getOwnPropertyNames(__app.constructor.prototype).forEach(function(name){if(name!=='constructor')__app[name]=__app.constructor.prototype[name]});App(__app);
}
})(module,require);