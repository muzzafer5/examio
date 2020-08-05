import axios from 'axios'

export const fetch_student_class = () => {

  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization':  localStorage.usertoken
    }
  }

  return axios
    .get('/student/class', axiosConfig)
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
} 

export const fetch_teacher_class = () => {

  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization':  localStorage.usertoken
    }
  }

  return axios
    .get('/teacher/class', axiosConfig)
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
} 

