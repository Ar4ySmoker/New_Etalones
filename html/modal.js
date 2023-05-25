$(document).ready(() => {
    let stepCounter = 1;
   $("#step-next").click(() => {
    switch(stepCounter) {
        case 1: 
            $(".name-phone-age").removeClass("show");            
            $(".country").addClass("show");
            stepCounter++;
            $("#step-back").removeClass("hide");
        
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
            $("#step-back").removeClass("hide");
            $(".name-phone-age").addClass("show");
            stepCounter -= 1;
            
            console.log(stepCounter);
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

   let lineW = document.getElementById('lineW');
let lineWeightValue = document.getElementById('lineWeightValue');

setInterval(() => lineWeightValue.innerHTML = lineW.value, 0);




})