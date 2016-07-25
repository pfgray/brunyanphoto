import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import BrunyanphotoApp from './BrunyanphotoApp';

import Front from './front/Front';
import SubPage from './albums/SubPage';
import Portfolio from './portfolio/Portfolio';
import { createScrollAlbum } from './albums/ScrollAlbum';

import 'font-awesome/css/font-awesome.css';

const routes = {
  path: '/',
  component: BrunyanphotoApp,
  indexRoute: {
    component: Front
  },
  childRoutes: [{
    path: '/portfolio',
    component: SubPage,
    indexRoute: {
      component: Portfolio
    },
    childRoutes: window.app_config.portfolio
      .map(p => ({
        path: p.link,
        component: createScrollAlbum(p.title, p.id)
      }))
  }]
};

render((
  <Router history={hashHistory} routes={routes} />
), document.getElementById('content'));
