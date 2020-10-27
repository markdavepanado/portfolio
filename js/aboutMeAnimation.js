var aboutMe = document.getElementById("aboutme");
var amLineVertical = document.getElementsByClassName("about-me-line-vertical")[0];
var personalInformation = document.getElementsByClassName("personal-information")[0];
var personalDetails = document.getElementsByClassName("personal-details")[0];
var pdImg = personalDetails.getElementsByTagName("img")[0];

var firstLineHorizontal = personalDetails.getElementsByClassName("line-horizontal")[0];

var programDetails = document.getElementsByClassName("program-details")[0];
var pdLineHorizontal = programDetails.getElementsByClassName("line-horizontal")[0];
var programInformation = programDetails.getElementsByClassName("program-information")[0];
var awardDetails = document.getElementsByClassName("award-details")[0];
var adLineHorizontal = awardDetails.getElementsByClassName("line-horizontal")[0];
var awardInformation = awardDetails.getElementsByClassName("award-information")[0];

// aboutMeInit();
// function aboutMeInit() {
//     setTimeout(slideUpVLine, 5000);
// }

function slideUpVLine() {
    amLineVertical.style.transition = "initial";
    var aboutMeHeight = Math.round(aboutMe.getBoundingClientRect().height);
    var translateYpixels = getCurrentTranslateY(amLineVertical);
    var translateYpercentage = Math.round((translateYpixels / aboutMeHeight) * 100);
    
    var decrement = 1;
    var value = translateYpercentage;

    var instance = window.setInterval(function() {
        if(value < 0) {
            window.clearInterval(instance);
            amLineVertical.style.transform = "initial";
            
        } else {
            amLineVertical.style.transform = "translateY(" + value +"%)";
            value = value - decrement;
        }
    }, 1);
}
function slideDownVLine() {
    amLineVertical.style.transition = "all 3s";
    amLineVertical.style.transform = "translateY(110%)";
}

function clearSlideUpVLine() {
    slideDownVLine();
}

function slideRightFLhorizontal() {
    firstLineHorizontal.style.transition = "initial";
    var firstLineHorizontalWidth = Math.round(firstLineHorizontal.getBoundingClientRect().width);
    var translateXpixels = getCurrentTranslateX(firstLineHorizontal);
    var translateXpercentage = Math.round((translateXpixels / firstLineHorizontalWidth) * 100) + 1;

    var decrement = 2;
    var value = translateXpercentage;

    var instance = window.setInterval(function() {
        if(value > 0) {
            window.clearInterval(instance);
            firstLineHorizontal.style.transform = "initial";
            fadeInImg();
        } else {
            firstLineHorizontal.style.transform = "translateX(" + value + "%)";
            value = value + decrement;
        }
    }, 1);
}

function fadeInImg() {
    pdImg.style.transition = "initial";
    var increment = 0.02;
    var value = parseFloat(window.getComputedStyle(pdImg).getPropertyValue("opacity"));
    var instance = window.setInterval(function() {
        if(value > 1) {
            window.clearInterval(instance);
            pdImg.style.opacity = "initial";
            slideLeftPI();
            
        } else {
            pdImg.style.opacity = value;
            value = value + increment;
        }
    }, 1);
}

function slideLeftPI() {
    personalInformation.style.transition = "initial";
    var bodyPaddingXaxis = parseFloat(window.getComputedStyle(document.body).paddingLeft.replace(/\D/g,'')) + parseFloat(window.getComputedStyle(document.body).paddingRight.replace(/\D/g,''));
    var piPaddingXaxis = parseFloat(window.getComputedStyle(personalInformation).paddingLeft.replace(/\D/g,'')) + parseFloat(window.getComputedStyle(personalInformation).paddingRight.replace(/\D/g,''));
    var personalDetailsWidth = Math.round(personalDetails.getBoundingClientRect().width) + bodyPaddingXaxis + Math.round(pdImg.getBoundingClientRect().width) + piPaddingXaxis;
    var translateXpixels = getCurrentTranslateX(personalInformation);
    var translateXpercentage = Math.round((translateXpixels / personalDetailsWidth) * 100) + 1;

    var decrement = 2;
    var value = translateXpercentage;
    var instance = window.setInterval(function() {
        if(value < 0) {
            window.clearInterval(instance);
            personalInformation.style.transform = "initial";

        } else {
            personalInformation.style.transform = "translateX(" + value +"vw)";
            value = value - decrement;
        }
    }, 1);
}

