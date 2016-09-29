var api = require('../../utils/api.js')


//index.js
//获取应用实例
var app = getApp()
Page({
  data: Object.assign({
    tabActive: 'rank',
    list: [],
    board: {}
  }, app.globalData.data),
  onReady: function(){
    wx.setNavigationBarTitle({title: "在线音乐"})
  },
  onLoad: function (option) {

    api.getOnline(option.type, 1)
    .then(data => {
      this.setData({
        list: data.song_list,
        board: data.billboard
      })
    })
  }
})
