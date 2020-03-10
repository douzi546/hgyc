$(function () {
  $('doucment').ready(function () {
    var $a = $(".nav .menu-title").find(".current")
    $(".nav .menu-title").each(function (i, e) {
      var secondMenu = $(this).children("div").find("li")
      secondMenu.css("width", $(this).width());
    })
    $(".nav .menu-title").on("mouseenter", function () {
      $(this).children("a").addClass("current")
      $(this).siblings().children("a").removeClass("current")
      $(this).children("div").find("ul").stop().slideDown();
    })
    $(".nav .menu-title").on("mouseleave", function () {
      $(this).children("div").find("ul").stop().slideUp();
      $a.addClass("current").parent("li").siblings().children("a").removeClass("current")
    })

  })

})