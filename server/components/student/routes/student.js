const express = require('express')
const router = express.Router()

const RequireStudentLogin  = require('../../../middleware/require_student_login')


var ShowProfile = require('../controllers/show_profile')
var EditProfile = require('../controllers/edit_profile')

router
    .route('/profile')
    .get(RequireStudentLogin,(req,res)=> ShowProfile(req,res))

router
    .route('/profile')
    .post(RequireStudentLogin,(req,res)=> EditProfile(req,res))

module.exports = router