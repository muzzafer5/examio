const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema.Types

const ClassSchema = new Schema({
    title : {
        type : String,
        required : true 
    },
    info : {
        type : String
    },
    id : {
        type : Number,
        unique : true,
        required : true
    },
    created_by : {
        type : ObjectId,
        required : true
    },
    enrolled_students : [
        {
            type: ObjectId
        }
    ]
})

const Class = mongoose.model("classes",ClassSchema)

module.exports = Class