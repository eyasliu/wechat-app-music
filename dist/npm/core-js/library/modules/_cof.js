'use strict';
(function(module,require){var exports=module.exports={};
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
})(module,require);