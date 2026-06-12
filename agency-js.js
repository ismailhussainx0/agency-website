let services = document.getElementById("services");
let contact = document.getElementById("contact");



// hero height
let hero = document.querySelector(".bg-hero");
let heroHeight = hero.offsetHeight;




// hero btn 1 Get Started
let herobtn1 = document.getElementById("herobtn1");

herobtn1.addEventListener("click", function () {
    contact.scrollIntoView({ behavior: "smooth" })
});


// btn 2 Learn More 
let herobtn2 = document.getElementById("herobtn2");

herobtn2.addEventListener("click", function () {
    services.scrollIntoView({ behavior: "smooth" })
});



// navbar shadow event
let nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
    if (window.scrollY > heroHeight) {
        nav.classList.add("navbarshadow")
    } else {
        nav.classList.remove("navbarshadow");
    }
});


// stats top space
let stats = document.querySelector(".stats-bg");
let statsTopSpace = stats.offsetTop - 230;





// stats function
function statsBox(boxName, target, time, increment) {

    let currentNum = 0;

    let loop = setInterval(function () {
        currentNum += increment;
        boxName.innerText = currentNum + "+";

        if (currentNum >= target) {
            clearInterval(loop);
        }

    }, time)
};


// Happy Client
let happyClient = document.querySelector(".happyClientjs");

let counterHappyClient = false;
window.addEventListener("scroll", function () {
    if (window.scrollY > statsTopSpace && !counterHappyClient) {
        counterHappyClient = true
        statsBox(happyClient, 500, 5, 1)
    }
});



//stats revenue box
let revenue = document.querySelector(".revenuejs");

let counterRevenue = false;
window.addEventListener("scroll", function () {
    if (window.scrollY > statsTopSpace && !counterRevenue) {
        counterRevenue = true;
        statsBox(revenue, 100000, 40, 1000)
    }
});


//stats experience box
let experience = document.querySelector(".experiencejs");

let counterExperience = false;
window.addEventListener("scroll", function () {
    if (window.scrollY > statsTopSpace && !counterExperience) {
        counterExperience = true;
        statsBox(experience, 5, 700, 1)
    }
});


//stats Project done box
let projectDone = document.querySelector(".projectDonejs");

let counterProjectDone = false;
window.addEventListener("scroll", function () {
    if (window.scrollY > statsTopSpace && !counterProjectDone) {
        counterProjectDone = true;
        statsBox(projectDone, 100, 40, 1)
    }
});


// contact form 

let contactForm = document.querySelector(".contact-form");
let contactName = document.querySelector(".contact-name");
let contactEmail = document.querySelector(".contact-email");

// submit message 
let submitMessage = document.querySelector(".submit-message")

console.log(submitMessage)


contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    contactName.value = "";
    contactEmail.value = "";

    submitMessage.style.display = "block";

    setTimeout(function(){
        submitMessage.style.display = "none";
    }, 2000)
});

