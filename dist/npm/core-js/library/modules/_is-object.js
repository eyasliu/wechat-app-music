'use strict';
(function(module,require){var exports=module.exports={};
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
})(module,require);