'use strict';
var exports=module.exports={};
try{
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
}catch(error){console.error(error.stack);throw error;}