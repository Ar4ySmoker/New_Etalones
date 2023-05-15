$(document).ready(() => {
    let stepCounter = 1;
    console.log(stepCounter)
   $("#step-next").click(() => {
    switch(stepCounter) {
        case 1: 
            $(".name-phone-age").removeClass("show");            
            $(".country").addClass("show");
            stepCounter++;
            console.log(stepCounter)
            break;
        case 2:
            $(".country").removeClass("show");
            $(".profession").addClass("show");
            stepCounter++;
            console.log(stepCounter)
             break;
        case 3: 
            $(".profession").removeClass("show");
            $(".skils").addClass("show");
            stepCounter++;
            console.log(stepCounter)
            break;
        case 4: 
            $(".skils").removeClass("show");
            $(".work-location").addClass("show");
            stepCounter++;
            // $("#step-next").css("display", "none")
            console.log(stepCounter)
            break;
        default: break;

    }
   })
   $("#step-back").click(() => {
    switch(stepCounter) {
        case 2:
            $(".country").removeClass("show");
            $(".name-phone-age").addClass("show");
            stepCounter -= 1;
            console.log(stepCounter)
             break;
        case 3: 
           $(".profession").removeClass("show");
            $(".country").addClass("show");
            stepCounter -= 1;
            console.log(stepCounter)
            break;
        case 4: 
            $(".skils").removeClass("show");
            $(".profession").addClass("show");
            stepCounter -= 1;
            console.log(stepCounter)
            break;
        case 5: 
            $(".work-location").removeClass("show");
            $(".skils").addClass("show");
            stepCounter -= 1;
            console.log(stepCounter)
            break;
        default: break;

    }
   })
})