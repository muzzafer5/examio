const Class = require('../models/class')

function FetchClassContent(req,res) {
 
    Class.findOne(
            {id:req.body.id},
        ).populate("contents.exam_link","title _id, start_time end_time")
        .then(result=>{
            res.json({title : result.title,contents :result.contents.reverse()})
        })
        .catch(err=>{
            res.status(422).json({error : err})
        })
}

module.exports = FetchClassContent