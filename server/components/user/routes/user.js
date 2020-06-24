const express = require('express')
const router = express.Router()

const RequireUserLogin  = require('../../../middleware/require_login')

const cors = require('cors')
router.use(cors())

var ShowProfile = require('../controllers/show_profile')
var EditProfile = require('../controllers/edit_profile')

router
    .route('/profile')
    .get(RequireUserLogin,(req,res)=> ShowProfile(req,res))

router
    .route('/profile')
    .post(RequireUserLogin,(req,res)=> EditProfile(req,res))

module.exports = router