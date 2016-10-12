import wx from 'labrador';
import api from '../../utils/api';
import util from '../../utils/util';

export default class Play extends wx.Component{
  data = {
  	file: {},
  	item: {},
  	isPlaying: false
  }
  async updateSong(songid){
  	if(songid){
  		const data = await util.playSong(songid)
  		this.setData({
  			isPlaying: true,
  			...data
  		})
  		await wx.setStorage({key: 'playing', data: data})
  	} else {
  		const res = await wx.getStorage({key: 'playing'})
  		this.setData(res.data)
  	}

  	const res = await wx.getStorage({key: 'isPlaying'})
  	this.setData({
  		isPlaying: res.data
  	})
  }
	onLoad(option){
		this.updateSong(option.songid)
	}
	onShow(){
		this.updateSong()
	}
	async playToggle(e){
		if(this.data.isPlaying){
			wx.stopBackgroundAudio()
			this.setData({
				isPlaying: false
			})
		} else {
			await util.playSong(this.data.item.song_id)
			this.setData({
				isPlaying: true
			})
		}
	}
}
