import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"
import About from '../pages/About'
import Users from '../pages/Users'
import {
  LinkContainer
} from 'react-router-bootstrap'

class NavCom extends React.Component{
    render() {
        return (
      <Router>
          <Navbar bg = "dark"
          variant = "dark"
          expand = "lg" >
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <LinkContainer to="/about/"><NavDropdown.Item>About</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/users/"><NavDropdown.Item>Users</NavDropdown.Item></LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/about/"><NavDropdown.Item>About</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/about/"><NavDropdown.Item>About</NavDropdown.Item></LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </Router>
        )
    }
        
    
}

export default NavCom;