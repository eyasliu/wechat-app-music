'use strict';
(function(module,require){var exports=module.exports={};
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
})(module,require);