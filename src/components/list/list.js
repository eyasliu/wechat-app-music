/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-09-26
 * @author Liang <liang@maichong.it>
 */

import wx from 'labrador';
import Title from '../title/title';

export default class List extends wx.Component {

  data = {
    items: [
      { title: 'Labrador' },
      { title: 'Alaska' }
    ]
  };

  children = {
    title: new Title({ text: 'The List Title' })
  };

  onLoad() {
    this.setData({
      items: [{ title: 'Collie' }].concat(this.data.items)
    });
  }
};
