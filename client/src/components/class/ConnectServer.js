import axios from 'axios'

export const create = newClass => {

  var postData = newClass

  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization':  localStorage.usertoken
    }
  }

  return axios
    .post('/class/create', postData, axiosConfig)
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
} 

export const join = newClass => {

  var postData = newClass

  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization':  localStorage.usertoken
    }
  }
  return axios
    .put('/class/join', postData, axiosConfig)
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
} 

export const fetch_class_content = detail => {

  var postData = detail

  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization':  localStorage.usertoken
    }
  }
  return axios
    .post('/class/content', postData, axiosConfig)
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
} 

export const create_class_content = detail => {

  var postData = detail

  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization':  localStorage.usertoken
    }
  }
  return axios
    .post('/class/content/create', postData, axiosConfig)
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
} 