const Profile = require('../models/teacher_profile')

function ShowProfile(req,res) {
  Profile.findOne({account:req.user.id})
  .populate("account","-_id -password -__v")
  .exec((err,profile)=>{ 
      if(err){
          return res.status(422).json({error:err})
      }
      res.json(profile)
  })
}

module.exports = ShowProfile