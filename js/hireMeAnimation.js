var hireme = document.getElementById("hireme");
var hiremeLineHorizontal = hireme.getElementsByClassName("line-horizontal")[0];
var hiremeInformation = hireme.getElementsByClassName("hireme-information")[0];
var hiremeInfoPstrong = hiremeInformation.getElementsByTagName("p")[0].getElementsByTagName("strong")[0];
var hiremeInfoPspan = hiremeInformation.getElementsByTagName("p")[0].getElementsByTagName("span")[0];
var hiremeInfoH1 = hiremeInformation.getElementsByTagName("h1")[0];
var hiremeInfoH1span = hiremeInformation.getElementsByTagName("h1")[0].getElementsByTagName("span")[0];
var hiremeInfoSmall = hiremeInformation.getElementsByTagName("small")[0];
var hiremePicture = hireme.getElementsByClassName("hireme-picture")[0];
var hiremePP = hireme.getElementsByTagName("img")[0];

// GLOBAL HIRE ME INTERVAL
var hmLineHorizontalINTERVAL = null;
var hmiPstrongINTERVAL = null;
var hmiPspanINTERVAL = null;
var hmiH1INTERVAL = null;
var hmiH1spanINTERVAL = null;
var hmiSmallINTERVAL = null;
var hmPictureINTERVAL = null;
var hmPPINTERVAL = null;

function fadeInHMP() {
    hiremePicture.style.transition = "initial";
    var increment = 0.01;
    var value = parseFloat(window.getComputedStyle(hiremePicture).getPropertyValue("opacity"));
    hmPictureINTERVAL = setInterval(function() {
        if(value > 1) {
            window.clearInterval(hmPictureINTERVAL);
            hiremePicture.style.opacity = "initial";
            slideUpHMpp();
        } else {
            hiremePicture.style.opacity = value;
            value = value + increment;
        }
    }, 1);
}

function slideUpHMpp() {
    hiremePP.style.transition = "initial";
    var hmpHeight = Math.round(hiremePicture.getBoundingClientRect().height - getPaddingYaxis(hiremePicture));
    var translateYpixels = getCurrentTranslateY(hiremePP);
    var translateYpercentage = Math.round((translateYpixels / hmpHeight) * 100);

    var decrement = 2;
    var value = translateYpercentage;

    hmPPINTERVAL = window.setInterval(function() {
        if(value < 0) {
            window.clearInterval(hmPPINTERVAL);
            hiremePP.style.transform = "initial";
            fadeInHMinfoPstrong();
        } else {
            hiremePP.style.transform = "translateY(" + value + "%)";
            value = value - decrement;
        }
    }, 1);
}

function fadeInHMinfoPstrong() {
    hiremeInfoPstrong.style.transition = "initial";
    var increment = 0.01;
    var value = parseFloat(window.getComputedStyle(hiremeInfoPstrong).getPropertyValue("opacity"));
    hmiPstrongINTERVAL = setInterval(function() {
        if(value > 1) {
            window.clearInterval(hmiPstrongINTERVAL);
            hiremeInfoPstrong.style.opacity = "initial";
            fadeInHMinfoPspan();
        } else {
            hiremeInfoPstrong.style.opacity = value;
            value = value + increment;
        }
    }, 5);
}

function fadeInHMinfoPspan() {
    hiremeInfoPspan.style.transition = "initial";
    var increment = 0.01;
    var value = parseFloat(window.getComputedStyle(hiremeInfoPspan).getPropertyValue("opacity"));
    hmiPspanINTERVAL = setInterval(function() {
        if(value > 1) {
            window.clearInterval(hmiPspanINTERVAL);
            hiremeInfoPspan.style.opacity = "initial";
            slideRightHMlineH();
        } else {
            hiremeInfoPspan.style.opacity = value;
            value = value + increment;
        }
    }, 5);
}

