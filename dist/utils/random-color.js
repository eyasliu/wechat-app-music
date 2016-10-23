'use strict';
(function(module,require){var exports=module.exports={};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = randomColor;
function random() {
  return parseInt(Math.random() * 256);
}

function randomColor() {
  return "rgb(" + random() + "," + random() + "," + random() + ")";
}
})(module,require);