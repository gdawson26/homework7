// check that js is connected properly
console.log("Hello World!");

// download button
const downloadButton = document.getElementById("download-button");


// user name variable
let name = prompt("What is your name?");

// my name variable
const myName = "Grace";

// download resume bool
let hasDownloadedResume = false;

// function for initial download
function download() {
    if(!hasDownloadedResume) {
        // show alert if first time downloading
        alert("Your resume is downloaded successfully!");
        // make the variable true so the alert doesn't show up again
        hasDownloadedResume = true;
    }
}

// download when clicked
if (downloadButton) {
        downloadButton.addEventListener('click', download);
    }

// personalized greeting
function showGreeting(userName) {
    return("Hello, my name is " + myName + "! Welcome to my portfolio, " + userName + ".")
}
const greetingBox = document.getElementById('greeting');

if (greetingBox) {
        greetingBox.textContent = showGreeting(name);
    }

// date calculation function
function daysUntilDeadline(endDate) {
    let currentDate = new Date();
    
    let end = new Date(endDate)

    let timeDifference = end - currentDate;
    
    let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return daysDifference;
}

let endDate = new Date(2026, 10, 30);

let daysLeft = daysUntilDeadline(endDate);

console.log("Days left: " + daysLeft);

const countdownElement = document.getElementById('project-countdown');

if (countdownElement) {
        countdownElement.textContent = daysLeft + " days left";
}