function Watch () {
  this.bodyPart = null;
  this.wear = function (partOfBody) {
    this.bodyPart = partOfBody;
  };
}
module.exports = Watch;