function clearPersonalDetails() {
    firstLineHorizontal.style.transition = "all 500ms";
    pdImg.style.transition = "all 250ms";
    personalInformation.style.transition = "all 100ms";
    firstLineHorizontal.style.transform = "translateX(-110%)";
    pdImg.style.opacity = "0";
    personalInformation.style.transform = "translateX(100vw)";
}

function slideRightPDLineHorizontal() {
    var pdLineHorizontalWidth = Math.round(pdLineHorizontal.getBoundingClientRect().width);
    var translateXpixels = getCurrentTranslateX(pdLineHorizontal);
    var translateXpercentage = Math.round((translateXpixels / pdLineHorizontalWidth) * 100) + 1;

    var decrement = 2;
    var value = translateXpercentage;

    var instance = window.setInterval(function() {
        if(value > 0) {
            window.clearInterval(instance);
            pdLineHorizontal.style.transform = "initial";
            fadeInProgramInformation();
        } else {
            pdLineHorizontal.style.transform = "translateX(" + value + "%)";
            value = value + decrement;
        }
    }, 1);
}

function fadeInProgramInformation() {
    var increment = 0.01;
    var value = parseFloat(window.getComputedStyle(programInformation).getPropertyValue("opacity"));
    var instance = window.setInterval(function() {
        if(value > 1) {
            window.clearInterval(instance);
            programInformation.style.opacity = "initial";
            
        } else {
            programInformation.style.opacity = value;
            value = value + increment;
        }
    }, 1);
}

function slideRightADLineHorizontal() {
    var adLineHorizontalWidth = Math.round(adLineHorizontal.getBoundingClientRect().width);
    var translateXpixels = getCurrentTranslateX(adLineHorizontal);
    var translateXpercentage = Math.round((translateXpixels / adLineHorizontalWidth) * 100) + 1;

    var decrement = 2;
    var value = translateXpercentage;

    var instance = window.setInterval(function() {
        if(value > 0) {
            window.clearInterval(instance);
            adLineHorizontal.style.transform = "initial";
            fadeInAwardInformation();
        } else {
            adLineHorizontal.style.transform = "translateX(" + value + "%)";
            value = value + decrement;
        }
    }, 1);
}

function fadeInAwardInformation() {
    var increment = 0.01;
    var value = parseFloat(window.getComputedStyle(awardInformation).getPropertyValue("opacity"));
    var instance = window.setInterval(function() {
        if(value > 1) {
            window.clearInterval(instance);
            awardInformation.style.opacity = "initial";
            
        } else {
            awardInformation.style.opacity = value;
            value = value + increment;
        }
    }, 1);
}

function getCurrentTranslateX(element) {
    var elementStyle = window.getComputedStyle(element, null);
    var hasTransform = elementStyle.getPropertyValue("-webkit-transform") ||
            elementStyle.getPropertyValue("-moz-transform") ||
            elementStyle.getPropertyValue("-ms-transform") ||
            elementStyle.getPropertyValue("-o-transform") ||
            elementStyle.getPropertyValue("transform") ||
            "none";
    if (hasTransform != "none") {
        var translatexValue = hasTransform.match(/(-?[0-9\.]+)/g)[4];
        return translatexValue;
    }
    return 0;
    
}

function getCurrentTranslateY(element) {
    var elementStyle = window.getComputedStyle(element, null);
    var hasTransform = elementStyle.getPropertyValue("-webkit-transform") ||
            elementStyle.getPropertyValue("-moz-transform") ||
            elementStyle.getPropertyValue("-ms-transform") ||
            elementStyle.getPropertyValue("-o-transform") ||
            elementStyle.getPropertyValue("transform") ||
            "none";
    if (hasTransform != "none") {
        var translateyValue = hasTransform.match(/(-?[0-9\.]+)/g)[5];
        return translateyValue;
    }
    return 0;
    
}