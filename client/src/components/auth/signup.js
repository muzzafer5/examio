import React, { Component } from 'react'
import { signup } from './ConnectServer'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      fullname: '',
      email: '',
      password: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const newUser = {
      fullname: this.state.fullname,
      email: this.state.email,
      password: this.state.password
    }
    register(newUser).then(res => {
      if(res){
        this.props.history.push(`/auth/login`)
      }
    })
  }
   
  render() {
    return (
      <div className="container">
        <div className="row mt-5 pt-5">
          <div className="col-sm-6 mt-5 ">
            <form Validate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Signup</h1>
              <div className="form-group">
                <label htmlFor="name">Full name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullname"
                  required
                  placeholder="Enter the Full name"
                  value={this.state.fullname}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  required
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  required
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="main-btn btn-block"
              >
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
