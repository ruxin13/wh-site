require.config({
    paths: {
        'jquery': 'jquery-1.12.4.min',
        'wow': 'wow.min',
    }
});

define(['jquery', 'wow'], function ($, WOW) {
    var core = {};

    core.stage = function() {
        if (/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent) || $(window).width() <= 1000) {
            return "mobile"
        } else {
            return "pc"
        }
    };

    core.bind = function() {

        $("#loadingDiv").fadeOut(300, function () {
            $(this).remove();
            if (loadingTimeOut) {
                clearTimeout(loadingTimeOut);
            }
        });

        var wow = new WOW({
                boxClass:     'wow',
                animateClass: 'animated',
                offset:       0,
                mobile:       true,
                live:         true,
                callback:     function(box) {},
                scrollContainer: null,
                resetAnimation: true,
            }
        );
        wow.init();
    };
    return core;
});


