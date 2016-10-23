import wx from 'labrador';
import {searchList} from '../../../actions'

//index.js
//获取应用实例
class Search extends wx.Component{
  app = getApp()

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
    wx.app.dispatch(searchList(keyword))
  }
  onReady(){
    wx.setNavigationBarTitle({title: "在线搜索"})
    wx.app.dispatch({
      type: 'TAB_ACTIVE',
      active: 'search'
    })
  }
}

export default wx.app.connect(
  state => ({
    list: state.search.list,
    tab: state.tab,
    search: {
      value: ""
    },
    isEnd: false
  })
)(Search)