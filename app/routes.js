const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
	res.render('hub')
})

router.get('/submit-ilr', function (req, res) {
	res.render('submit-ilr')
})

router.get('/submission-complete', function (req, res) {
	res.render('submission-complete-v3')
})

router.get('/upload-complete', function (req, res) {
	res.render('upload-complete-v2')
})

router.get('/prototype-admin/config', function (req, res) {
	res.render('config')
})

// Route index page
router.get('/ilr-details', function (req, res) {
	var reports = [
		{
			title: "16-19 Funding Claim Report 20180104-192816",
			filetype: "PDF",
			size: "20kB"
		},
		{
			title: "16-19 Summary of Funding by Student Report 20180104-192816",
			filetype: "CSV",
			size: "20kB"
		},
		{
			title: "ALLB Occupancy Report 20180104-192816",
			filetype: "CSV",
			size: "20kB"
		},
		{
			title: "Adult Funding Claim Report 20180104-192816 (CSV)",
			filetype: "CSV",
			size: "20kB"
		},
		{
			title: "Adult Funding Claim Report 20180104-192816 (XLS)",
			filetype: "XLS",
			size: "20kB"
		},
		{
			title: "Apps Indicative Earnings Report 20180104-193852",
			filetype: "CSV",
			size: "20kB"
		},
		{
			title: "CL Summary of Learners by Non-Single Budget Category Report 20180104-192816",
			filetype: "PDF",
			size: "20kB"
		},
		
// 			ESF Aim and Deliverable Report 20180104-192816.csv
// 			ESF Funding Summary Report 20180104-193834.xls
// 			Funding Summary Report 20180104-192816.xls
// 			High Needs Students Detail Report 20180104-192816.csv
// 			High Needs Students Summary Report 20180104-192816.pdf
// 			Main Occupancy Report 20180104-192816.csv
// 			Maths and English Report 20180104-192816.csv
// 			Non-Contracted Apprenticeships Activity Report 20180104-193854.csv
// 			Summary of Funding Model 35 Funding Report 20180104-192816.csv
// 			Summary of Funding Model 35 Funding Report 20180104-192816.pdf
// 			Summary of Funding Model 35 Funding by Learner Report 20180104-192816.csv
// 			Trailblazer Apprenticeships Employer Incentives Report 20180104-192816.csv
// 			Trailblazer Apprenticeships Occupancy Report 20180104-192816.csv
	];
	res.render('ilr-details', { reports: reports })
})

module.exports = router
