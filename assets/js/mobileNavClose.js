document.addEventListener('DOMContentLoaded', () => {
    const menuCheckbox = document.querySelector('#mobile-menu-checkbox');

    //ensure menu is closed when page loads or when navigating back/forward
    if (menuCheckbox && menuCheckbox.checked) {
        // Uncheck checkbox to close menu
        menuCheckbox.checked = false;
    }
});

//close menu when navigating between pages
window.addEventListener('beforeunload', () => {
    const menuCheckbox = document.querySelector('#mobile-menu-checkbox');
    if (menuCheckbox && menuCheckbox.checked) {
        //uncheck checkbox to close menu
        menuCheckbox.checked = false;
    }
});
