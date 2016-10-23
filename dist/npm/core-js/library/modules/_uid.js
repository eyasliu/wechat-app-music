'use strict';
(function(module,require){var exports=module.exports={};
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
})(module,require);