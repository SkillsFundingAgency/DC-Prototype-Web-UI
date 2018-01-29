const express = require('express')
const router = express.Router()

// Hub home
router.get('/hub', function (req, res) {
	res.render('hub/hub')
})

router.get('/submit-ilr', function (req, res) {
	res.render('submit-ilr/submit-ilr-v1')
})

router.get('/upload', function (req, res) {
	res.render('upload-ilr/upload-ilr-v2')
})

router.get('/submission-complete', function (req, res) {
	res.render('ilr-submission-complete/submission-complete-v4')
})

router.get('/upload-complete', function (req, res) {
	res.render('upload-complete-v2')
})

router.get('/prototype/config', function (req, res) {
	res.render('prototype-admin/prototype-config')
})

router.get('/prototype/version-info', function (req, res) {
	res.render('prototype-admin/prototype-dashboard')
})

router.get('/', function (req, res) {
	res.render('prototype-admin/prototype-home')
})

router.get('/ilr-details', function (req, res) {	
	res.render('ilr-details/ilr-details-v3')
})

module.exports = router
