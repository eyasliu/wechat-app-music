import wx from 'labrador';

export default class Index extends wx.Component {
  app = getApp()
  data = {
    ...this.app.globalData.data,
    tabActive: 'rank'
  }
  //事件处理函数
  onReady(){
    wx.setNavigationBarTitle({title: "在线音乐"})
  }
}
