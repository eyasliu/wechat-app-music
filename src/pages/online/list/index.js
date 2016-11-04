import wx from 'labrador';
import {getRankList} from '../../../actions';

class List extends wx.Component{
  app = getApp()
  data = {
    paged: 1,
    loading: false
  }
  onReady(){
    wx.setNavigationBarTitle({title: "在线音乐"})
  }
  loading(text) {
    this.setData({loading: text})
  }
  async onLoad(option) {
    this.loading(true);
    const data = await wx.app.dispatch(getRankList(option.type, 1))

    this.setData({
      type: option.type,
      paged: 1,
      loading: false
    })
  }
  async nextpage(e){
    var paged = this.data.paged + 1;
    this.loading(true)
    await wx.app.dispatch(getRankList(this.data.type, paged))
    this.setData({
      paged: paged,
      loading: false
    })
  }
}
export default wx.app.connect(
  state => ({
    ...state.rank,
    tab: state.tab
  })
)(List)