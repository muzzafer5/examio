const Class = require('../models/class')

function Join(req,res) {
    Class.findOneAndUpdate(
            {id:req.body.id},
            {$addToSet:{enrolled_students : req.user._id}},
            {new : true}
        )
        .then(result=>{
            if(result)
                res.json(result)
            else{
                res.status(422).json({error : "Invalid Class Id"})
            }
        })
        .catch(err=>{
            res.status(422).json({error : err})
        })
}

module.exports = Join