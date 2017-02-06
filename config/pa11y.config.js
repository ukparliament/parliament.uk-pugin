const fs = require('fs');


exports.standard = 'WCAG2AA'; // set test standards
exports.ignore = ['warning', 'notice']; // ignore WCAG msg
// log what's happening to the console
exports.log = {
  debug: console.log.bind(console),
  error: console.error.bind(console),
  info: console.log.bind(console)
};
exports.concurrency = '10'; // set the concurrency here to run more tests in parallel


function getFiles() {
  var arr = [];
  var files = fs.readdirSync('./_public/members/');
  for (var i = 0; i < files.length; i++) {
    arr.push('file://' + process.cwd() + '/_public/members/' + files[i]);
  }
  return arr;
}
exports.urls = getFiles();


// check module output
// console.log(module);
