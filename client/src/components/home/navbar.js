import React, { Component } from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import Create from '../class/create'
import Join from '../class/join'

class Header extends Component {

  constructor(){
    super()
    this.state = {
      show_create : false,
      show_join : false
    }
    this.logOut = this.logOut.bind(this)
  }

  openCreate(){
    this.setState({show_create : true})
  }

  openJoin(){
    this.setState({show_join : true})
  }

  closeCreate(){
    this.setState({show_create : false})
    window.location.reload()
  }

  closeJoin(){
    this.setState({show_join : false})
    window.location.reload()
  }

  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken")
    localStorage.removeItem("teacher")
    this.props.history.push('/auth/login')
  }

  render(){
    return (
      <div>
        <Navbar className ="px-3" collapseOnSelect expand="lg" bg="light" variant="light" >
          <Navbar.Brand href="/">
            Exam.Io
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav>
                {
                  localStorage.teacher=="true"?(<Nav.Link onClick={() => this.openCreate() }>Create</Nav.Link>): (<Nav.Link onClick={() => this.openJoin() }>Join</Nav.Link>)
                }                  
                <Nav.Link eventKey={2} onClick={this.logOut} className = "ml-3">Logout</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          {this.state.show_create?<Create onClose={this.closeCreate.bind(this)}/> : ''}
          {this.state.show_join?<Join onClose={this.closeJoin.bind(this)}/> : ''}
        </div>
      </div>
    )
  }
}

export default Header