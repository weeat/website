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
      <header>
        <nav
          className="navbar is-fixed-top"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link
              to="/"
              className="navbar-item is-size-3 has-text-primary has-text-weight-bold"
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
              <a href="#home" className="navbar-item">
                Home
              </a>
              <a href="#explore" className="navbar-item">
                Discovery
              </a>
              <a href="#social" className="navbar-item">
                Social
              </a>
              <a href="#visual" className="navbar-item">
                Visual
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
