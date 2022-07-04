$(document).ready(function ($) {
  // 开搜索
  $(".page_search").click(function () {
    $(".index_search_wrapper").fadeIn();
    $(".index_search").removeClass("lightSpeedOut").addClass("lightSpeedIn");
  });
  // 关搜索
  let closeTimer;
  $(".close_ser").click(function () {
    $(".index_search").removeClass("lightSpeedIn").addClass("lightSpeedOut");
    closeTimer = setTimeout(() => {
      $(".index_search_wrapper").fadeOut();
      clearTimeout(closeTimer);
    }, 500);
  });
  // 产品切换
  let currentPro = $($(".index_pro")[0]).find(".index_pro_chunk");
  let currentIndex = 0;
  $(".index_pro_left").click(() => {
    cutProChunk(currentIndex, 0);
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = currentPro.length - 1;
    }
    cutProChunk(currentIndex, 1);
  });
  $(".index_pro_right").click(() => {
    cutProChunk(currentIndex, 0);
    currentIndex++;
    if (currentIndex > currentPro.length - 1) {
      currentIndex = 0;
    }
    cutProChunk(currentIndex, 1);
  });
  const cutProChunk = (i, turn) => {
    const currentChunk = currentPro[i];
    currentChunk.style.opacity = turn;
    currentChunk.style.zIndex = turn;
  };
  // 导航下产品
  $(".ibbl").click(function () {
    $(".ibbl_active").removeClass("ibbl_active");
    $(this).addClass("ibbl_active");

    const $index = $(this).index();
    $(".index_pro").hide();
    $(".index_pro").eq($index).fadeIn();
    currentPro = $($(".index_pro")[$index]).find(".index_pro_chunk");
    currentIndex = 0;
  });
  // 进口专栏
  $(".iiwcm_ckunk").first().addClass("iiwcm_ckunk_active");
  $(".iiwcm_ckunk").click(function () {
    $(".iiwcm_ckunk_active").removeClass("iiwcm_ckunk_active");
    $(this).addClass("iiwcm_ckunk_active");

    const $index = $(this).index();
    $(".iicw_for_cut").eq($index).fadeIn().siblings().hide();
  });
  // 选择我们的理由
  $(".isuw_cut").first().addClass("isuw_cut_active");
  $(".isuw_cut").click(function () {
    $(".isuw_cut_active").removeClass("isuw_cut_active");
    $(this).addClass("isuw_cut_active");

    const $index = $(this).index();
    $(".isuw_pic_chunk").eq($index).fadeIn().siblings().hide();
  });
  // 开关视频
  $(".ibmw_play").click(function () {
    $(".blue_video").fadeIn();
  });
  $(".blue_video img").click(function () {
    $(".blue_video").fadeOut();
  });
});
