'use strict';
(function(module,require){var exports=module.exports={};
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object.js')
  , $keys    = require('./_object-keys.js');

require('./_object-sap.js')('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
})(module,require);