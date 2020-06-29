const express = require('express')
const router = express.Router()

const RequireStudentLogin  = require('../../../middleware/require_student_login')
const RequireTeacherLogin  = require('../../../middleware/require_teacher_login')

var Create = require('../controllers/create')
var Join = require('../controllers/join')

router
    .route('/create')
    .post(RequireTeacherLogin,(req,res)=> Create(req,res))

router
    .route('/join')
    .put(RequireStudentLogin,(req,res)=> Join(req,res))

module.exports = router