import wx from 'labrador';
import randomColor  from '../../utils/random-color';

export default class Title extends wx.Component {
  data = {
    text: '',
    color: randomColor()
  };

  handleTap() {
    this.setData({
      color: randomColor()
    });
  }
}
