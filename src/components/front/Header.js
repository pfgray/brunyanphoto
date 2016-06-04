import React from 'react';
import { Link } from 'react-router';

const Header = () => (
  <div className='header'>
    <span className='header-category'>
      <span>Portfolio</span>
      <span className='dropdown-content'>
        <Link to="/weddings">Weddings</Link>
        <a href="/hmm">Maternity-Newborn</a>
        <a href="/hmm">Seniors-Headshots</a>
        <a href="/hmm">Families-Kids</a>
      </span>
    </span>
    <a href='#'>Blog</a>
    <span className='header-category'>
      <span>About</span>
      <span className='dropdown-content'>
        <a href="/hmm">Bethanne</a>
        <a href="/hmm">Contact</a>
        <a href="/hmm">Reviews</a>
      </span>
    </span>
    <a href='https://www.facebook.com/BethanneRunyanPhotography'>
      <i className='fa fa-facebook-official'></i>
    </a>
    <a href='https://instagram.com/bethannerunyan/'>
      <i className='fa fa-instagram'></i>
    </a>
  </div>
);

export default Header;
