const bcrypt = require('bcryptjs')
const User = require('../models/user')
const TeacherProfile = require('../../teacher/models/teacher_profile')
const StudentProfile = require('../../student/models/student_profile')

function Signup(req,res) {
  const userData = {
    email: req.body.email,
    password: req.body.password,
    fullname: req.body.fullname,
    join_as: req.body.join_as
  }

  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          if(userData.join_as=="teacher" || userData.join_as == "student"){
            User.create(userData)
            .then(user => {
              var profile = {
                account : user._id
              }
              if(user.join_as=="teacher"){
                  TeacherProfile.create(profile)
                  res.json({ status: user.email + ' registered as teacher' })
              }
              else if (user.join_as == "student"){
                  StudentProfile.create(profile)
                  res.json({ status: user.email + ' registered as student' })
              }
            })
            .catch(err => {
              return res.status(422).json({error:err})
            })
          }
          else{
            return res.status(422).json({error:"Not valid"})
          }
        })
      } 
      else {
        return res.status(422).json({error:"User already exit"})
      }
    })
    .catch(err => {
      return res.status(422).json({error:err})
    })
}

module.exports = Signup

