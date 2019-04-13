import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { APP_NAME } from '../constants';

const navItems = [
  { title: 'Play', link: '/play' },
  { title: 'About', link: '/about' },
  { title: 'Contact', link: '/contact' }
];

export default class Header extends Component {
  state = {
    isOpen: false
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <header>
        <Navbar color="dark" dark expand="md">
          <Link to="/" className="navbar-brand">
            {APP_NAME}
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
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
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
