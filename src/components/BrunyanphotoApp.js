import React from 'react';
import Router from 'react-router';
const RouteHandler = Router.RouteHandler;

// CSS
import 'normalize.css';
import '../styles/main.less';

const BrunyanphotoApp = React.createClass({
  render() {
    return (
      <div className="main">
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = BrunyanphotoApp;
