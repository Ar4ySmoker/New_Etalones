$(document).ready(function(){
    
   $("#anketa").click(()=> {
        $(".wraper-anket").fadeIn(700);
        $(".wraper-anket").css("display", "flex");
        $("body").css("overflow-y", "hidden");
})

$("#close, #cancel").click(()=> {
    $(".wraper-anket").fadeOut(500, function() {
        $(".wraper-anket").css("display", "none");
        $("body").css("overflow-y", "auto");
    });
})
})