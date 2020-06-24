const bcrypt = require('bcryptjs')
const User = require('../models/user')

function Signup(req,res) {
  console.log("hi")
  const userData = {
    email: req.body.email,
    password: req.body.password
  }

  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + ' Registered!' })
	            console.log("Registered")
            })
            .catch(err => {
              return res.status(422).json({error:err})
            })
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

