var api = require('../../utils/api.js')


//index.js
//获取应用实例
var app = getApp()
Page({
  data: Object.assign({
  	tabActive: 'rank'
  }, app.globalData.data),
  //事件处理函数
  onReady: function(){
    wx.setNavigationBarTitle({title: "在线音乐"})
  }
})
