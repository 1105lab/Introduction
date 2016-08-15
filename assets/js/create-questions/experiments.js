$(function() {
	var class_prev = $('#class_prev');
	class_prev.css("display", "none");
	$('#exper').on('click', function(){
		$('#wel_info').load("assets/html/experiments.html #experiment");
	});
});
