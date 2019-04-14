import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { APP_NAME } from '../constants';

const navItems = [
  { title: 'New project', link: '/project' },
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
            <span style={{ 'font-size': '13px', display: 'block' }}>
              Unlocking the Sustainable Potential of Land and People
            </span>
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
