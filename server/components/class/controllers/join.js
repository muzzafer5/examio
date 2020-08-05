const Class = require('../models/class')
const Profile = require('../../student/models/student_profile')

function Join(req,res) {
    Class.findOneAndUpdate(
            {id:req.body.id},
            {$addToSet:{enrolled_students : req.user._id}},
            {new : true}
        )
        .then(result=>{
            if(result){
                Profile.findOneAndUpdate(
                    {account:req.user.id,'enrolled_classes.class_id' :{$ne : result._id}},
                    {$addToSet:{enrolled_classes : {class_id : result._id}}}
                ).then(profile =>{
                    res.json(result.title)
                })
            }
            else{
                res.status(422).json({error : "Invalid Class Id"})
            }
        })
        .catch(err=>{
            res.status(422).json({error : err})
        })
}

module.exports = Join