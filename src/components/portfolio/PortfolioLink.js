import React from 'react';
import { Link } from 'react-router';

const PortfolioLink = ({ label, cover, link }) => (
  <div className='portfolio-link'>
    <Link to={link}>
      <div>{label}</div>
      <div className='cover-image-wrapper'>
        <div
          className='cover-image'
          style={{ backgroundImage: `url(${cover})` }} />
      </div>
    </Link>
  </div>
);

export default PortfolioLink;
