/*
 * @Author: Cram
 * @Date: 2022-07-04 14:09:22
 */
$(document).ready(function ($) {
  // banner
  new Swiper(".swiper-container", {
    loop: true,
    autoplay: true,
    // 如果需要分页器
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletClass: "my-bullet",
      bulletActiveClass: "my-bullet-active",
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // 整页导航
  var boxHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  $(".inside-roof-icon").on("click", function () {
    console.log("open");
    $(".inside-roof-icon").addClass("inside-roof-icon-active");
    $(".close-phone-nav").addClass("close-phone-nav-active");
    $(".nav-page").css("width", "100%");
    $(document.body).css({
      width: "100%",
      overflow: "hidden",
    });
  });
  $(".close-phone-nav").on("click", function () {
    $(".inside-roof-icon").removeClass("inside-roof-icon-active");
    $(".nav-page").css("width", "0");
    $(document.body).css({ overflow: "auto" });
  });
  window.onresize = function () {
    boxHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    $(".nav-page").css("height", boxHeight);
  };
  // 定nav
  // var navIndex = null;
  // var navUrl = location.href.toLocaleLowerCase();
  // if (navUrl.indexOf("index") > -1) {
  //     navIndex = 0;
  // } else if (navUrl.indexOf("about") > -1) {
  //     navIndex = 1;
  // } else if (navUrl.indexOf("mien") > -1) {
  //     navIndex = 2;
  // } else if (navUrl.indexOf("product") > -1) {
  //     navIndex = 3;
  // } else if (navUrl.indexOf("food") > -1) {
  //     navIndex = 4;
  // } else if (navUrl.indexOf("news") > -1) {
  //     navIndex = 5;
  // } else if (navUrl.indexOf("contact") > -1) {
  //     navIndex = 6;
  // } else {
  //     navIndex = 0;
  // }
  // $(".nav_ul li").eq(navIndex).addClass("nav_active").siblings().removeClass("nav_active");
  window.addEventListener("scroll", () => {
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollY >= 60) {
      $(".helmet").addClass("helmet_pull_down");
    } else {
      $(".helmet").removeClass("helmet_pull_down");
    }
  });
});
