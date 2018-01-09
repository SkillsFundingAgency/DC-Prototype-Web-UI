const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Route index page
router.get('/submit-ilr', function (req, res) {
  res.render('submit-ilr')
})


// Branching
router.get('/examples/over-18', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var over18 = req.query.file-upload

  if (over18 === 'false') {
    // Redirect to the relevant page
    res.redirect('/docs/examples/under-18')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('examples/over-18')
  }
})


module.exports = router
