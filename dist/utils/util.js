'use strict';
(function(module,require){var exports=module.exports={};

var _promise = require('../npm/babel-runtime/core-js/promise.js');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = require('./api.js');
var playSong = function playSong(id) {
  return new _promise2.default(function (resolve, reject) {
    api.getDetail(id).then(function (data) {
      var file = data.bitrate;
      var item = data.songinfo;
      wx.playBackgroundAudio({
        dataUrl: file.file_link,
        title: item.title,
        coverImgUrl: item.pic_big,
        success: function success(res) {
          resolve({ file: file, item: item }, res);
        },
        fail: reject
      });
    });
  });
};

module.exports = {
  playSong: playSong
};
})(module,require);