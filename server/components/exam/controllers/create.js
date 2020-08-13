const Exam = require('../models/exam')
const Class = require('../../class/models/class')

function Create(req,res) {
    
    var new_exam = {
      title : req.body.title,
      class_id : req.body.class_id,
      start_time : req.body.start_time,
      end_time : req.body.end_time,
      total_questions : req.body.total_questions,
      questions_list : req.body.questions
    }

    Exam.create(new_exam).then(exam=>{
      if(req.body.group=="1"){
        Class.findOneAndUpdate(
          {id:req.body.class_id},
          {$push:{contents : {group_exam : exam._id}}},
          {new : true}
        )
        .then(result=>{
            res.send("created")
        })
        .catch(err=>{
            res.status(422).json({error : err})
        })
      }
      else{
        Class.findOneAndUpdate(
          {id:req.body.class_id},
          {$push:{contents : {exam_link : exam._id}}},
          {new : true}
        )
        .then(result=>{
            res.send("created")
        })
        .catch(err=>{
            res.status(422).json({error : err})
        })
      }
    })
    .catch(err =>{
      res.status(422).json({Err:err})
    })
}

module.exports = Create