import React, { Component } from 'react'
import {Nav,Navbar,NavDropdown} from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
        <Navbar.Brand href="/">Exam.Io</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
                <Nav.Link href="/auth/login">Login</Nav.Link>
                <Nav.Link eventKey={2} href="/auth/signup">Signup</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
  }
}

export default Header