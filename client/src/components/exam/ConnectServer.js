import axios from 'axios'

export const create_exam = newClass => {

  var postData = newClass

  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization':  localStorage.usertoken
    }
  }

  return axios
    .post('/exam/create', postData, axiosConfig)
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
} 

