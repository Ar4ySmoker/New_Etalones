$(document).ready(function () {
  $("#burger").on("click", function () {
    $("#mobileMenu").fadeIn(300).removeClass("hide").addClass("mobileMenu");
  });

  $("#closeMenu").on("click", function () {
    $("#mobileMenu").fadeOut(300, function () {
      $(this).removeClass("mobileMenu").addClass("hide");
    });
  });
});
