$(document).ready(function () {
  $(".hamburger").on("click", function () {
    $(".main-menu").toggleClass("open");

    console.log($(document));
  });

  $(".main-menu-item a").click(function (e) {
    e.preventDefault();
    $("body").fadeOut(2000, function () {
      window.location.href = $(e.target).attr("href");
    });
  });
});
