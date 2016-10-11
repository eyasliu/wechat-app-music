'use strict';
var exports=module.exports={};
try{
var global=window=require('./npm/labrador/global.js');

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('./npm/babel-runtime/helpers/classCallCheck.js');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _labrador = require('./npm/labrador/index.js');

var _labrador2 = _interopRequireDefault(_labrador);

var _util = require('./utils/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function _class() {
  (0, _classCallCheck3.default)(this, _class);
  this.globalData = {
    playing: {},
    data: {
      ranks: [{
        text: '新歌榜',
        type: 1
      }, {
        text: '热歌榜',
        type: 2
      }, {
        text: "摇滚榜",
        type: 11
      }, {
        text: "爵士",
        type: 12
      }, {
        text: "流行",
        type: 16
      }, {
        text: "欧美金曲榜",
        type: 21
      }, {
        text: "经典老歌榜",
        type: 22
      }, {
        text: "情歌对唱榜",
        type: 23
      }, {
        text: "影视金曲榜",
        type: 24
      }, {
        text: "网络歌曲榜",
        type: 25
      }],
      list: [],
      tab: [{
        label: '排行榜',
        type: 'rank',
        url: '/pages/online/index',
        active: true
      }, {
        label: '搜索',
        type: 'search',
        url: '/pages/online/search/index'
      }]
    }
  };

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
}catch(error){console.error(error.stack);throw error;}