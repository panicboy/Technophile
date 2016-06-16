function Tablet () {
  this.touch = function (x, y) {
    let theObject = {x: null, y: null};
    theObject.x = x;
    theObject.y = y;
    return theObject;
  };
}
module.exports = Tablet;