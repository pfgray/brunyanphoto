import React from 'react';

const PortfolioLink = ({ label, cover, link }) => (
  <div className='portfolio-link'>
    <a href={link}>
      <div>{label}</div>
      <div className='cover-image-wrapper'>
        <div
          className='cover-image'
          style={{ backgroundImage: `url(${cover})` }} />
      </div>
    </a>
  </div>
);

export default PortfolioLink;
