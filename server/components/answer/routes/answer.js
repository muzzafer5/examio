const express = require('express')
const router = express.Router()

const RequireStudentLogin  = require('../../../middleware/require_student_login')
const RequireTeacherLogin  = require('../../../middleware/require_teacher_login')
const RequireUserLogin = require('../../../middleware/require_user_login')

var Save = require('../controllers/save')

router
    .route('/save')
    .post(RequireStudentLogin,(req,res)=> Save(req,res))


module.exports = router