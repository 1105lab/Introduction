$(document).ready(function() {

	// toggle skin select
	$("#skin-select #toggle").click(function() {

		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('#skin-select').animate({ left:0 }, 100);
			$('.wrap-fluid').css({"width":"auto","margin-left":"250px"});
			$('.navbar').css({"margin-left":"240px"});

			$('#skin-select li').css({"text-align":"left"});
			$('#skin-select li span, ul.topnav h4, .side-dash, .noft-blue, .noft-purple-number, .noft-blue-number, .title-menu-left').css({"display":"inline-block", "float":"none"});

			$('.ul.topnav h4').css({"display":"none"});

			$('.tooltip-tip2').addClass('tooltipster-disable');
			$('.tooltip-tip').addClass('tooltipster-disable');

			$('.datepicker-wrap').css({"position":"absolute", "right":"300px"});
			$('.skin-part').css({"visibility":"visible"});
			$('#menu-showhide, .menu-left-nest').css({"margin":"10px"});

			$('.search-hover').css({"display":"none"});

		} else {
			$(this).addClass('active')

			$('#skin-select').animate({ left:-200 }, 100);

			$('.wrap-fluid').css({"width":"auto", "margin-left":"50px"});
			$('.navbar').css({"margin-left":"50px"});

			$('#skin-select li').css({"text-align":"right"});
			$('#skin-select li span, ul.topnav h4, .side-dash, .noft-blue, .noft-purple-number, .noft-blue-number, .title-menu-left').css({"display":"none"});

			$('.tooltip-tip2').removeClass('tooltipster-disable');
			$('.tooltip-tip').removeClass('tooltipster-disable');

			$('.datepicker-wrap').css({"position":"absolute", "right":"84px"});
			$('.skin-part').css({"visibility":"visible", "top":"3px"});
			$('#menu-showhide, .menu-left-nest').css({"margin":"0"});
			$('.search-hover').css({"display":"block", "position":"absolute", "right":"5px", "top":"55px"});
			// $('.id_search').css("padding-left", "-15px");
		}
		return false;
	});

	// show skin select for a second
	setTimeout(function(){ $("#skin-select #toggle").addClass('active').trigger('click'); },10)

}); // end doc.ready

