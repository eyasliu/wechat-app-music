var api = require('../../utils/api.js')
//index.js
//获取应用实例
var app = getApp()
Page({
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
      url: '',
      active: true
    }, {
      label: '搜索',
      url: '/pages/local/search'
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onReady: function(){
    wx.setNavigationBarTitle({title: "在线音乐"})
  },
  onLoad: function () {
    console.log('onLoad')
    api.getOnline(1, 1)
    .then(data => {
      this.setData({
        list: data.song_list
      })
    })
  }
})
