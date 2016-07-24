import React from 'react';

import Header from '../front/Header';

const SubPage = ({ children }) => (
  <div className='sub-page'>
    <Header />
    {children}
  </div>
);

export default SubPage;
