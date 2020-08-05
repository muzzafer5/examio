const express = require('express')
const router = express.Router()

const RequireStudentLogin  = require('../../../middleware/require_student_login')
const RequireTeacherLogin  = require('../../../middleware/require_teacher_login')
const RequireUserLogin = require('../../../middleware/require_user_login')

var Create = require('../controllers/create')
var Join = require('../controllers/join')
var FetchClassContent = require('../controllers/fetch_class_content')
var CreateClassContent = require('../controllers/create_class_content')

router
    .route('/create')
    .post(RequireTeacherLogin,(req,res)=> Create(req,res))

router
    .route('/join')
    .put(RequireStudentLogin,(req,res)=> Join(req,res))

router
    .route('/content')
    .post(RequireUserLogin,(req,res)=> FetchClassContent(req,res))

router
    .route('/content/create')
    .post(RequireTeacherLogin,(req,res) => CreateClassContent(req,res))

module.exports = router