const express = require('express')
const router = express.Router()

const RequireStudentLogin  = require('../../../middleware/require_student_login')


var ShowProfile = require('../controllers/show_profile')
var EditProfile = require('../controllers/edit_profile')
var FetchClass = require('../controllers/fetch_class')

router
    .route('/profile')
    .get(RequireStudentLogin,(req,res)=> ShowProfile(req,res))

router
    .route('/profile')
    .post(RequireStudentLogin,(req,res)=> EditProfile(req,res))

router
    .route('/class')
    .get(RequireStudentLogin,(req,res)=> FetchClass(req,res))

module.exports = router