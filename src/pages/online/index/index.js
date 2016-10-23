import wx from 'labrador';

class Index extends wx.Component {
  app = getApp()
  //事件处理函数
  onReady(){
  	wx.app.dispatch({
  		type: 'TAB_ACTIVE',
  		active: 'rank'
  	})
    wx.setNavigationBarTitle({title: "在线音乐"})
  }
}
export default wx.app.connect(
	state => ({
		ranks: state.rank.items,
		tab: state.tab
	})
)(Index)