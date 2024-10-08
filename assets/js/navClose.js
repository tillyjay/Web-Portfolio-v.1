//wait until page is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    //find checkbox that controls the mobile menu
    const menuCheckbox = document.querySelector('.navbar input[type="checkbox"]');
    
    //if checkbox exists, close the menu (uncheck it) on page load
    if (menuCheckbox) {
        menuCheckbox.checked = false;
    }
});