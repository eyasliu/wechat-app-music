import wx from 'labrador';
import api from '../../utils/api';
import util from '../../utils/api';

export default class Play extends wx.Component{
  data = {
  	file: {},
  	item: {},
  	isPlaying: false
  }
	onLoad(option){
		console.log(option)
		if(option.songid){
			util.playSong(option.songid).then((data, res) => {
				this.setData(Object.assign({isPlaying: true}, data))
				wx.setStorage({
					key: 'playing',
					data: data,
					fail: function(){
						console.log('存储失败!!')
					}
				})
			});
		} else {
			wx.getStorage({
				key: 'playing',
				success: (res) => {
					this.setData(res.data)
				}
			})
		}

		wx.getStorage({
			key: 'isPlaying',
			success: (res) => {
				this.setData({
					isPlaying: res.data
				})
			}
		})

	},
	playToggle(e){
		if(this.data.isPlaying){
			wx.stopBackgroundAudio()
			this.setData({
				isPlaying: false
			})
		} else {
			util.playSong(this.data.item.song_id).then(data => {
				this.setData({
					isPlaying: true
				})
			})
		}
	}
}
