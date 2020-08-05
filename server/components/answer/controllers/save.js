const Answer = require('../models/answer')

function Save(req,res) {
    
    var new_answer_sheet = {
      exam_id : req.body.exam_id,
      submitted_by : req.user._id,
      answers_list : req.body.answers
    }

    Answer.create(new_answer_sheet).then(answer=>{
        console.log(answer)
        res.send("submitted")
    })
    .catch(err =>{
      res.status(422).json({Err:err})
    })
}

module.exports = Save