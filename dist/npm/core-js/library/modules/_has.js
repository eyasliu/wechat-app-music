'use strict';
(function(module,require){var exports=module.exports={};
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
})(module,require);