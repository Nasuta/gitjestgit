$(document).ready(function () {
  $(".accordion-item").click(function () {
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(this).find(".accordion-content").slideUp();
      $(this).hasClass("open").style.display = "block";
    } else $(this).addClass("open");
    // $('.accordion-content').slideDown()
    $(this).find(".accordion-content").slideDown();
  });
});
