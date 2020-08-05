import React, { Component } from 'react'
import { login } from './ConnectServer'
import {Link} from 'react-router-dom'

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
        this.props.history.push(`/home`)
      }  
    })
  }

  render() {
    return (
      <div className="login " style = {{border : "2px solid grey",position:"absolute", top : "20%", width: "35%", left : "30%"}}>
            <form validate="true" onSubmit={this.onSubmit}>
              <h1 className="h2 text-center py-2" style = {{borderBottom : "1px solid grey"}}>Login</h1>
              <div className="form-group my-3 mx-3">
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
              <div className="form-group my-3 mx-3">
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
              <div className = "my-3">
              <button
                type="submit"
                className="btn btn-primary mx-3 px-5"
              >
                Login
              </button>
              <Link to={'/auth/signup'} >Don't have an account?</Link>
              </div>
            </form>
      </div>
    )
  }
}

export default Login