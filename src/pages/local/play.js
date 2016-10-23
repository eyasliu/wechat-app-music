import wx from 'labrador';
// import api from '../../utils/api';
import util from '../../utils/util';
import {playing} from '../../actions'
const {dispatch} = wx.app
class Play extends wx.Component{
  // data = {
  // 	file: {},
  // 	item: {},
  // 	isPlaying: false
  // }
  async updateSong(songid){
  	if(songid){
  		const data = await util.playSong(songid)

  		dispatch(playing({
  			isPlaying: true,
  			...data
  		}))
      
  		await wx.setStorage({key: 'playing', data: data})
  	} else {
  		const res = await wx.getStorage({key: 'playing'})
  		dispatch(playing(res.data))
  	}

  	const res = await wx.getStorage({key: 'isPlaying'})
  	dispatch(playing({
  		isPlaying: !!res.data
  	}))
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
			dispatch(playing({
				isPlaying: false
			}))
		} else {
			await util.playSong(this.data.item.song_id)
			dispatch(playing({
				isPlaying: true
			}))
		}
	}
}
export default wx.app.connect(
  state => ({
    ...state.playing,
  })
)(Play)