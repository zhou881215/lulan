$(document).ready(function ($) {
  const swiper = new Swiper(".solution-swiper-container", {
    loop: true,
    speed: 700,
    slidesPerView: "auto",
    centeredSlides: true,
    on: {
      init: function () {
        this.slides.removeClass("init");
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  swiper.$el.parent(".solution_list")[0].onmouseover = function () {
    swiper.$el.addClass("mouse-hover");
  };
  swiper.$el.parent(".solution_list")[0].onmouseout = function () {
    swiper.$el.removeClass("mouse-hover");
  };
  // 进口专栏
  $(".iiwcm_ckunk").first().addClass("iiwcm_ckunk_active");
  $(".iiwcm_ckunk").click(function () {
    $(".iiwcm_ckunk_active").removeClass("iiwcm_ckunk_active");
    $(this).addClass("iiwcm_ckunk_active");

    const $index = $(this).index();
    $(".iicw_for_cut").eq($index).fadeIn().siblings().hide();
  });
});
