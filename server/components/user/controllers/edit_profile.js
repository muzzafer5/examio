const Profile = require('../models/user_profile')

function EditProfile(req,res){
  const ProfileData = {
    info: req.body.info
  }
  var query = {account:req.user.id}
  Profile.updateOne(query,ProfileData,function(err){
    if(err)
      return res.status(422).json({error:err})
    else
      res.send("updated")
  })
}

module.exports = EditProfile