'use strict';

var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

// CSS
require('normalize.css');
require('../styles/main.css');

var BrunyanphotoApp = React.createClass({
  render: function() {
    return (
      <div className="main">
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = BrunyanphotoApp;
