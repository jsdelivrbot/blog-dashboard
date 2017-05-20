const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
  });
  app.import('bower_components/highlightjs/highlight.pack.min.js');
  app.import('bower_components/highlightjs/styles/github.css');
  return app.toTree();
};
