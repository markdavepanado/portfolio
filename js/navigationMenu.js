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
var programAnimaCounter = [];
var awardAnimaCounter = [];

for(var pac = 0; pac < awardDetails.length; pac++){
    programAnimaCounter[pac] = 0;
}

for(var aac = 0; aac < awardDetails.length; aac++){
    awardAnimaCounter[aac] = 0;
}

var workExpAnimaCounter = 0;
var lwDetailsAnimaCounter = 0;
var pastWorkAnimaCounter = [];

for(var pwc = 0; pwc < pastWork.length; pwc++){
    pastWorkAnimaCounter[pwc] = 0;
}

var skillsAnimaCounter = 0;
var sdAnimaCounter = [];

for(var sdc = 0; sdc < skillsDetails.length; sdc++){
    sdAnimaCounter[sdc] = 0;
}

var offsetDecreaseValue = .60;
var scrollEnded = -1;
var isScrollStop = true;

highlightActiveMenu();
main.addEventListener('scroll' || 'wheel' || 'DOMMouseScroll' || 'mousewheel', highlightActiveMenu);
menuButton.addEventListener('click', toggleMenuMobile);



function suvlAnima() {
    let fromTop = Math.round(main.scrollTop + main.offsetTop);
    var aboutMeOffSetTopHalf = Math.round(aboutMe.offsetTop - (main.offsetHeight * offsetDecreaseValue));
    var aboutMeOffSetHeight = Math.round(aboutMe.offsetHeight + aboutMe.offsetTop);

        if(
            aboutMeOffSetTopHalf <= fromTop && aboutMeOffSetHeight > fromTop
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

// ABOUT ME

function personaldAnima() {
    let fromTop = Math.round(main.scrollTop + main.offsetTop);
    var advancePDoffSetTopHalf = Math.round((aboutMe.offsetTop + personalDetails.offsetTop + getPaddingTop(personalDetails)) - (main.offsetHeight * offsetDecreaseValue));
    var advancePDoffSetTopHeight = Math.round(aboutMe.offsetTop + personalDetails.offsetTop + personalDetails.offsetHeight - getPaddingTop(personalDetails));

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

function programdAnima(element, index) {
    let fromTop = Math.round(main.scrollTop + main.offsetTop);
    var advanceProgramDoffSetTopHalf = Math.round((aboutMe.offsetTop + element.offsetTop + getPaddingTop(element)) - (main.offsetHeight * offsetDecreaseValue));
    var advanceProgramDoffSetTopHeight = Math.round(aboutMe.offsetTop + element.offsetTop + getPaddingTop(element));
        if(
            advanceProgramDoffSetTopHalf <= fromTop && advanceProgramDoffSetTopHeight > fromTop
        ) {
            programAnimaCounter[index]++;
            
        } else {
            programAnimaCounter[index] = 0;
        }

        if(programAnimaCounter[index] == 1) {
            slideRightPDLineHorizontal(element);
        } else if (programAnimaCounter[index] == 0) {
            clearProgramDetails(element);
        }
}

function awarddAnima(element, index) {
    let fromTop = Math.round(main.scrollTop + main.offsetTop);
    var advanceAwardDoffSetTopHalf = Math.round((aboutMe.offsetTop + element.offsetTop + getPaddingTop(element)) - (main.offsetHeight * offsetDecreaseValue));
    var advanceAwardDoffSetTopHeight = Math.round(aboutMe.offsetTop + element.offsetTop + getPaddingTop(element));

        if(
            advanceAwardDoffSetTopHalf <= fromTop && advanceAwardDoffSetTopHeight > fromTop
        ) {
            awardAnimaCounter[index]++;
            
            
        } else {
            awardAnimaCounter[index] = 0;
        }

        if(awardAnimaCounter[index] == 1) {
            slideRightADLineHorizontal(element);
        } else if (awardAnimaCounter[index] == 0) {
            clearAwardDetails(element)
        }
}

// WORK EXPERIENCE
function workExpAnima() {
    let fromTop = Math.round(main.scrollTop + main.offsetTop);
    var workExpOffSetTopHalf = Math.round(workExperience.offsetTop - (main.offsetHeight * offsetDecreaseValue));
    var workExpOffSetHeight = Math.round(workExperience.offsetHeight + workExperience.offsetTop);

        if(
            workExpOffSetTopHalf <= fromTop && workExpOffSetHeight > fromTop
        ) {
            workExpAnimaCounter++;
        } else {
            workExpAnimaCounter = 0
        }
        
        if(workExpAnimaCounter == 1) {
            slideUpWEvLine();
        } else if(workExpAnimaCounter == 0) {
            clearSlideUpWEvLine();
        }
}

function lwDetailsAnima() {
    let fromTop = Math.round(main.scrollTop + main.offsetTop);
    var latestWorkoffSetTopHalf = Math.round((workExperience.offsetTop + latestWork.offsetTop + getPaddingTop(latestWork))  - (main.offsetHeight * offsetDecreaseValue));
    var latestWorkoffSetTopHeight = Math.round(workExperience.offsetTop + latestWork.offsetTop + getPaddingTop(latestWork));
        if(
            latestWorkoffSetTopHalf <= fromTop && latestWorkoffSetTopHeight > fromTop
        ) {
            lwDetailsAnimaCounter++;
            
        } else {
            lwDetailsAnimaCounter = 0;
        }

        if(lwDetailsAnimaCounter == 1) {
            setTimeout(slideRightLWlinehorizontal, 500);
        } else if (lwDetailsAnimaCounter == 0) {
            clearLatestWork();
        }
}

function pastWorkAnima(element, index) {
    let fromTop = Math.round(main.scrollTop + main.offsetTop);
    var advancepastWorkoffSetTopHalf = Math.round((workExperience.offsetTop + element.offsetTop + getPaddingTop(element)) - (main.offsetHeight * offsetDecreaseValue));
    var advancepastWorkoffSetTopHeight = Math.round(workExperience.offsetTop + element.offsetTop + getPaddingTop(element));

        if(
            advancepastWorkoffSetTopHalf <= fromTop && advancepastWorkoffSetTopHeight > fromTop
        ) {
            pastWorkAnimaCounter[index]++;
        } else {
            pastWorkAnimaCounter[index] = 0;
        }

        if(pastWorkAnimaCounter[index] == 1) {
            slideRightPWLineHorizontal(element);
        } else if (pastWorkAnimaCounter[index] == 0) {
            clearPastWork(element);
        }
}

// SKILLS

function skillsAnima() {
    let fromTop = Math.round(main.scrollTop + main.offsetTop);
    var skillsOffSetTopHalf = Math.round(skills.offsetTop - (main.offsetHeight * offsetDecreaseValue));
    var skillsOffSetHeight = Math.round(skills.offsetHeight + skills.offsetTop);

        if(
            skillsOffSetTopHalf <= fromTop && skillsOffSetHeight > fromTop
        ) {
            skillsAnimaCounter++;
        } else {
            skillsAnimaCounter = 0
        }
        
        if(skillsAnimaCounter == 1) {
            slideUpSvLine();
        } else if(skillsAnimaCounter == 0) {
            clearSlideUpSvLine();
        }
}

function skillsDetailsAnima(element, index) {
    let fromTop = Math.round(main.scrollTop + main.offsetTop);
    var advanceSDoffSetTopHalf = Math.round((skills.offsetTop + element.offsetTop + getPaddingTop(element))  - (main.offsetHeight * offsetDecreaseValue));
    var advanceSDoffSetTopHeight = Math.round(skills.offsetTop + element.offsetTop + getPaddingTop(element));

        if(
            advanceSDoffSetTopHalf <= fromTop && advanceSDoffSetTopHeight > fromTop
        ) {
            sdAnimaCounter[index]++;
        } else {
            sdAnimaCounter[index] = 0;
        }

        if(sdAnimaCounter[index] == 1) {
            if(!isScrollStop) {
            slideRightSLineHorizontal(element, index);
            }
        } else if (sdAnimaCounter[index] == 0) {
            clearSkillsDetails(element, index);
        }
}

// HIRE ME

function fullHireMeAnima() {
    let fromTop = Math.round(main.scrollTop + main.offsetTop);
    
    if(Math.round(hireme.offsetTop) <= fromTop && Math.round(hireme.offsetTop + hireme.offsetHeight) > fromTop) 
    {
        fadeInHMP();   
    } else {
        clearHManima();
    }
}

function highlightActiveMenu() {
    let navigationLinks = document.querySelectorAll('nav ul li a');
    let fromTop = main.scrollTop + main.offsetTop + 5;
    counter = 0;

    suvlAnima();
    personaldAnima();

    for(var i = 0; i < programDetails.length; i++) {
        programdAnima(programDetails[i], i);
    }

    for(var a = 0; a < awardDetails.length; a++) {
        awarddAnima(awardDetails[a], a);
    }

    // WORK EXP
    workExpAnima();
    lwDetailsAnima();

    for(var b = 0; b < pastWork.length; b++) {
        pastWorkAnima(pastWork[b], b);
    }

    
    // SKILLS
    skillsAnima();

    for(var c = 0; c < skillsDetails.length; c++) {
        skillsDetailsAnima(skillsDetails[c], c);
    }

    if (scrollEnded != -1) {
        clearTimeout(scrollEnded);
        isScrollStop = true;
    } 

    scrollEnded = window.setTimeout(function() {
        isScrollStop = false;
        
        for(var sdcTwo = 0; sdcTwo < skillsDetails.length; sdcTwo++){
            sdAnimaCounter[sdcTwo] = 0;
        }

        for(var d = 0; d < skillsDetails.length; d++) {
            skillsDetailsAnima(skillsDetails[d], d);
        }

    }, 250);

    // HIRE ME
    fullHireMeAnima();
    
    
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

// PADDING LEFT RIGHT
function getPaddingXaxis(element) {
    return parseFloat(window.getComputedStyle(element).paddingLeft.replace(/\D/g,'')) + parseFloat(window.getComputedStyle(element).paddingRight.replace(/\D/g,''));
}

// PADDING TOP BOTTOM
function getPaddingYaxis(element) {
    return parseFloat(window.getComputedStyle(element).paddingTop.replace(/\D/g,'')) + parseFloat(window.getComputedStyle(element).paddingBottom.replace(/\D/g,''));
}

// PADDING TOP
function getPaddingTop(element) {
    return parseFloat(window.getComputedStyle(element).paddingTop.replace(/\D/g,''));
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