function GameConsole (systemName) {
  this.systemName = systemName;
  this.play = function (game) {
    // game should be an object: {title: 'gameTitle'}
    return this.systemName + ' plays ' + game.title;
  };
}
module.exports = GameConsole;