'use strict';
(function(module,require){var exports=module.exports={};
var overArg = require('./_overArg.js');

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;

})(module,require);