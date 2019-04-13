import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  UncontrolledCollapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { APP_NAME } from '../constants';

const navItems = [
  { title: 'Play', link: '/play' },
  { title: 'About', link: '/about' },
  { title: 'Contact', link: '/contact' }
];

export default class Header extends Component {
  render() {
    return (
      <header>
        <Navbar color="dark" dark expand="md">
          <Link to="/" className="navbar-brand">
            {APP_NAME}
          </Link>
          <NavbarToggler id="toggler" />
          <UncontrolledCollapse toggler="#toggler" navbar>
            <Nav className="ml-auto" navbar>
              {navItems.map(item => (
                <NavItem key={item.link}>
                  <NavLink
                    to={item.link}
                    className="nav-link"
                    activeClassName="active">
                    {item.title}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </UncontrolledCollapse>
        </Navbar>
      </header>
    );
  }
}
