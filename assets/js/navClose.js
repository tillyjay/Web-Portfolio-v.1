
document.addEventListener('DOMContentLoaded', function () {
    const menuCheckbox = document.querySelector('#mobile-menu-checkbox');

    //ensure menu is closed when page loads or when navigating back/forward
    if (menuCheckbox && menuCheckbox.checked) {
        menuCheckbox.checked = false;  //uncheck checkbox to close menu
    }

});

//close menu when navigating between pages
window.addEventListener('beforeunload', function () {
    const menuCheckbox = document.querySelector('#mobile-menu-checkbox');
    if (menuCheckbox && menuCheckbox.checked) {
        menuCheckbox.checked = false;  //uncheck checkbox to close menu
    }
});