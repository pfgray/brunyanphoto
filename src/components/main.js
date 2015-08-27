'use strict';

var BrunyanphotoApp = require('./BrunyanphotoApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var Front = require('./front/Front');


var content = document.getElementById('content');

var Routes = (
  <Route handler={BrunyanphotoApp}>
    <Route name="/" handler={Front}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
