const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema.Types

const AnswerSchema = new Schema({
    exam_id : {
        type : ObjectId,
        ref : "exams" 
    },
    submitted_by : {
        type : ObjectId,
        ref : "users"
    },
    answers_list : [
        {
            type : String
        }
    ]
})

const Answer = mongoose.model("answer_sheets",AnswerSchema)

module.exports = Answer