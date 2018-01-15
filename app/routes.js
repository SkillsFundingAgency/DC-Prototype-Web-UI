const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('hub-v1')
})

router.get('/submit-ilr', function (req, res) {
  res.render('submit-ilr')
})

router.get('/submission-complete', function (req, res) {
  res.render('submission-complete-v1')
})

router.get('/prototype-admin/config', function (req, res) {
  res.render('config')
})

module.exports = router
