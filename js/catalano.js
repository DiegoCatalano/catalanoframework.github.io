$(document).ready(function() {

	$("nav a").click(function() {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, 'slow');
		return false;
	});

});