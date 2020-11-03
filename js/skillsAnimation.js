var skills = document.getElementById('skills');
var sLineVertical = document.getElementsByClassName('skills-line-vertical')[0];
var skillsDetails = Array.from(document.getElementsByClassName('skills-details'));

function slideUpSvLine() {
    sLineVertical.style.transition = "initial";
    var skillsHeight = Math.round(skills.getBoundingClientRect().height);
    var translateYpixels = getCurrentTranslateY(sLineVertical);
    var translateYpercentage = Math.round((translateYpixels / skillsHeight) * 100);

    var decrement = 1;
    var value = translateYpercentage;

    var instance = window.setInterval(function() {
        if(value < 0) {
            window.clearInterval(instance);
            sLineVertical.style.transform = "initial";
            
        } else {
            sLineVertical.style.transform = "translateY(" + value +"%)";
            value = value - decrement;
        }
    }, 1);
}

function clearSlideUpSvLine() {
    sLineVertical.style.transition = "all 3s";
    sLineVertical.style.transform = "translateY(110%)";
}

function slideRightSLineHorizontal(element) {
    var sLineHorizontal = element.getElementsByClassName("line-horizontal")[0];
    sLineHorizontal.style.transition = "initial";
    var sLineHorizontalWidth = Math.round(sLineHorizontal.getBoundingClientRect().width);
    var translateXpixels = getCurrentTranslateX(sLineHorizontal);
    var translateXpercentage = Math.round((translateXpixels / sLineHorizontalWidth) * 100) + 1;

    var decrement = 2;
    var value = translateXpercentage;

    var instance = window.setInterval(function() {
        if(value > 0) {
            window.clearInterval(instance);
            sLineHorizontal.style.transform = "initial";
            slideInSinformation(element);
        } else {
            sLineHorizontal.style.transform = "translateX(" + value + "%)";
            value = value + decrement;
        }
    }, 5);
}

function slideInSinformation(element) {
    var sInformation = element.getElementsByClassName("skills-information")[0];
    sInformation.style.transition = "initial";
    var bodyPaddingXaxis = getPaddingXaxis(document.body);
    var skillsDetailsWidth = Math.round(element.getBoundingClientRect().width) + bodyPaddingXaxis + 1;
    var translateXpixels = getCurrentTranslateX(sInformation);
    var translateXpercentage = Math.round((translateXpixels / skillsDetailsWidth) * 100) + getPaddingXaxis(skills);

    var decrement = 2;
    var value = translateXpercentage;
    var instance = window.setInterval(function() {
        if(value < 0) {
            window.clearInterval(instance);
            sInformation.style.transform = "initial";
            animateSinformation(element);
        } else {
            sInformation.style.transform = "translateX(" + value +"vw)";
            value = value - decrement;
        }
    }, 1);
}

function animateSinformation(element) {
    var siPieChart = element.getElementsByClassName("pie-chart")[0];
    var skillRate = element.getElementsByClassName("skill-rate")[0];
    var skillRateDesc = element.getElementsByClassName("skill-rate-desc")[0];
    var skillRateValue = skillRate.innerText;

    var increment = 1;
    var value = 0;
    var instance = window.setInterval(function() {
        if(value >= skillRateValue) {
            window.clearInterval(instance);
            skillRate.innerText = skillRateValue;
            skillRateDesc.innerText = skillRateValue;
            siPieChart.style.backgroundImage = "conic-gradient(var(--strong-color)" + value * 36 + "deg, var(--primary-color) 0)"
        } else {
            skillRate.innerText = value;
            skillRateDesc.innerText = value;
            siPieChart.style.backgroundImage = "conic-gradient(var(--strong-color)" + value * 36 + "deg, var(--primary-color) 0)"
            value = value + increment;
        }
    }, 100);
}

function clearSkillsDetails(element) {
    element.getElementsByClassName("line-horizontal")[0].style.transition = "all 500ms";
    element.getElementsByClassName("skills-information")[0].style.transition = "all 250ms";
    element.getElementsByClassName("line-horizontal")[0].style.transform = "translateX(-110%)";
    element.getElementsByClassName("skills-information")[0].style.transform = "translateX(100vw)";
    element.getElementsByClassName("skill-rate-desc")[0].innerText = 0;
    element.getElementsByClassName("pie-chart")[0].style.backgroundImage = "conic-gradient(var(--strong-color) 0deg, var(--primary-color) 0)";
}

// PADDING LEFT RIGHT
function getPaddingXaxis(element) {
    return parseFloat(window.getComputedStyle(element).paddingLeft.replace(/\D/g,'')) + parseFloat(window.getComputedStyle(element).paddingRight.replace(/\D/g,''));
}