function slideRightHMlineH() {
    hiremeLineHorizontal.style.transition = "initial";
    var bodyWidth = Math.round(document.body.getBoundingClientRect().width);
    var translateXpixels = getCurrentTranslateX(hiremeLineHorizontal);
    var translateXpercentage = Math.round((translateXpixels / bodyWidth) * 100);
    
    var decrement = 1;
    var value = translateXpercentage;

    hmLineHorizontalINTERVAL = setInterval(function() {
        if(value > 0) {
            window.clearInterval(hmLineHorizontalINTERVAL);
            hiremeLineHorizontal.style.transform = "initial";
            fadeInHMinfoHone();
        } else {
            hiremeLineHorizontal.style.transform = "translateX(" + value + "vw)";
            value = value + decrement;
        }
    }, 20);
}

function fadeInHMinfoHone() {
    hiremeInfoH1.style.transition = "initial";
    var increment = 0.01;
    var value = parseFloat(window.getComputedStyle(hiremeInfoH1).getPropertyValue("opacity"));
    hmiH1INTERVAL = setInterval(function() {
        if(value > 1) {
            window.clearInterval(hmiH1INTERVAL);
            hiremeInfoH1.style.opacity = "initial";
            fadeInHMinfoHoneSpan();
        } else {
            hiremeInfoH1.style.opacity = value;
            value = value + increment;
        }
    }, 1);
}

function fadeInHMinfoHoneSpan() {
    hiremeInfoH1span.style.transition = "initial";
    var increment = 0.01;
    var value = parseFloat(window.getComputedStyle(hiremeInfoH1span).getPropertyValue("opacity"));
    hmiH1spanINTERVAL = setInterval(function() {
        if(value > 1) {
            window.clearInterval(hmiH1spanINTERVAL);
            hiremeInfoH1span.style.opacity = "initial";
            slideUpHMinfoSmall();
        }
         else {
            hiremeInfoH1span.style.opacity = value;
            value = value + increment;
        }
    }, 5);
}

function slideUpHMinfoSmall() {
    hiremeInfoSmall.style.transition = "initial";
    var bodyWidth = Math.round(document.body.getBoundingClientRect().width);
    var translateXpixels = getCurrentTranslateY(hiremeInfoSmall);
    var translateXpercentage = Math.round((translateXpixels / bodyWidth) * 100);
    
    var decrement = 1;
    var value = translateXpercentage;

    // var instance = setInterval(function() {
        hmiSmallINTERVAL = setInterval(function() {
        if(value < 0) {
            clearInterval(hmiSmallINTERVAL);
            hiremeInfoSmall.style.transform = "initial";
        } else {
            hiremeInfoSmall.style.transform = "translateY(" + value + "vw)";
            value = value - decrement;
        }
    }, 1);

}

function clearHManima() {
    hiremePicture.style.transition = "all 500ms";
    hiremePicture.style.opacity = 0;
    hiremePP.style.transition = "all 500ms";
    hiremePP.style.transform = "translateY(110%)";
    hiremeInfoPstrong.style.transition = "all 500ms";
    hiremeInfoPstrong.style.opacity = 0;
    hiremeInfoPspan.style.transition = "all 500ms";
    hiremeInfoPspan.style.opacity = 0;
    hiremeLineHorizontal.style.transition = "all 500ms";
    hiremeLineHorizontal.style.transform = "translateX(-25vw)";
    hiremeInfoH1.style.transition = "all 500ms";
    hiremeInfoH1.style.opacity = 0;
    hiremeInfoH1span.style.transition = "all 500ms";
    hiremeInfoH1span.style.opacity = 0;
    hiremeInfoSmall.style.transition = "all 500ms";
    hiremeInfoSmall.style.transform = "translateY(100vw)";
    clearInterval(hmPPINTERVAL);
    clearInterval(hmPictureINTERVAL);
    clearInterval(hmiH1spanINTERVAL);
    clearInterval(hmiH1INTERVAL);
    clearInterval(hmiPspanINTERVAL);
    clearInterval(hmiPstrongINTERVAL);
    clearInterval(hmLineHorizontalINTERVAL);
    clearInterval(hmiSmallINTERVAL);
}

// PADDING TOP BOTTOM
function getPaddingYaxis(element) {
    return parseFloat(window.getComputedStyle(element).paddingTop.replace(/\D/g,'')) + parseFloat(window.getComputedStyle(element).paddingBottom.replace(/\D/g,''));
}

// TRANSLATE LEFT RIGHT
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

// TRANSLATE TOP BOTTOM
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