const mongoose = require('mongoose')
const Teacher = mongoose.model("teachers")

const CalculatePoints = require('./calculate_points')

function Register(req,res) {
  const TeacherData = {
    domains : req.body.domains,
    fee : req.body.fee,
    languages : req.body.languages,
    availabilities : res.availabilities,
    college : req.body.college,
    degree : req.body.degree,
    experience : req.body.experience,
    info : req.body.info,
    profile_pic : req.body.profile_pic,
    intro_videos : req.body.intro_videos,
    account: req.user._id,
    points:0
  }
  console.log("hi")
  TeacherData.points+=CalculatePoints("experience",TeacherData.experience)
  TeacherData.points+=CalculatePoints("degree",TeacherData.degree)
  Teacher.findOne({account:TeacherData.account})
  .exec((err,teacher)=>{
    if(err){
      return res.status(422).json({error:err})
    }
    if(!teacher){
      Teacher.create(TeacherData)
      .then(teacher => {
        console.log("Registered")
        res.send("registered")
      })
      .catch(err => {
        return res.status(422).json({error:err})
      })
    }
    else{
      return res.status(422).json({error:"Teacher already exist"})
    }
  })
}


module.exports = Register

