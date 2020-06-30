import React, { Component } from 'react'
import { login } from './ConnectServer'

class Login extends Component {
  constructor() {
    super()
    this.state = {
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

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      if (res) {
        localStorage.setItem('usertoken', res.token)
        localStorage.setItem('teacher', res.is_teacher)
        console.log(localStorage.teacher)
        this.props.history.push(`/home`)
      }  
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-5 pt-5">
          <div className="col-sm-6 mt-5 ">
            <form onSubmit={this.onSubmit}>
              <h1 className="h3 mb-4 font-weight-normal">Login </h1>
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
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login