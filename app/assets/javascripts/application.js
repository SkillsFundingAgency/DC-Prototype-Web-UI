/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (window.console && window.console.info) {
	window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
	// Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
	// with role="button" when the space key is pressed.
	GOVUK.shimLinksWithButtonRole.init()

	// Details/summary polyfill from frontend toolkit
	GOVUK.details.init()

	// Show and hide toggled content
	// Where .multiple-choice uses the data-target attribute
	// to toggle hidden content
	var showHideContent = new GOVUK.ShowHideContent()
	showHideContent.init()
	
	
	$('#upload-v1 #upload').on('change',function (e) {
		$('#upload-select').addClass('hidden');
		$('#uploading-progress').removeClass('hidden');
		
		var fileName = e.target.files[0].name;

		$('#file-name').text("Uploading " + fileName );
		setTimeout(function () {
			$('#upload-select').submit()
		}, 3000);
	});


	// upload-v2
	$('#upload-v2 input#upload').on('change',function (e) {
		// hide the file picker button
		$('#upload-select-area').addClass('hidden');

		// show the file details
		$('#file-details').removeClass('hidden');

		// write the file details to the page
		var fileName = e.target.files[0].name;
		var timestamp = new Date();
		var monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May", 
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December" 
		];
		var time = timestamp.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
		var fileDate = timestamp.getDate() + " " + monthNames[timestamp.getMonth()] + " " + timestamp.getFullYear() + " at " + time;
		$('.file-name').text(fileName);
		$('.file-date').text(fileDate);
		$('input[name="file-date"]').val(fileDate);
		

		// form submission
		$('input[name="confirm-upload"]').on('click',function(e) {
			e.preventDefault();

			// hide the table
			$('#submit-file-area').addClass('hidden');
			// show the progress bar
			$('#uploading-progress').removeClass('hidden');

			setTimeout(function () {
				$('#file-submission').submit()
			}, 12000);
		});

		// revert the page when clicking the change button
		var changeButton = $('#change-file');
		changeButton.on('click',function() {
			// hide the file details
			$('#file-details').addClass('hidden');

			// show the file picker button
			$('#upload-select-area').removeClass('hidden');
		})
	})
})
