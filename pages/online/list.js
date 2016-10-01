var api = require('../../utils/api.js')



//index.js
//获取应用实例
var app = getApp()
var toastSetTimeout;
Page({
  data: Object.assign({
    tabActive: 'rank',
    list: [],
    board: {},
    paged: 1,
    loading: false
  }, app.globalData.data),
  onReady: function(){
    wx.setNavigationBarTitle({title: "在线音乐"})
  },
  loading: function(text){
    this.setData({loading: text})
  },
  onLoad: function (option) {
    this.loading(true);
    api.getOnline(option.type, 1)
    .then(data => {
      this.setData({
        type: option.type,
        list: data.song_list,
        board: data.billboard,
        loading: false
      })
    })
  },
  nextpage: function(e){
    var paged = this.data.paged + 1;
    this.loading(true)
    api.getOnline(this.data.type, paged).then(data => {
      this.setData({
        paged: paged,
        list: this.data.list.concat(data.song_list),
        loading: false
      })
    })
  }
})
