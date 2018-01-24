const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
	res.render('hub')
})

router.get('/submit-ilr', function (req, res) {
	res.render('submit-ilr-v1')
})

router.get('/upload', function (req, res) {
	res.render('upload-ilr-v2')
})

router.get('/submission-complete', function (req, res) {
	res.render('submission-complete-v4')
})

router.get('/upload-complete', function (req, res) {
	res.render('upload-complete-v2')
})

router.get('/admin/config', function (req, res) {
	res.render('prototype-admin/config')
})

router.get('/admin/dashboard', function (req, res) {
	res.render('prototype-admin/prototype-dashboard')
})

// Route index page
router.get('/ilr-details', function (req, res) {
	var reports = [
		{
			title: "16-19 Funding Claim Report",
			filetype: "PDF",
			size: "20kB"
		},
		{
			title: "16-19 Summary of Funding by Student Report",
			filetype: "CSV",
			size: "20kB"
		},
		{
			title: "ALLB Occupancy Report",
			filetype: "CSV",
			size: "20kB"
		},
		{
			title: "Adult Funding Claim Report (CSV)",
			filetype: "CSV",
			size: "20kB"
		},
		{
			title: "Adult Funding Claim Report (XLS)",
			filetype: "XLS",
			size: "20kB"
		},
		{
			title: "Apps Indicative Earnings Report",
			filetype: "CSV",
			size: "20kB"
		},
		{
			title: "CL Summary of Learners by Non-Single Budget Category Report",
			filetype: "PDF",
			size: "20kB"
		},
		
// 			ESF Aim and Deliverable Report.csv
// 			ESF Funding Summary Report 20180104-193834.xls
// 			Funding Summary Report.xls
// 			High Needs Students Detail Report.csv
// 			High Needs Students Summary Report.pdf
// 			Main Occupancy Report.csv
// 			Maths and English Report.csv
// 			Non-Contracted Apprenticeships Activity Report 20180104-193854.csv
// 			Summary of Funding Model 35 Funding Report.csv
// 			Summary of Funding Model 35 Funding Report.pdf
// 			Summary of Funding Model 35 Funding by Learner Report.csv
// 			Trailblazer Apprenticeships Employer Incentives Report.csv
// 			Trailblazer Apprenticeships Occupancy Report.csv
	];
	res.render('ilr-details-v3', { reports: reports })
})

module.exports = router
