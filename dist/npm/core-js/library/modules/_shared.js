'use strict';
(function(module,require){var exports=module.exports={};
var global=window=require('../../../labrador/global.js');
var global = require('./_global.js')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
})(module,require);