'use strict';

var BrunyanphotoApp = require('./BrunyanphotoApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var Front = require('./front/Front');

require('font-awesome/css/font-awesome.css');


var content = document.getElementById('content');

var Routes = (
  <Route handler={BrunyanphotoApp}>
    <Route name="/" handler={Front}/>
  </Route>
);

Router.run(Routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, content);
});
