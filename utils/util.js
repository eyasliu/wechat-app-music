var api = require('./api.js');
var playSong = id => {
  return new Promise((resolve, reject) => {
    api.getDetail(id).then(data => {
      var file = data.bitrate
      var item = data.songinfo
      wx.playBackgroundAudio({
        dataUrl: file.file_link,
        title: item.title,
        coverImgUrl: item.pic_big,
        success: (res) => {
          resolve({file, item}, res)
        },
        fail: reject
      })
    })
  })
}

module.exports = {
  playSong
}
