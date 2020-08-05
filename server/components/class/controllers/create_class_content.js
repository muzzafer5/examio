const Class = require('../models/class')

function CreateClassContent(req,res) {
        Class.findOneAndUpdate(
            {id:req.body.id},
            {$push:{contents : {announcement : req.body.announcement}}},
            {new : true}
        )
        .then(result=>{
            res.json(result.contents.reverse())
        })
        .catch(err=>{
            console.log(err)
            res.status(422).json({error : err})
        })
   
}

module.exports = CreateClassContent