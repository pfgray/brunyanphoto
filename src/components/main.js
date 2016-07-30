import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, hashHistory } from 'react-router';
import BrunyanphotoApp from './BrunyanphotoApp';

import Front from './front/Front';
import SubPage from './albums/SubPage';
import About from './about/About';
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
      })).concat({
        path: '/about',
        component: About
      })
  }]
};

render((
  <Router routes={routes} history={browserHistory} /> //history={hashHistory} />
), document.getElementById('content'));
