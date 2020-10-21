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
    checkTargetIfError("main", e.target.parentElement.tagName, "scroll");
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
        checkTargetIfError("main", myElement, "swipe");
    // Top Right
    } else if (touchendY < touchstartY && touchendX > touchstartX) {
        checkTargetIfError("main", myElement, "swipe");
    // Bottom Left
    } else if (touchendY > touchstartY && touchendX < touchstartX) {
        checkTargetIfError("main", myElement, "swipe");
    // Bottom Right
    } else if (touchendY > touchstartY && touchendX > touchstartX) {
        checkTargetIfError("main", myElement, "swipe");
    // left
    } else if (touchendX < touchstartX) {
        checkTargetIfError("main", myElement, "swipe");
    // right
    } else if (touchendX > touchstartX) {
        checkTargetIfError("main", myElement, "swipe");
    // Top
    } else if (touchendY < touchstartY) {
        checkTargetIfError("main", myElement, "swipe");
    // Bottom
    } else if (touchendY > touchstartY) {
        checkTargetIfError("main", myElement, "swipe");
    }
}

window.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX;
  touchstartY = e.changedTouches[0].screenY;
  myElement = e.target.parentElement.tagName;
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
        if(element.toLowerCase() != target.toLowerCase()) {
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
        if(element.toLowerCase() != target.toLowerCase() 
    && element.toLowerCase() != "svg" 
    && element.toLowerCase() != "nav"
    && element.toLowerCase() != "li"
    && element.toLowerCase() != "ul") {
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