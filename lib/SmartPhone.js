var Tablet = require('./Tablet');
var Phone = require('./Phone');
var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');

function SmartPhone (phoneNumber) {
  Tablet.call(this);
  Phone.call(this, phoneNumber);
  GameConsole.call(this,'Smart Phone');
  WebBrowser.call(this);
}
module.exports = SmartPhone;