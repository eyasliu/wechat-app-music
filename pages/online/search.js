var api = require('../../utils/api.js')


//index.js
//获取应用实例
var app = getApp()
Page({
  data: Object.assign({
    tabActive: 'search',
    list: [],
    search: {
      value: ""
    }
  }, app.globalData.data),
  showToast(text){
    this.setData({
      toast: text
    })
    setTimeout(() => {
      this.setData({
        toast: ''
      })
    }, 3000);
  },
  inputing(e){
    this.setData({
      search: Object.assign(this.data.search, {value: e.detail.value})
    })
  },
  bindSearch(e){
    var keyword = this.data.search.value
    if(!keyword) {
      this.showToast('请输入关键字')
      return;
    }
    this.getSearch(keyword).then(data => {
      this.setData({
        list: data.song
      })
    })
  },
  getSearch(keyword){
    return api.search(keyword)
  },
  onReady: function(){
    wx.setNavigationBarTitle({title: "在线搜索"})
  },
  onLoad: function (option) {
    // api.getOnline(option.type, 1)
    // .then(data => {
    //   this.setData({
    //     list: data.song_list,
    //     board: data.billboard
    //   })
    // })
  }
})
