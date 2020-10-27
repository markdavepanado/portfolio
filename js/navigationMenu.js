var main = document.getElementById("content");

// NAVIGATION MENU
var menuButton = document.getElementById("nav-menu-btn");
var navigationMenu = document.getElementsByClassName("navigation-menu")[0];
var navMenuUL = navigationMenu.getElementsByTagName("ul")[0];
var navMenuULanchorTags = navMenuUL.getElementsByTagName("a");

// NAVIGATION INDICATOR
var navigationDotContainer = document.getElementsByClassName("navigation-dot-indicator")[0];
var navigationIndicators = navigationDotContainer.getElementsByTagName("a");

var currentNavPATH = './images/current-indicator.svg';
var nextPrevPATH = './images/next-prev-indicator.svg';

var suvlAnimaCounter = 0;
var personalAnimaCounter = 0;
var programAnimaCounter = 0;

var offsetHalf = .60;

highlightActiveMenu();
  
main.addEventListener('scroll', highlightActiveMenu);
main.addEventListener('wheel', highlightActiveMenu);
main.addEventListener('DOMMouseScroll', highlightActiveMenu);
main.addEventListener('mousewheel', highlightActiveMenu);
menuButton.addEventListener('click', toggleMenuMobile);


function suvlAnima() {
    let fromTop = main.scrollTop + main.offsetTop + 5;
    var aboutMeOffSetTop = aboutMe.offsetTop;
    var aboutMeOffSetTopHalf = aboutMeOffSetTop * offsetHalf;
    var aboutMeOffSetHeight = aboutMe.offsetHeight;

        if(
            aboutMeOffSetTopHalf <= fromTop && 
            (aboutMeOffSetTop + aboutMeOffSetHeight) > fromTop
        ) {
            suvlAnimaCounter++;
        } else {
            suvlAnimaCounter = 0
        }
        
        if(suvlAnimaCounter == 1) {
            slideUpVLine();
        } else if(suvlAnimaCounter == 0) {
            clearSlideUpVLine();
        }
}

function getPaddingXaxis(element) {
    return parseFloat(window.getComputedStyle(element).paddingLeft.replace(/\D/g,'')) + parseFloat(window.getComputedStyle(element).paddingRight.replace(/\D/g,''));
}

function getPaddingYaxis(element) {
    return parseFloat(window.getComputedStyle(element).paddingTop.replace(/\D/g,'')) + parseFloat(window.getComputedStyle(element).paddingBottom.replace(/\D/g,''));
}

function getPaddingTop(element) {
    return parseFloat(window.getComputedStyle(element).paddingTop.replace(/\D/g,''));
}

function personaldAnima() {
    let fromTop = main.scrollTop + main.offsetTop + 5;
    var personalDetailsOffSetTop = personalDetails.offsetTop;
    var advancePDoffSetTopHalf = (aboutMe.offsetTop + personalDetailsOffSetTop) * offsetHalf;
    var advancePDoffSetTopHeight = aboutMe.offsetTop + personalDetailsOffSetTop + personalDetails.offsetHeight - getPaddingTop(personalDetails);
    console.log(personalDetailsOffSetTop);
        if(
            advancePDoffSetTopHalf <= fromTop && advancePDoffSetTopHeight > fromTop
        ) {
            personalAnimaCounter++;
            
        } else {
            personalAnimaCounter = 0;
        }

        if(personalAnimaCounter == 1) {
            setTimeout(slideRightFLhorizontal, 500);
        } else if (personalAnimaCounter == 0) {
            clearPersonalDetails();
        }
}

function programdAnima() {
    let fromTop = main.scrollTop + main.offsetTop + 5;
    var programDetailsOffSetTop = programDetails.offsetTop;
    var advanceProgramDoffSetTopHalf = (aboutMe.offsetTop + programDetailsOffSetTop) * offsetHalf;
    var advanceProgramDoffSetTopHeight = aboutMe.offsetTop + programDetailsOffSetTop;
    console.log(programDetailsOffSetTop);
        if(
            advanceProgramDoffSetTopHalf <= fromTop && advanceProgramDoffSetTopHeight > fromTop
        ) {
            programAnimaCounter++;
            
        } else {
            programAnimaCounter = 0;
        }

        if(programAnimaCounter == 1) {
            slideRightPDLineHorizontal();
        } else if (programAnimaCounter == 0) {
            clearProgramDetails();
        }
}

