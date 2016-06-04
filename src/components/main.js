import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import BrunyanphotoApp from './BrunyanphotoApp';

import Front from './front/Front';
import Weddings from './albums/Weddings';

import 'font-awesome/css/font-awesome.css';

render((
  <Router history={hashHistory}>
    <Route path="/" component={BrunyanphotoApp}>
      <IndexRoute component={Front} />
      <Route path="/weddings" component={Weddings} />
    </Route>
  </Router>
), document.getElementById('content'));
