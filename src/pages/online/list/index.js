import wx from 'labrador';
import api from '../../../utils/api.js';

class List extends wx.Component{
  app = getApp()
  data = {
    tabActive: 'rank',
    list: [],
    board: {},
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
    const data = await api.getOnline(option.type, 1)
    this.setData({
      type: option.type,
      list: data.song_list,
      board: data.billboard,
      loading: false
    })
  }
  async nextpage(e){
    var paged = this.data.paged + 1;
    this.loading(true)
    const data = await api.getOnline(this.data.type, paged)
    this.setData({
      paged: paged,
      list: [
        ...this.data.list,
        ...data.song_list
      ],
      loading: false
    })
  }
}
export default wx.app.connect(
  state => state
)(List)