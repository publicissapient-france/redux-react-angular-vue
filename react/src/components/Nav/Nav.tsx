import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

export interface INavProps {}

export class Nav extends Component<INavProps> {
  pages = [
    { link: '/redux', label: 'Redux' },
    { link: '/vanilla', label: 'Vanilla' }
  ];

  render() {
    return (
      <nav className="nav">
        { this.pages.map(page => (
          <NavLink
            className="nav-link"
            activeClassName="nav-link--active"
            key={page.link}
            to={page.link}>
            { page.label }
          </NavLink>
        )) }
      </nav>
    );
  }
}

export default Nav;
