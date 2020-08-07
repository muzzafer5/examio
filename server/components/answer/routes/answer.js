const express = require('express')
const router = express.Router()

const RequireStudentLogin  = require('../../../middleware/require_student_login')
const RequireTeacherLogin  = require('../../../middleware/require_teacher_login')
const RequireUserLogin = require('../../../middleware/require_user_login')

var Save = require('../controllers/save')
const Fetch = require('../controllers/fetch')
const FetchAnswer = require('../controllers/fetch_answer.js')

router
    .route('/save')
    .post(RequireStudentLogin,(req,res)=> Save(req,res))

router
    .route('/fetch')
    .post(RequireTeacherLogin,(req,res)=> Fetch(req,res))

router
    .route('/fetch_answer')
    .post(RequireTeacherLogin,(req,res)=> FetchAnswer(req,res))


module.exports = router