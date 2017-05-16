require.config({
    baseUrl: "js/",
    paths: {
        "text": "text",
        　　　　　　
        "jquery": "jquery",
        "page": "page",
        "dataStatistics": "jquery.dataStatistics",
        "circliful": 　 "jquery.circliful.min",
        'header': "module/header/header",
        "footer": "module/footer/footer"
    },
    shim: {
        "dataStatistics": "jquery.dataStatistics",
        "circliful": 　 "jquery.circliful.min",
        jquery: {
            exports: '$'
        }
    }　　
});　
require(['header', 'jquery'], function(tpl, $) {　　
    $(".contentBox").prepend(tpl);　
});
require(['footer', 'jquery'], function(tpl, $) {　　
    $(".contentBox").append(tpl);
    console.log($('#appdown'));
    $('#appdown').on('click', function() {

        console.log($(this.target).html());


    });
});
