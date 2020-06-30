import React, { Component } from 'react'
import {Nav,Navbar} from 'react-bootstrap'

class Landing extends Component {
  render() {
    return (
        <div className = "landing">
            <div className = "header">
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
            </div>
            <div className = "body">
                <h1>Platform to conduct online exam</h1>
            </div>
        </div>
    )
  }
}

export default Landing