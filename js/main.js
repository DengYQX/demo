require.config({
	baseUrl: "js/",
	paths: {
		"text": "text",　　　　　　
		"jquery": "jquery",
		"page": "page",
		"dataStatistics": "jquery.dataStatistics",
		"circliful": 　 "jquery.circliful.min",
		'header': "module/header/header"
	}　　
});

　
require(['header', 'jquery'], function(tpl, $) {　　
	$(".contentBox").prepend(tpl);　
});