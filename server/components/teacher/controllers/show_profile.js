const mongoose = require('mongoose')
const Teacher = mongoose.model("teachers")

function ShowProfile(req,res) {
    Teacher.findOne({account:req.user.id})
    .exec((err,teacher)=>{
        if(err){
            return res.status(422).json({error:err})
        }
        res.json(teacher)
    })
}

module.exports = ShowProfile

