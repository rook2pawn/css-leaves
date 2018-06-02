
const Frame = require("./frame.js");

$().ready(() => {

  console.log("im read!!");
  var f = new Frame;
  document.body.appendChild(f.render());



})
