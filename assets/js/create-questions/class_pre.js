$(function() {
	// 加载课前预习的内容
	var class_prev = $('#class_prev');
	class_prev.css("display", "none");
	$('#prv').on('click', function(){
		$('#wel_info').load("assets/html/class_prev.html #classPrev");
	});

	// 动态加载页面，即从后台加载
	// id 显示页面的容器组件ID2
	// url 欲加载页面网址
	// gop get请求还是post请求，默认get
	// function loadPage(id, url, gop) {
	// 	var type = (gop == "post" ? "post" : "get");
	// 	$.ajax({
	// 		type: type,
	// 		url: url,
	// 		cache: false,
	// 		error: function() {
	// 			alert('加载页面' + url + '时出错');
	// 		},
	// 		success: function(content) {
	// 			console.log('页面加载完毕！');
	// 		}
	// 	});
	// }


	function multiOptions(question, opt, answer) {
		var topic = [];
		var question = [];
		var answer = [];
		var opt= [];
		for(var i=1; i<=5; i++) {
			topic[i] = "#topic_" + i;
			$(topic[i]).each(function() {
				question[i] = $('#tp_' + i).val();
				var options = [];
					options[0] = $('#topic_' + i + '_A').val();
					options[1] = $('#topic_' + i + '_B').val();
					options[2] = $('#topic_' + i + '_C').val();
					options[3] = $('#topic_' + i + '_D').val();
				opt[i] = options.join();
				answer[i] = $('#topic_' + i + '_answer').val();
			});
		}
		var start_time = $('#start_time').val();
		var dead_time = $('#end_time').val();
		return [start_time, dead_time, question, opt, answer];
	}
	var content = multiOptions();    // 必须加括号，或是使用new新建一个
	// 局部提交表单
	function formSubmit(formId, divId, url) {
		formId.submit(function() {
			$(this).ajaxSubmit({
				// target : '#' + divId,	// target表示需要刷新的区域
				type: 'post',
    			url : url,
    			dataType: 'json',
    			data: {
    				'start_time': content[0],
    				'dead_time': content[1],
    				'Qdesc': [
    					{
    						'question': content[2][0],
    						'options': content[3][0]
    					},
    					{
    						'question': content[2][1],
    						'options': content[3][1]
    					},
    					{
    						'question': content[2][2],
    						'options': content[3][2]
    					},
    					{
    						'question': content[2][3],
    						'options': content[3][3]
    					},
    					{
    						'question': content[2][4],
    						'options': content[3][4]
    					},
    				],
    				'answer': content[4]
    			},
				success: function(data) {
					console.log('表单局部提交成功！');
				},
				error: function() {
					alert('加载页面' + url + '时出错');
				},
				// $(this).resetForm();    // 提交后是否重置表单
			});
			// 阻止表单自动提交事件
			return false;
		});
	}
	formSubmit($('#classPrev'), '', '');   // 最后一个为url，为后台提交的url，后台填写
});

