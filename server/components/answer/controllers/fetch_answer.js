const Answer = require('../models/answer')

function FetchAnswer(req,res) {  
    Answer.findOne({submitted_by :req.body.user_id,exam_id : req.body.exam_id})
    .then(answers=>{
        console.log(answers)
        res.json(answers)
    })
    .catch(err =>{
      res.status(422).json({Err:err})
    })
}

module.exports = FetchAnswer