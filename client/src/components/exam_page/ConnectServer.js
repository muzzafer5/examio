import axios from 'axios'

export const fetch_exam = details => {

  var postData = details

  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization':  localStorage.usertoken
    }
  }

  return axios
    .post('/exam/fetch', postData, axiosConfig)
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
} 

export const submit_answers = details => {

  var postData = details

  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization':  localStorage.usertoken
    }
  }

  return axios
    .post('/answer/save', postData, axiosConfig)
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
} 

