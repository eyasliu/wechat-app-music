import wx from 'labrador';
import api from '../../../utils/api'


//index.js
//获取应用实例
class Search extends wx.Component{
  app = getApp()
  data = {
    tabActive: 'search',
    list: [],
    search: {
      value: ""
    },
    isEnd: false,
    paged: 1,
  }

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
  }
  inputing(e){
    this.setData({
      search: Object.assign(this.data.search, {value: e.detail.value})
    })
  }
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
  }
  onReady(){
    wx.setNavigationBarTitle({title: "在线搜索"})
  }
}

export default wx.app.connect(
  state => state
)(Search)