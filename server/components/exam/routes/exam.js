const express = require('express')
const router = express.Router()

const RequireStudentLogin  = require('../../../middleware/require_student_login')
const RequireTeacherLogin  = require('../../../middleware/require_teacher_login')
const RequireUserLogin = require('../../../middleware/require_user_login')

var CreateExam = require('../controllers/create')
var FetchExamPaper = require('../controllers/fetch')

router
    .route('/create')
    .post(RequireTeacherLogin , (req,res)=>CreateExam(req,res))

router
    .route('/fetch')
    .post(RequireUserLogin, (req,res)=>FetchExamPaper(req,res))

module.exports = router