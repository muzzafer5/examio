const express = require('express')
const router = express.Router()

const RequireTeacherLogin  = require('../../../middleware/require_teacher_login')


var ShowProfile = require('../controllers/show_profile')
var EditProfile = require('../controllers/edit_profile')

router
    .route('/profile')
    .get(RequireTeacherLogin,(req,res)=> ShowProfile(req,res))

router
    .route('/profile')
    .post(RequireTeacherLogin,(req,res)=> EditProfile(req,res))
module.exports = router