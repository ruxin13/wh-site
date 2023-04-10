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
            var $this = $(this), _st = $this.data("st"), $nav = $(".nav");
            if (~~_st) {
                $nav.stop().slideUp();
                $this.data("st", "0").addClass("btn-off").removeClass("btn-on");
            } else {
                $nav.stop().slideDown();
                $this.data("st", "1").addClass("btn-on").removeClass("btn-off");
            }
        });
        $(".toggle-search").on("click", function () {
            console.log("search");
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


