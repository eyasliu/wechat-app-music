'use strict';
(function(module,require){var exports=module.exports={};
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails.js')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
})(module,require);