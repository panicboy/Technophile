var Tablet = require('./Tablet');
var Watch = require('./Watch');

function SmartWatch () {
  Tablet.call(this);
  Watch.call(this);
}
module.exports = SmartWatch;