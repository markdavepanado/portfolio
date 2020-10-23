const TypeWriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
};

// Type Method
TypeWriter.prototype.type = function() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fulltxt = this.words[current].replace(/<\/?[^>]+(>|$)/g, "");
 
    //Check if deleting
    if (this.isDeleting) {
        // Remove char
        this.txt = fulltxt.substring(0, this.txt.length - 1);
    } else {
        // Add char
        this.txt = fulltxt.substring(0, this.txt.length + 1);
    }
    
    this.txtElement.innerHTML = `<span class="typewriter">${this.txt}</span>`;

    // Initial Type Speed
    // let typeSpeed = 100;
    let typeSpeed = 50;

    if (this.isDeleting) {
        typeSpeed /= 2;
    }

    // if word is complete
    if (!this.isDeleting && this.txt === fulltxt) {
        // Make pause at end
        typeSpeed = this.wait;
        this.txtElement.innerHTML = `<span class="typewriter">${this.words[current]}</span>`;
        // Set delete to true
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
};

// // Init On DOM Load
// document.addEventListener("DOMContentLoaded", myTypeWriterInit);

//Init App
function myTypeWriterInit() {
    const txtElement = document.querySelector(".typewriter-container");
    // const words = JSON.parse(txtElement.getAttribute("data-words"));
    const words = ["<b>Simple</b> is the hardest to achieve<b>.</b>", "This is pure <b>HTML</b>, <b>CSS</b> and <b>Javascript</b>", "<b>Scroll down</b> for more info<b>!</b>"];
    // const wait = txtElement.getAttribute("data-wait");
    const wait = 3000;

    //Init TypeWriter
    new TypeWriter(txtElement, words, wait);

    setInterval(() => {
        toggleClass(txtElement.querySelector('.typewriter'), 'blink');
    }, 500);
}

// add and remove class
function toggleClass(element, myClass) {
    var classes = element.className.split(" ");
    var i = classes.indexOf(myClass);

  if (i >= 0)
    classes.splice(i, 1);
  else
    classes.push(myClass);
    element.className = classes.join(" ");
}