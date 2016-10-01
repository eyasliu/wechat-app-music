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
    },
    isEnd: false,
    paged: 1,
  }, app.globalData.data),
  showToast(text, type = 'success'){
    this.setData({
      toast: {
        text, type
      }
    })
    setTimeout(() => {
      this.setData({
        toast: ''
      })
    }, 3000);
  },
  inputing(e){
    console.log(e)
    
    this.setData({
      search: Object.assign(this.data.search, {value: e.detail.value})
    })
  },
  bindSearch(e){
    var keyword = this.data.search.value
    if(!keyword) {
      this.showToast('请输入关键字', 'warn')
      return;
    }
    api.search(keyword, 1).then(data => {
      this.setData({
        paged: 1,
        list: data.song
      })
    })
  },
  onReady: function(){
    wx.setNavigationBarTitle({title: "在线搜索"})
  },
  onLoad: function (option) {

  }
})
