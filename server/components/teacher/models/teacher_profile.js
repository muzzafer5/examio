const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema.Types

const TeacherProfileSchema = new Schema({
    info:{
        type : String
    },
    enrolled_classes : [
        {
            type : ObjectId,
            ref : "classes"
        }
    ],
    unenrolled_class: [
        {
            type : ObjectId,
            ref : "classes"        
        }   
    ],
    account: {
        type:ObjectId,
        ref:"users"
    }
})

const TeacherProfile = mongoose.model("teachers_profile", TeacherProfileSchema)
module.exports = TeacherProfile
