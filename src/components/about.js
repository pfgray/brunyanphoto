import './init.js';
import React from 'react';
import { render } from 'react-dom';
import BrunyanphotoApp from './BrunyanphotoApp';

//import Portfolio from './front/Front';
// import SubPage from './albums/SubPage';
import About from './about/About';
// import Pricing from './pricing/Pricing';
// import Portfolio from './portfolio/Portfolio';
//import ScrollAlbum from './albums/ScrollAlbum';

render((
  <BrunyanphotoApp>
    <About featuredImage={window.aboutFeaturedImage} />
  </BrunyanphotoApp>
), document.getElementById('about-mount'));
