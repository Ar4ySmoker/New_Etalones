console.log("hello2");
$(document).ready(function () {
  $("#passport").click(() => {
    $(".modalImgP").fadeIn(700);
    $(".modalImgP").css("display", "flex");
    $("body").css("overflow-y", "hidden");
  });

  $("#closeP").click(() => {
    $(".modalImgP").fadeOut(500, function () {
      $(".modalImgP").css("display", "none");
      $("body").css("overflow-y", "auto");
    });
  });
});
$(document).ready(function () {
  $("#visa").click(() => {
    $(".modalImgV").fadeIn(700);
    $(".modalImgV").css("display", "flex");
    $("body").css("overflow-y", "hidden");
  });

  $("#closeV").click(() => {
    $(".modalImgV").fadeOut(500, function () {
      $(".modalImgV").css("display", "none");
      $("body").css("overflow-y", "auto");
    });
  });
});
$(document).ready(function () {
  $("#pesel").click(() => {
    $(".modalImgPS").fadeIn(700);
    $(".modalImgPS").css("display", "flex");
    $("body").css("overflow-y", "hidden");
  });

  $("#closePS").click(() => {
    $(".modalImgPS").fadeOut(500, function () {
      $(".modalImgPS").css("display", "none");
      $("body").css("overflow-y", "auto");
    });
  });
});
$(document).ready(function () {
  $("#check").click(() => {
    $(".modalImgCK").fadeIn(700);
    $(".modalImgCK").css("display", "flex");
    $("body").css("overflow-y", "hidden");
  });

  $("#closeCK").click(() => {
    $(".modalImgCK").fadeOut(500, function () {
      $(".modalImgCK").css("display", "none");
      $("body").css("overflow-y", "auto");
    });
  });
});
console.log("hello");
