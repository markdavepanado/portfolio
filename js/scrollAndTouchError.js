// ERROR MESSAGE
var errorMessage = document.getElementById("errorMessage");
var strongEvent = errorMessage.getElementsByTagName("span")[0].getElementsByTagName("strong")[0];

var scrollTimer = -1;

// SCROLL

function scrollTouchInit() {
    window.addEventListener('mouseover', checkOnHover);
    checkSwipeEvent();
}

function checkOnHover() {
    window.addEventListener('wheel', checkOnScroll);
    window.addEventListener('DOMMouseScroll', checkOnScroll);
    window.addEventListener('mousewheel', checkOnScroll);
}

function checkOnScroll(e) {
    checkTargetIfError("main", e.path, "Scroll");
    
}

function scrollFinished() {

    errorMessage.style.display = "none";
    if(checkClass(document.body, 'error')) {
        toggleClass(document.body, 'error');
    }
}

// TOUCH
function checkSwipeEvent() {
    let touchstartX = 0;
    let touchendX = 0;
    let touchstartY = 0;
    let touchendY = 0;
    let myElement = "";

function handleGesure() {
    // Top Left
    if (touchendY < touchstartY && touchendX < touchstartX) {
        checkTargetIfError("main", myElement, "Swipe");
    // Top Right
    } else if (touchendY < touchstartY && touchendX > touchstartX) {
        checkTargetIfError("main", myElement, "Swipe");
    // Bottom Left
    } else if (touchendY > touchstartY && touchendX < touchstartX) {
        checkTargetIfError("main", myElement, "Swipe");
    // Bottom Right
    } else if (touchendY > touchstartY && touchendX > touchstartX) {
        checkTargetIfError("main", myElement, "Swipe");
    // left
    } else if (touchendX < touchstartX) {
        checkTargetIfError("main", myElement, "Swipe");
    // right
    } else if (touchendX > touchstartX) {
        checkTargetIfError("main", myElement, "Swipe");
    // Top
    } else if (touchendY < touchstartY) {
        checkTargetIfError("main", myElement, "Swipe");
    // Bottom
    } else if (touchendY > touchstartY) {
        checkTargetIfError("main", myElement, "Swipe");
    }
}

window.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX;
  touchstartY = e.changedTouches[0].screenY;
  myElement = e.path;
});

window.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX;
  touchendY = e.changedTouches[0].screenY;
  handleGesure();
});
}


// ERROR SETTER
function checkTargetIfError(target, element, event) {
    
    if(window.screen.width > 768) {
        
        var thereIsMain = false;
        for(var i = 0; i < element.length - 1; i++) {
            if(element[i].nodeName.toLowerCase() == target) {
                thereIsMain = true;
            }
        }

        if(!thereIsMain) {
            document.body.className = "error";
            errorMessage.style.display = "flex";
            strongEvent.innerText = event;
            
            clearError();
            } else {
                if(checkClass(document.body, 'error')) {
                    toggleClass(document.body, 'error');
                }
            }

    } else {

        var thereIsMain = false;
        for(var i = 0; i < element.length - 1; i++) {
            if(element[i].nodeName.toLowerCase() == target 
            || element[i].nodeName.toLowerCase() == "svg"
            || element[i].nodeName.toLowerCase() == "li" 
            || element[i].nodeName.toLowerCase() == "ul") {
                thereIsMain = true;
            }
        }

        if(!thereIsMain) {
            document.body.className = "error";
            errorMessage.style.display = "flex";
            strongEvent.innerText = event;
            
            clearError();
            } else {
                if(checkClass(document.body, 'error')) {
                    toggleClass(document.body, 'error');
                }
            }
    }
    
}

// SET TIMEOUT
function clearError() {
    if (scrollTimer != -1) {
        clearTimeout(scrollTimer);
    } else {
    }
    scrollTimer = window.setTimeout("scrollFinished()", 500);
}