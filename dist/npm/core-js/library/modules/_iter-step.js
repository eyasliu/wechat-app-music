'use strict';
(function(module,require){var exports=module.exports={};
module.exports = function(done, value){
  return {value: value, done: !!done};
};
})(module,require);