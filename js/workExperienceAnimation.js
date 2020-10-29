var workExperience = document.getElementById("workexperience");
var weLineVertical = document.getElementsByClassName("work-experience-line-vertical")[0];

var latestWork = document.getElementsByClassName("latest-work")[0];
var lwFirstLineHorizontal = latestWork.getElementsByClassName("line-horizontal")[0];
var lwDetails = latestWork.getElementsByClassName("latest-work-details")[0];


var pastWork = Array.from(document.getElementsByClassName("past-work"));

function slideUpWEvLine() {
    weLineVertical.style.transition = "initial";
    var workExpHeight = Math.round(aboutMe.getBoundingClientRect().height);
    var translateYpixels = getCurrentTranslateY(weLineVertical);
    var translateYpercentage = Math.round((translateYpixels / workExpHeight) * 100);
    
    var decrement = 1;
    var value = translateYpercentage;

    var instance = window.setInterval(function() {
        if(value < 0) {
            window.clearInterval(instance);
            weLineVertical.style.transform = "initial";
            
        } else {
            weLineVertical.style.transform = "translateY(" + value +"%)";
            value = value - decrement;
        }
    }, 1);
}

function clearSlideUpWEvLine() {
    weLineVertical.style.transition = "all 3s";
    weLineVertical.style.transform = "translateY(110%)";
}

function slideRightLWlinehorizontal() {
    lwFirstLineHorizontal.style.transition = "initial";
    var lwFirstLineHorizontalWidth = Math.round(lwFirstLineHorizontal.getBoundingClientRect().width);
    var translateXpixels = getCurrentTranslateX(lwFirstLineHorizontal);
    var translateXpercentage = Math.round((translateXpixels / lwFirstLineHorizontalWidth) * 100) + 1;

    var decrement = 2;
    var value = translateXpercentage;

    var instance = window.setInterval(function() {
        if(value > 0) {
            window.clearInterval(instance);
            lwFirstLineHorizontal.style.transform = "initial";
            fadeInLWdetails();
        } else {
            lwFirstLineHorizontal.style.transform = "translateX(" + value + "%)";
            value = value + decrement;
        }
    }, 1);
}

function fadeInLWdetails() {;
    lwDetails.style.transition = "initial";
    var increment = 0.01;
    var value = parseFloat(window.getComputedStyle(lwDetails).getPropertyValue("opacity"));
    var instance = window.setInterval(function() {
        if(value > 1) {
            window.clearInterval(instance);
            lwDetails.style.opacity = "initial";
            
        } else {
            lwDetails.style.opacity = value;
            value = value + increment;
        }
    }, 1);
}

function clearLatestWork() {
    lwFirstLineHorizontal.style.transition = "all 500ms";
    lwDetails.style.transition = "all 250ms";
    lwFirstLineHorizontal.style.transform = "translateX(-110%)";
    lwDetails.style.opacity = "0";
}

function slideRightPWLineHorizontal(element) {
    var pwLineHorizontal = element.getElementsByClassName("line-horizontal")[0];
    pwLineHorizontal.style.transition = "initial";
    var pwLineHorizontalWidth = Math.round(pwLineHorizontal.getBoundingClientRect().width);
    var translateXpixels = getCurrentTranslateX(pwLineHorizontal);
    var translateXpercentage = Math.round((translateXpixels / pwLineHorizontalWidth) * 100) + 1;

    var decrement = 2;
    var value = translateXpercentage;

    var instance = window.setInterval(function() {
        if(value > 0) {
            window.clearInterval(instance);
            pwLineHorizontal.style.transform = "initial";
            fadeInPWdetails(element);
        } else {
            pwLineHorizontal.style.transform = "translateX(" + value + "%)";
            value = value + decrement;
        }
    }, 5);
}

function fadeInPWdetails(element) {
    var pwDetails = element.getElementsByClassName("past-work-details")[0];
    pwDetails.style.transition = "initial";
    var increment = 0.01;
    var value = parseFloat(window.getComputedStyle(pwDetails).getPropertyValue("opacity"));
    var instance = window.setInterval(function() {
        if(value > 1) {
            window.clearInterval(instance);
            pwDetails.style.opacity = "initial";
            
        } else {
            pwDetails.style.opacity = value;
            value = value + increment;
        }
    }, 1);
}

function clearPastWork(element) {
    element.getElementsByClassName("line-horizontal")[0].style.transition = "all 500ms";
    element.getElementsByClassName("past-work-details")[0].style.transition = "all 250ms";
    element.getElementsByClassName("line-horizontal")[0].style.transform = "translateX(-110%)";
    element.getElementsByClassName("past-work-details")[0].style.opacity = "0";
}