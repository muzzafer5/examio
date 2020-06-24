const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type: String,
        required :true,
        unique: true
    },
    password: {
        type: String,   
        required: true
    },
    created_at : {
        type : Date,
        default: Date.now
    },
    online : {
        type: Boolean,
        default : true
    }
})

const User = mongoose.model("users", UserSchema)
module.exports = User
