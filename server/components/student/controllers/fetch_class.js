const Profile = require('../models/student_profile')

function FetchClass(req,res) {
  Profile.findOne({account:req.user.id}).populate("enrolled_classes.class_id", "title info id")
  .then(profile=>{ 
      res.json(profile.enrolled_classes)
  })
  .catch(err =>{
      res.status.json({Err : err})
  })
}

module.exports = FetchClass 