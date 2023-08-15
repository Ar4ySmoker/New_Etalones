$(document).ready(function(){
    
   $("#call-form").click(()=> {
        $(".wraper-anket1").fadeIn(700);
        $(".wraper-anket1").css("display", "flex");
        $("body").css("overflow-y", "hidden");
})

$("#closeAnket1").click(() => {
  $(".wraper-anket1").fadeOut(500, function () {
    $(".wraper-anket1").css("display", "none");
    $("body").css("overflow-y", "auto");
  });
});
})