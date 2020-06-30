import axios from 'axios'

export const signup = newUser => {
  var postData = {
    fullname: newUser.fullname,
    email: newUser.email,
    password: newUser.password,
    join_as : newUser.join_as
  }
  return axios
    .post('/auth/signup', postData)
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.log(err)
        alert("Error: please recheck all the filled details")
      })
} 

export const login = user => {
  var postData = {
    email: user.email,
    password: user.password
  }
  return axios
    .post('/auth/login', postData)
      .then(response => {
        console.log("logged in")
        return response.data
      })
      .catch(err => {
        console.log(err)
        alert("Error: please recheck all the filled details")
      })
}
