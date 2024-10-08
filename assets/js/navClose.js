
//when the page loads, ensure the navbar is closed
window.onload = function() {
    var navbarCheckbox = document.querySelector('.checkbox');
    if (navbarCheckbox) {
        navbarCheckbox.checked = false;  
    }
}