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

        var swiper1 = new Swiper('.banner-container', {
            loop: true,
            pagination: {
                // el: '.banner-swiper-pagination',
                clickable :true,
            },
        });

        $(".s1-li,.s2-li,.s4-li").on("mouseenter", function () {
            $(this).addClass("sel")
        }).on("mouseleave", function () {
            $(this).removeClass("sel")
        });

    };
    modal.mInit = function () {
        console.log("mobile");

        common_m.bind();

        var swiper2 = new Swiper('.banner-container-m', {
            loop: true,
            pagination: {
                clickable :true,
            },
        });

    };

    return modal;
});
