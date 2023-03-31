require.config({
    paths: {
        'jquery': 'jquery-1.12.4.min',
        'wow': 'wow.min',
    }
});

define(['jquery', 'wow'], function ($, WOW) {
    var core = {};
    core.bind = function() {

        $("#loadingDiv").fadeOut(300, function () {
            $("#loadingDiv").remove();
            if (loadingTimeOut) {
                clearTimeout(loadingTimeOut);
            }
        });

        $(".toggle-button").on("click", function () {
            $(".nav").slideToggle();
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


