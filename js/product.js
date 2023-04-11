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
        selectInit();

    };
    modal.mInit = function () {
        console.log("mobile");
        common_m.bind();
        selectInit();
    };

    function scrollTo(tid) {
        console.log(tid);
        if (~~tid > 0) {
            $("html,body").animate({
                scrollTop : parseFloat($(`#m${tid}`).offset().top) - 66 + "px",
            }, 500);
            $(".crumb-list").hide();
        }
    }

    function selectInit() {
        var $sli = $(".crumb-sli");
        if ($sli.size() > 0) {
            $(".crumb-select").text($sli.eq(0).text());
        }

        $(".crumb-select").on("mouseenter", function () {
            $(this).parent(".crumb-s").addClass("sel");
            $(".crumb-list").slideDown();
        })
        $(".crumb-s").on("mouseleave", function () {
            $(this).removeClass("sel");
            $(".crumb-list").slideUp();
        });

        $sli.on("click", function () {
            scrollTo($(this).data("id"));
        });
    }

    return modal;
});
