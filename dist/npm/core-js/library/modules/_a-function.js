'use strict';
(function(module,require){var exports=module.exports={};
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
})(module,require);