const jwt = require('jsonwebtoken')
const {SECRET_KEY} = require('../config/keys')
const mongoose = require('mongoose')
const User = mongoose.model("users")

module.exports = (req,res,next)=>{
    const {authorization} = req.headers
    if(!authorization){
       return res.status(401).json({error:"you must be logged in as student"})
    }
    const token = authorization
    //.replace("Bearer ","")
    jwt.verify(token,SECRET_KEY,(err,payload)=>{
        if(err){
            return res.status(401).json({error:"you must be logged in as student"})
        }
        if(payload.join_as != "student"){
            return res.status(401).json({error:"you must be logged in as student"})
        }
        const {_id} = payload
        User.findById(_id).then(userdata=>{
            req.user = userdata
            next()
        })           
    })
}