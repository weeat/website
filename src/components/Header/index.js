import React, { Component } from 'react';
import Link from 'gatsby-link';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isBurgerActive: false };
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
  }

  handleBurgerClick() {
    this.setState({ isBurgerActive: !this.state.isBurgerActive });
  }

  render() {
    const burgerClassList = this.state.isBurgerActive
      ? 'navbar-burger is-active'
      : 'navbar-burger';
    const menuClassList = this.state.isBurgerActive
      ? 'navbar-menu is-active'
      : 'navbar-menu';
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link
            to="/"
            className="navbar-item has-text-primary has-text-weight-bold"
          >
            WeEat
          </Link>

          <span className={burgerClassList} onClick={this.handleBurgerClick}>
            <span> </span>
            <span> </span>
            <span> </span>
          </span>
        </div>

        <div className={menuClassList}>
          <div className="navbar-end">
            <a className="navbar-item">Home</a>
            <a className="navbar-item">Features</a>
            <a className="navbar-item">About</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
