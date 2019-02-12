import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Nav.module.css';

export interface INavProps {}

export class Nav extends Component<INavProps> {
  pages = [
    { link: '/redux', label: 'Redux' },
    { link: '/vanilla', label: 'Vanilla' }
  ];

  render() {
    return (
      <nav className={styles['nav']}>
        {this.pages.map(page => (
          <NavLink
            className={styles['nav-link']}
            activeClassName={styles['nav-link--active']}
            key={page.link}
            to={page.link}>
            {page.label}
          </NavLink>
        ))}
      </nav>
    );
  }
}

export default Nav;
