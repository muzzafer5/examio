import React, { Component } from 'react'
import { signup } from './ConnectServer'
import { Link } from 'react-router-dom'

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      fullname: '',
      email: '',
      password: '',
      join_as : '',
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
      password: this.state.password,
      join_as : this.state.join_as
    }
    console.log(newUser)
    signup(newUser).then(res => {
      if(res){
        console.log(res)
        this.props.history.push(`/auth/login`)
      }
    })
  }
   
  render() {
    return (
      <div className="signup " style = {{border : "2px solid grey",position:"absolute", top : "20%", width: "35%", left : "30%"}}>
            <form validate="true" onSubmit={this.onSubmit}>
              <h1 className="h2 text-center py-2" style = {{borderBottom : "1px solid grey"}}>Signup</h1>
              <div className="form-group my-3 mx-3">
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
              <span className = "ml-3">Join as: </span>
              <div className="form-check form-check-inline mx-3">
                  <input className="form-check-input" type="radio" name="join_as" id="inlineRadio1" value="teacher" onChange={this.onChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio1">Tecaher</label>
                </div>
                <div className="form-check form-check-inline ">
                  <input className="form-check-input" type="radio" name="join_as" id="inlineRadio2" value="student" onChange={this.onChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio2">Student</label>
                </div>
              <div className = "my-3">
              <button
                type="submit"
                className="btn btn-primary mx-3 px-5"
              >
                Signup
              </button>
              <Link to={'/auth/login'} >Already have an account?</Link>
              </div>
            </form>
      </div>
    )
  }
}

export default Signup
