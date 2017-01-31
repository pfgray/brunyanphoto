import React from 'react';

import Header from '../front/Header';
import Social from '../front/Social';

const SubPage = ({ children }) => (
  <div className='sub-page'>
    <div className='sub-page-content'>
      <Header />
      {children}
    </div>
    <Social className={'sub-page-footer'} />
  </div>
);

export default SubPage;
