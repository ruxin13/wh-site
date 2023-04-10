$(function () {

    console.log("===");

  $(".toggle-button").on("click", function () {
    $(".nav").slideToggle();
  });

  $(".nav-li").on("click", function () {
    $(this).find(".nav-s").slideToggle();
    $(this).siblings().find(".nav-s").slideUp();
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

  // banner
  var swiper1 = new Swiper('.banner-container', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
  var swiper2 = new Swiper('.ssl-container', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });
  // sec3
  var swiper3 = new Swiper('.tec-container', {
    pagination: {
      el: '.swiper-pagination',
    },
  });
  var swiper4 = new Swiper('.ub-container', {
    pagination: {
      el: '.swiper-pagination',
    },
  });

});