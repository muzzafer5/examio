const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema.Types

const QuestionSchema = new Schema({

    question_type :{
        type : String
    },
    question_number:{
        type : Number
    },
    question : {
        type : String,
        required : true
    },
    options : [
        {
            type : String
        }
    ]
})


module.exports = QuestionSchema