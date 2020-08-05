const Exam = require('../models/exam')

function Fetch (req,res){
    Exam.findById(req.body.id).then(
        exam=>{
            res.json(exam)
        }
    ).catch(err=>{
        res.status.json({Err : err})
    })
}

module.exports = Fetch