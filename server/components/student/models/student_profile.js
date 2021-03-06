const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema.Types

const StudentProfileSchema = new Schema({
    info:{
        type : String
    },
    account: {
        type:ObjectId,
        ref:"users"
    }
})

const StudentProfile = mongoose.model("students_profile", StudentProfileSchema)
module.exports = StudentProfile
