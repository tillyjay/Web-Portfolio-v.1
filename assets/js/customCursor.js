//create custom cursor el
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);
cursor.style.boxShadow = 'rgba(77, 77, 77, 0.4) 0px 2px 8px 0px';

//get cursor size
const cursorSize = cursor.offsetWidth;

//flag to track if cursor is inside mobileHome section
let isInMobileHome = false;

//update cursor position
document.addEventListener('mousemove', (e) => {
    //only update position if not inside mobileHome
    if (!isInMobileHome) { 
        //center cursor by subtracting half its size
        cursor.style.top = `${e.clientY - cursorSize / 2}px`; 
        cursor.style.left = `${e.clientX - cursorSize / 2}px`;
        //ensure cursor is visible outside mobileHome
        cursor.style.display = 'block'; 
    }
});

//handle hover/clickable elements
const handleHoverClick = (element, color, cursorSize) => {
    element.addEventListener('mouseenter', () => {
        cursor.style.backgroundColor = color; 
        cursor.style.width = `${cursorSize / 2.5}px`;  
        cursor.style.height = `${cursorSize / 2.5}px`;           
    });

    element.addEventListener('mouseleave', () => {
        cursor.style.backgroundColor = '#13CF93';  
        cursor.style.width = `${cursorSize}px`;  
        cursor.style.height = `${cursorSize}px`; 
    });
};

//get all elements with hover class
const hoverElements = document.querySelectorAll('.hover');

//apply new color when over hover elements
hoverElements.forEach((element) => {
    handleHoverClick(element, '#34a0a4', cursorSize);
});

//get all clickable elements
const clickableElements = document.querySelectorAll('a, button, input, [role="button"]');

//apply new color when over clickable elements
clickableElements.forEach((element) => {
    handleHoverClick(element, '#34a0a4', cursorSize);
});

//hide custom cursor in mobile index and navbar section
const mobileHome = document.getElementById('mobileHome');
const mobileNav = document.getElementById('mobile-nav');

//show and hide cursor
const hideCursor = () => {
    cursor.style.display = 'none'; 
    document.body.style.cursor = 'none';
    isInMobileHome = true; 
};

const showCursor = () => {
    cursor.style.display = 'block'; 
    document.body.style.cursor = '';
    isInMobileHome = false; 
};

//event listeners for mobile section
if (mobileHome) {
    mobileHome.addEventListener('mouseenter', hideCursor);
    mobileHome.addEventListener('mouseleave', showCursor);
    mobileHome.addEventListener('click', hideCursor);
}

//event listeners for mobile nav
if (mobileNav) {
    mobileNav.addEventListener('mouseenter', hideCursor);
    mobileNav.addEventListener('mouseleave', showCursor);
    mobileNav.addEventListener('click', hideCursor);
}

//initially hide the cursor
document.addEventListener('DOMContentLoaded', () => {
    cursor.style.display = 'none';
});
