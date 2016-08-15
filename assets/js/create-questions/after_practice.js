$(function() {
	var class_prev = $('#class_prev');
	class_prev.css("display", "none");
	$('#aft_prc').on('click', function(){
		$('#wel_info').load("assets/html/after_practice.html #afterPrac");
	});
});
