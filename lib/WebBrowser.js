function webBrowser () {
  this.open = function (url) {
    // game should be an object: {title: 'gameTitle'}
    return 'Browsing to ' + url;
  };
}
module.exports = webBrowser;