function highlightActiveMenu() {
    let navigationLinks = document.querySelectorAll('nav ul li a');
    let fromTop = main.scrollTop + main.offsetTop + 5;
    counter = 0;

    suvlAnima();
    personaldAnima();
    programdAnima();
    
    navigationLinks.forEach(link => {
        let section = document.querySelector('#'+ link.href.split("#")[1] || "");
        if(
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.className = "active";
        } else {
           link.className = link.className.replace(/(?:^|\s)active(?!\S)/g , '');
        }

        if(checkClass(link, 'active')) {

            if(counter == 0) {
                // INDICATOR SVG
                navigationIndicators[0].getElementsByTagName("img")[0].src=currentNavPATH;
                navigationIndicators[1].getElementsByTagName("img")[0].src=nextPrevPATH;
                navigationIndicators[2].getElementsByTagName("img")[0].src=nextPrevPATH;

                // INDICATOR HREF
                navigationIndicators[0].href = link.getAttribute("href");
                navigationIndicators[1].href = navigationLinks[counter+1].getAttribute("href");
                navigationIndicators[2].href = navigationLinks[counter+2].getAttribute("href");

                // INDICATOR CLASS
                navigationIndicators[0].className = "active";
                navigationIndicators[1].className = navigationIndicators[1].className.replace(/(?:^|\s)active(?!\S)/g , '');
                navigationIndicators[2].className = navigationIndicators[2].className.replace(/(?:^|\s)active(?!\S)/g , '');

                // INDICATOR NAME
                navigationIndicators[0].getElementsByTagName("span")[0].innerText = link.innerText;
                navigationIndicators[1].getElementsByTagName("span")[0].innerText = navigationLinks[counter+1].innerText;
                navigationIndicators[2].getElementsByTagName("span")[0].innerText = navigationLinks[counter+2].innerText;

            } else if(counter == navigationLinks.length - 1) {
                // INDICATOR SVG
                navigationIndicators[0].getElementsByTagName("img")[0].src=nextPrevPATH;
                navigationIndicators[1].getElementsByTagName("img")[0].src=nextPrevPATH;
                navigationIndicators[2].getElementsByTagName("img")[0].src=currentNavPATH;

                // INDICATOR HREF
                navigationIndicators[0].href = navigationLinks[counter-2].getAttribute("href");
                navigationIndicators[1].href = navigationLinks[counter-1].getAttribute("href");
                navigationIndicators[2].href = link.getAttribute("href");

                 // INDICATOR CLASS
                navigationIndicators[0].className = navigationIndicators[0].className.replace(/(?:^|\s)active(?!\S)/g , '');
                navigationIndicators[1].className = navigationIndicators[1].className.replace(/(?:^|\s)active(?!\S)/g , '');
                navigationIndicators[2].className = "active"

                 // INDICATOR NAME
                 navigationIndicators[0].getElementsByTagName("span")[0].innerText = navigationLinks[counter-2].innerText;
                 navigationIndicators[1].getElementsByTagName("span")[0].innerText = navigationLinks[counter-1].innerText;
                 navigationIndicators[2].getElementsByTagName("span")[0].innerText = link.innerText;

            } else {
                // INDICATOR SVG
                navigationIndicators[0].getElementsByTagName("img")[0].src=nextPrevPATH;
                navigationIndicators[1].getElementsByTagName("img")[0].src=currentNavPATH;
                navigationIndicators[2].getElementsByTagName("img")[0].src=nextPrevPATH;

                // INDICATOR HREF
                navigationIndicators[0].href = navigationLinks[counter-1].getAttribute("href");
                navigationIndicators[1].href = link.getAttribute("href");
                navigationIndicators[2].href = navigationLinks[counter+1].getAttribute("href");

                 // INDICATOR CLASS
                navigationIndicators[0].className = navigationIndicators[0].className.replace(/(?:^|\s)active(?!\S)/g , '');
                navigationIndicators[1].className = "active";
                navigationIndicators[2].className = navigationIndicators[2].className.replace(/(?:^|\s)active(?!\S)/g , '');

                // INDICATOR NAME
                navigationIndicators[0].getElementsByTagName("span")[0].innerText = navigationLinks[counter-1].innerText;
                navigationIndicators[1].getElementsByTagName("span")[0].innerText = link.innerText;
                navigationIndicators[2].getElementsByTagName("span")[0].innerText = navigationLinks[counter+1].innerText;

            }
        }

        counter++;
        
    });
}

// CHECK CLASS IF EXIST
function checkClass(element, className) {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className) || false;
};

// TOGGLE NAV MOBILE CLASS
function toggleMenuMobile() {
    toggleClass(navigationMenu, "open");

    if(checkClass(navigationMenu, 'open')) {
        slideInMobileNavUL();
    } else {
        toggleClass(navigationMenu, "closing");
        fadeOutLinks();
    }
}


function toggleClass(element, myClass) {
    var classes = element.className.split(" ");
    var i = classes.indexOf(myClass);

  if (i >= 0)
    classes.splice(i, 1);
  else
    classes.push(myClass);
    element.className = classes.join(" ");
}

// NAVIGATION MOBILE ANIMATION

function slideInMobileNavUL(){
    menuButton.style.pointerEvents = "none";
    var increment = 1;
    var slideleft = 17;
    
    var instance = window.setInterval(function() {
        if(slideleft > 100) {
            window.clearInterval(instance);
            fadeInLinks();
        } else {
            navMenuUL.style.width = "calc(" + slideleft + "% - 40px)";
            slideleft = slideleft + increment;
        }
        
    }, 1)
}

function fadeInLinks() {
    var increment = 1;
    var value = 0;

    var instance = window.setInterval(function() {
        if(value > 1) {
            window.clearInterval(instance);
            menuButton.style.pointerEvents = "auto";
        } else {
            for(var i = 0; i<navMenuULanchorTags.length;i++){
                navMenuULanchorTags[i].style.opacity = value;
            }
            value = value + increment;
        }
    }, 1);
}

function fadeOutLinks() {
    menuButton.style.pointerEvents = "none";


    for(var i = 0; i<navMenuULanchorTags.length;i++){
        navMenuULanchorTags[i].style.opacity = 0;
    }
    
    setTimeout(slideOutMobileNavUL, 200)
}

function slideOutMobileNavUL(){
    var increment = 1;
    var slideleft = 100;
    
    var instance = window.setInterval(function() {
        if(slideleft < 0) {
            window.clearInterval(instance);
            menuButton.style.pointerEvents = "auto";
            toggleClass(navigationMenu, "closing");
        } else {
            
            navMenuUL.style.width = "calc(" + slideleft + "% - 40px)";
            slideleft = slideleft - increment;
        }
        
    }, 1);
}

window.addEventListener('resize', function(event){
    if(window.screen.width > 768) {
        if(checkClass(navigationMenu, 'open')) {
            toggleClass(navigationMenu, 'open');
        }
    } else {
        navMenuUL.style.width = "calc(0% - 40px)";
        for(var i = 0; i<navMenuULanchorTags.length;i++){
            navMenuULanchorTags[i].style.opacity = 0;
        }
    }
  });