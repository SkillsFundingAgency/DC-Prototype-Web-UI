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
	
	
	$('#upload').on('change',function (e) {
		$('#upload-select').addClass('hidden');
		$('#uploading-progress').removeClass('hidden');
		
		var fileName = e.target.files[0].name;

		$('#file-name').text("Uploading " + fileName );
		setTimeout(function () {
			$('#upload-select').submit()
		}, 3000);
	});
})
