import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, hashHistory } from 'react-router';
import BrunyanphotoApp from './BrunyanphotoApp';

import Front from './front/Front';
import SubPage from './albums/SubPage';
import About from './about/About';
import Pricing from './pricing/Pricing';
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
    component: SubPage,
    childRoutes: window.app_config.portfolio
      .map(p => ({
        path: p.link,
        component: createScrollAlbum(p.title, p.id)
      })).concat({
        path: '/about',
        component: About
      }).concat({
        path: '/pricing',
        component: Pricing
      }).concat({
        path: '/portfolio',
        component: Portfolio
      })
  }]
};

render((
  <Router routes={routes} history={hashHistory} /> //history={hashHistory} />
), document.getElementById('content'));
