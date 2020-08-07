const Answer = require('../models/answer')

function Fetch(req,res) {  
    Answer.find({exam_id: req.body.exam_id}).populate("submitted_by","_id fullname")
    .then(answers=>{
        console.log(answers)
        res.json(answers)
    })
    .catch(err =>{
      res.status(422).json({Err:err})
    })
}

module.exports = Fetch