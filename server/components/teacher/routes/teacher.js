const express = require('express')
const router = express.Router()

const RequireTeacherLogin  = require('../../../middleware/require_teacher_login')


var ShowProfile = require('../controllers/show_profile')
var EditProfile = require('../controllers/edit_profile')
var FetchClass = require('../controllers/fetch_class')

router
    .route('/profile')
    .get(RequireTeacherLogin,(req,res)=> ShowProfile(req,res))

router
    .route('/profile')
    .post(RequireTeacherLogin,(req,res)=> EditProfile(req,res))

router
    .route('/class')
    .get(RequireTeacherLogin,(req,res)=> FetchClass(req,res))
module.exports = router