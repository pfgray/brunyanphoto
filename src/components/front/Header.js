import React from 'react';
import { Link } from 'react-router';
import logo from '../../images/brphoto.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    const active = 'active';
    return (
      <div className={'header' + (this.state.open ? ' open' : '')}>
        <img className="header-logo" src={logo} />
        <Link to='/portfolio' activeClassName={active}>Portfolio</Link>
        <Link to='/pricing' activeClassName={active}>Pricing</Link>
        <Link to='/about' activeClassName={active}>About</Link>
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
