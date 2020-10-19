var loadingImg = document.getElementById("loading-img");
var loadingText = document.getElementById("loading-text");
var loaderContainer = document.getElementsByClassName("loader-container")[0];

// HEADER CONTENT FOOTER COPYRIGHT
var hmfContainer = document.getElementsByClassName("header-main-footer-container")[0];
var navIndicatorContainer = document.getElementsByClassName("navigation-indicator-container")[0];
var copyright = document.getElementsByClassName("copyright-container")[0];

init();
function init() {
    fadeinImg();
}

function fadeinImg() {
    var increment = 0.01;
    var opacity = 0;
    var instance = window.setInterval(function() {
        if(opacity >= 1) {
            slideleftImg();
            window.clearInterval(instance);
        } else {
            loadingImg.style.opacity = opacity;
            opacity = opacity + increment;
        }
        
        
    }, 10)
}

function slideleftImg(){
    var increment = 2;
    var slideleft = getCurrentTranslateX(loadingImg);
    
    var instance = window.setInterval(function() {
        if(slideleft <= 0) {
            fadeinText();
            window.clearInterval(instance);
        } else {
            loadingImg.style.transform = "translateX(" + slideleft + "px)";
            slideleft = slideleft - increment;
        }
        
    }, 1)
}

function fadeinText() {
    var increment = 0.01;
    var opacity = 0;
    var instance = window.setInterval(function() {
        if(opacity > 1) {
            spinImg();
            window.clearInterval(instance);
        } else {
            loadingText.style.opacity = opacity;
            opacity = opacity + increment;
        }
        
    }, 10)
}

function spinImg() {
    
    // var loadingImgStyle = window.getComputedStyle(loadingImg).getPropertyValue('transform');
    var increment = 10;
    var slideleft = getCurrentRotation(loadingImg);
    var instance = window.setInterval(function() {
        loadingImg.style.transform = "rotate(" + slideleft + "deg)";
        slideleft = slideleft + increment;
        
    }, 30);
    
    setTimeout(function() {
        window.clearInterval(instance);
        fadeOutLoading();
        loadingImg.style.transform = "none";
    }, 2000);
}

function fadeOutLoading() {
    var decrement = 0.01;
    var opacity = 1;
    var instance = window.setInterval(function() {
        if(opacity < 0) {
            clearInterval(instance);
            loaderContainer.style.display = "none";
            hmfContainer.style.cssText = 'display:initial !important';
            navIndicatorContainer.style.cssText = 'display:flex !important';
            copyright.style.cssText = 'display:initial !important';
            highlightActiveMenu();
            onLoadInit();
            
        } else {
            loaderContainer.style.opacity = opacity;
            opacity = opacity - decrement;
        }
    }, 1);
    // }, 10);
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
    // var elementStyle = window.getComputedStyle(element).getPropertyValue('transform');
    
}

function getCurrentRotation(element){
    var elementStyle = window.getComputedStyle(element, null);
    var hasTransform = elementStyle.getPropertyValue("-webkit-transform") ||
            elementStyle.getPropertyValue("-moz-transform") ||
            elementStyle.getPropertyValue("-ms-transform") ||
            elementStyle.getPropertyValue("-o-transform") ||
            elementStyle.getPropertyValue("transform") ||
             "none";
    if (hasTransform != "none") {
      var values = hasTransform.split('(')[1].split(')')[0].split(',');
      /*
      a = values[0];
      b = values[1];
      angle = Math.round(Math.atan2(b,a) * (180/Math.PI));
      */
      //return Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI)); //this would return negative values the OP doesn't wants so it got commented and the next lines of code added
      var angle = Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI));
      return (angle < 0 ? angle + 360 : angle); //adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
    }
    return 0;
  }