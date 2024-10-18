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


document.addEventListener('DOMContentLoaded', () => {
    //select elements
    const links = document.querySelectorAll('.navbar .menu-items a');
    const checkbox = document.querySelector('.nav-container input[type="checkbox"]');

    //add event listener to each link
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        //prevent default link behavior (immediate navigation)
        e.preventDefault();

        //start closing menu by unchecking checkbox
        checkbox.checked = false;

        //wait for transition to finish before navigating
        setTimeout(() => {
          //after menu has closed (after 500ms, which matches the transition duration)
          //redirect to link's href
          window.location.href = link.href;  
          //match timeout with duration of transition in 'menu-items'
        }, 400);  
      });
    });
  });