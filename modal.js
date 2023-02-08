//Modal Open and Close Functions 

// Modal for Card One
var modal = document.getElementById("modalWindowOne");

// Get the button that opens the modal
var btn = document.getElementById("cardOne");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Open modal on click
btn.onclick = function() {
  modal.style.display = "block";
}

// Close modal on click
span.onclick = function() {
  modal.style.display = "none";
}



// Modal for Card Two
var modalTwo = document.getElementById("modalWindowTwo");

var btnTwo = document.getElementById("cardTwo");

var spanTwo = document.getElementsByClassName("close")[1];

btnTwo.onclick = function() {
  modalTwo.style.display = "block";
}

spanTwo.onclick = function() {
  modalTwo.style.display = "none";
}


// Modal for Card Three
var modalThree = document.getElementById("modalWindowThree");

var btnThree = document.getElementById("cardThree");

var spanThree = document.getElementsByClassName("close")[2];

btnThree.onclick = function() {
  modalThree.style.display = "block";
}

spanThree.onclick = function() {
  modalThree.style.display = "none";
}


// Modal for Card Four
var modalFour = document.getElementById("modalWindowFour");

var btnFour = document.getElementById("cardFour");

var spanFour = document.getElementsByClassName("close")[3];

btnFour.onclick = function() {
  modalFour.style.display = "block";
}

spanFour.onclick = function() {
  modalFour.style.display = "none";
}


// Modal for Card Five
var modalFive = document.getElementById("modalWindowFive");

var btnFive = document.getElementById("cardFive");

var spanFive = document.getElementsByClassName("close")[4];

btnFive.onclick = function() {
  modalFive.style.display = "block";
}

spanFive.onclick = function() {
  modalFive.style.display = "none";
}


// Modal for Card Six
var modalSix = document.getElementById("modalWindowSix");

var btnSix = document.getElementById("cardSix");

var spanSix = document.getElementsByClassName("close")[5];

btnSix.onclick = function() {
  modalSix.style.display = "block";
}

spanSix.onclick = function() {
  modalSix.style.display = "none";
}
