import React, { Component } from "react";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import Profile from "./profile";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
import * as Scroll from "react-scroll";
/*import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";*/

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }

  render() {
    return (
      
      <Navbar
        className="navbar-container animate-navbar"
        dark
        sticky="top"
        expand="md"
      >
        <div className="brand ">
          <NavLink className="navbar-brand  " to="/home">
            N
          </NavLink>
        </div>
        <NavbarToggler className="navbar-toggler" onClick={this.toggleNav} />
        <Collapse isOpen={this.state.isNavOpen} navbar>
          <Nav className="nav " navbar>
            
            <NavItem>
              <NavLink className="nav-link" to="/projects" href="#projects">
                <i className="fa fa-list fa-lg" /> Projects
              </NavLink>
            </NavItem>

            
            <NavItem>
              <NavLink className="nav-link" to="/skills" href="#skills">
                <i className="fa fa-list fa-lg" /> Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact" href="#contact">
                <i className="fa fa-address-card fa-lg" /> Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
