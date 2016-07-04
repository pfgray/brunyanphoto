import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    console.log('toggling?');
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    return (
      <div className={'header' + (this.state.open ? ' open' : '')}>
        <button className='hamburger' onClick={this.toggle}>
          <i className='fa fa-bars'></i>
        </button>
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
        <div className='social'>
          <a href='https://www.facebook.com/BethanneRunyanPhotography'>
            <i className='fa fa-facebook-official'></i>
          </a>
          <a href='https://instagram.com/bethannerunyan/'>
            <i className='fa fa-instagram'></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
