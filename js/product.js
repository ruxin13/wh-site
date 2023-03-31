require.config({
    paths: {
        'jquery': 'jquery-1.12.4.min',
        'flexible': 'flexible',
        'swiper': 'swiper.min',
        'wow': 'wow.min',
        'common': 'common',
        'common_m': 'common_m'
    }
});

define(['flexible', 'jquery', 'swiper', 'wow', 'common', 'common_m'], function (flexible, $, Swiper, WOW, common, common_m) {
    var modal = {};
    modal.init = function () {
        console.log("pc");
        common.bind();

        $(".crumb-select").on("mouseenter", function () {
            $(this).parent(".crumb-s").addClass("sel");
            $(".crumb-list").slideDown();
        })
        $(".crumb-s").on("mouseleave", function () {
            $(this).removeClass("sel");
            $(".crumb-list").slideUp();
        });

    };
    modal.mInit = function () {
        console.log("mobile");
        common_m.bind();
    };

    return modal;
});
