const express = require('express')
const router = express.Router()

const RequireUserLogin  = require('../../../middleware/require_login')
const RequireTeacherRegistration  = require('../../../middleware/require_teacher')

const cors = require('cors')
router.use(cors())

const Register = require('../controllers/register')
const ShowProfile = require('../controllers/show_profile')
const EditProfile = require('../controllers/edit_profile')

router
    .route('/register')
    .post(RequireUserLogin,(req,res)=> Register(req,res))
  
router
    .route('/profile')
    .get(RequireUserLogin,RequireTeacherRegistration,(req,res)=> ShowProfile(req,res))
    
router
    .route('/profile')
    .post(RequireUserLogin,RequireTeacherRegistration,(req,res)=> EditProfile(req,res))


module.exports = router
