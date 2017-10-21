import React from 'react';
import { Link } from 'react-router';
import Social from './Social';

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
        <Link to='/portfolio' activeClassName={active}>Portfolio</Link>
        <Link to='/pricing' activeClassName={active}>Pricing</Link>
        <Link to='/about' activeClassName={active}>About</Link>
        <Link to='/blog' activeClassName={active}>Blog</Link>
        <Social />
      </div>
    );
  }
}

export default Header;
