const mongoose = require('mongoose')
const Schema = mongoose.Schema

const {ObjectId} = mongoose.Schema.Types

const TeacherSchema = new Schema({
    domains: [
        {
            type: String
        }
    ],
    fee: {
        type : Number,
        required: true
    },
    languages : [
        {
            type : String
        }
    ],
    availabilities : [
        {
            day: [
                {
                    starting_time : {type:Number},
                    ending_time : {type:Number }      
                }
            ]
        }
    ],
    rating: {
        type : Number,
        default: 0
    },
    lessons: {
        type: Number,
        default: 0
    },
    teaching_hours : {
        type: Number,
        default : 0
    },
    college : {
        type : String,
        //required : true
    },
    degree: {
        type: String,  
        //required : true 
    },
    experience: {
        type: Number,
        //required : true
    },
    info: {
        type: String,
        //required : true
    },
    profile_pic : {
        type : String,
        //required : true
    },
    intro_video : {
        type : String,
        //required : true
    },
    review: [
        {
            type :  String
        }
    ],
    points: {
        type: Number,
        default: 0,
        required : true
    },
    account:{
        type: ObjectId,
        ref: "users"
    }
})

const Teacher = mongoose.model("teachers", TeacherSchema)
module.exports = Teacher
 