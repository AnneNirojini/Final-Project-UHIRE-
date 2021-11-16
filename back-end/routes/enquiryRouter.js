const router = require('express').Router()
const enquiryCtrl = require('../controllers/enquiryCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.post('/enquiries', enquiryCtrl.createEnquiry)
router.route('/enquiries')
    .get(enquiryCtrl.getEnquiry)

// router.get('/enquiries', enquiryCtrl.getEnquiry)

module.exports = router