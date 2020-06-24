const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema.Types

const UserProfileSchema = new Schema({
    info:{
        type : String
    },
    personal_details : {
        dob : {type : Date},
        gender : {type : String},
        phone : {type : String},
        country : {type : String},
        profile_pic : {type : String}
    },
    professional_details : {
        languages : [{type : String}],
        profession : {type : String},
        degree : {type : String},
        college : {type : String},
        interested_domains : [{type : String}],
    },
    study_hours : {
        type : Number,
        default : 0
    },
    account: {
        type:ObjectId,
        ref:"users"
    }
})

const UserProfile = mongoose.model("users_profile", UserProfileSchema)
module.exports = UserProfile
