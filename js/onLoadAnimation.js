// CHANGE URL TO '/' ON REFRESH

if (typeof(window.history.pushState) == 'function') {
    window.history.pushState("", document.title, window.location.pathname);
} else {
    window.location.hash = '#!' + path;
}

// ANIMATION

var hmfContainer = document.getElementsByClassName("header-main-footer-container")[0];

var logoHeader = hmfContainer.getElementsByTagName("header")[0];

var navMenu = hmfContainer.getElementsByTagName("footer")[0].getElementsByClassName("navigation-menu")[0];
var navMenuButton = navMenu.getElementsByTagName("button")[0];
var navIndicatorContainer = document.getElementsByClassName("navigation-indicator-container")[0];

var content = document.getElementById("content");

var copyright = document.getElementsByClassName("copyright-container")[0];

function onLoadInit() {
    fadeInLogo();

    if(window.screen.width > 768) {
        setTimeout(slideLeftNavMenu, 500);
    } else {
        setTimeout(slideLeftNavMenuMobile, 500);
    }
}

function fadeInLogo() {
    var increment = 0.01;
    var value = parseFloat(window.getComputedStyle(logoHeader).getPropertyValue("opacity"));
    var instance = window.setInterval(function() {
        if(value > 1) {
            window.clearInterval(instance);
            logoHeader.style.opacity = "initial";
            
        } else {
            logoHeader.style.opacity = value;
            value = value + increment;
        }
    }, 10);
}

function slideLeftNavMenu() {
    var hmfContainerWidth = Math.round(hmfContainer.getBoundingClientRect().width);
    var translateXpixels = getCurrentTranslateX(navMenu);
    var translateXpercentage = Math.round((translateXpixels / hmfContainerWidth) * 100);
    var decrement = 2;
    var value = translateXpercentage;
    var instance = window.setInterval(function() {
        if(value < 0) {
            window.clearInterval(instance);
            navMenu.style.transform = "initial";
            slideDownNavIndicator();

        } else {
            navMenu.style.transform = "translateX(" + value +"%)";
            value = value - decrement;
        }
    }, 1);
}

function slideLeftNavMenuMobile() {
    var bodyPaddingXaxis = parseFloat(window.getComputedStyle(document.body).paddingLeft.replace(/\D/g,'')) + parseFloat(window.getComputedStyle(document.body).paddingRight.replace(/\D/g,''));
    var navMenuWidth = Math.round(navMenu.getBoundingClientRect().width) + bodyPaddingXaxis;
    var translateXpixels = getCurrentTranslateX(navMenuButton);
    var translateXpercentage = Math.round((translateXpixels / navMenuWidth) * 100);
    var decrement = 2;
    var value = translateXpercentage;
    var instance = window.setInterval(function() {
        if(value < 0) {
            window.clearInterval(instance);
            navMenuButton.style.transform = "initial";
            slideRightContent();

        } else {
            navMenuButton.style.transform = "translateX(" + value +"%)";
            value = value - decrement;
        }
    }, 1);
}

function slideDownNavIndicator() {
    var navIndicatorContainerHeight = Math.round(navIndicatorContainer.getBoundingClientRect().height);
    var translateYpixels = getCurrentTranslateY(navIndicatorContainer);
    var translateYpercentage = Math.round((translateYpixels / navIndicatorContainerHeight) * 100);

    var decrement = 2;
    var value = translateYpercentage;

    var instance = window.setInterval(function() {
        if(value > 0) {
            window.clearInterval(instance);
            navIndicatorContainer.style.transform = "initial";
            slideRightContent();
        } else {
            navIndicatorContainer.style.transform = "translateY(" + value +"%)";
            value = value + decrement;
        }
    }, 1);
}

function slideRightContent() {
    var contentWidth = Math.round(content.getBoundingClientRect().width);
    var translateXpixels = getCurrentTranslateX(content);
    var translateXpercentage = Math.round((translateXpixels / contentWidth) * 100);

    var decrement = 2;
    var value = translateXpercentage;

    var instance = window.setInterval(function() {
        if(value > 0) {
            window.clearInterval(instance);
            content.style.transform = "initial)";
        } else {
            content.style.transform = "translateX(" + value + "%)";
            value = value + decrement;
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

// CODE FOR RESIZE

window.addEventListener('resize', function(event){
    location.reload();
});