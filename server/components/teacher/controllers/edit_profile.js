const mongoose = require('mongoose')
const Teacher = mongoose.model("teachers")

function EditProfile(req,res){
    const TeacherData = {
      college : req.body.college
    }
    var query = {account:req.user.id}
    Teacher.updateOne(query,TeacherData,function(err){
      if(err)
        return res.status(422).json({error:err})
      else
        res.send("updated")
    })
  }

module.exports = EditProfile