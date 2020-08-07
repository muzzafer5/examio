const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/user')
const {SECRET_KEY} = require('../../../config/keys')

function Login(req,res) {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          const payload = {
            _id: user._id
          }
          let token = jwt.sign(payload, SECRET_KEY, {
            //1 hour
            expiresIn: 3600*24*30
          })
          if(user.join_as === "teacher"){
            res.json({token:token,is_teacher : true})
          }
          else{
            res.json({token:token,is_teacher : false})
          }
        } 
        else {
          return res.status(422).json({error:"User doesn't exit"})
        }
      } 
      else {
        return res.status(422).json({error:"User doesn't exit"})
      }
    })
    .catch(err => {
      return res.status(422).json({error:err})
    })
}

module.exports = Login
