/*
 * @Author: Cram
 * @Date: 2022-07-04 22:20:50
 */
$(document).ready(function ($) {
  const solutionSwiper = new Swiper(".solution-swiper-container", {
    loop: true,
    speed: 700,
    slidesPerView: "auto",
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  solutionSwiper.$el.parent(".solution_list")[0].onmouseover = function () {
    solutionSwiper.$el.addClass("mouse-hover");
  };
  solutionSwiper.$el.parent(".solution_list")[0].onmouseout = function () {
    solutionSwiper.$el.removeClass("mouse-hover");
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
