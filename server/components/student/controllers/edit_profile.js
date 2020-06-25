const mongoose = require('mongoose')
const Profile = require('../models/student_profile')

function EditProfile(req,res){
    const StudentData = {
      info : req.body.info
    }
    var query = {account:req.user.id}
    Profile.updateOne(query,StudentData,function(err){
      if(err)
        return res.status(422).json({error:err})
      else
        res.send("updated")
    })
  }

module.exports = EditProfile