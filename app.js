
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this;
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      });
    }
  },
  globalData:{
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
        url: '',
        active: true
      }, {
        label: '搜索',
        type: 'search',
        url: '/pages/local/search'
      }]
    }
  }
})
