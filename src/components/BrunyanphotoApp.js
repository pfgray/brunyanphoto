import React from 'react';

// CSS
import 'normalize.css';
import '../styles/main.less';

const BrunyanphotoApp = React.createClass({
  render() {
    return (
      <div className="main">
        {this.props.children}
      </div>
    );
  }
});

module.exports = BrunyanphotoApp;
