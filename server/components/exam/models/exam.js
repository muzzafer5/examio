const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema.Types

const QuestionSchema = require('../../question/models/question')

const ExamSchema = new Schema({
    title :{
        type : String,
        required : true
    },
    class_id : {
        type : String,
        required : true 
    },
    start_time  : {
        type : Date,
        required : true
    },
    end_time : {
        type : Date,
        required : true
    },
    total_questions : {
        type : Number,
        required : true,
    },
    questions_list : [
        {
            type : String
        }
    ]
})

const Exam = mongoose.model("exams",ExamSchema)

module.exports = Exam