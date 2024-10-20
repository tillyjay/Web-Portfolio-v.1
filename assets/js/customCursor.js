//create custom cursor el
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);
cursor.style.boxShadow = 'rgba(77, 77, 77, 0.4) 0px 2px 8px 0px';

//initially hide cursor
cursor.style.display = 'hidden';

//get cursor size
const cursorSize = cursor.offsetWidth;

//flag to track if mouse has moved
let cursorVisible = false;

//update cursor position
document.addEventListener('mousemove', (e) => {
    //show the cursor on first move
    if (!cursorVisible) {
        cursor.style.display = 'block';
        cursorVisible = true;
    }
    
    //center cursor by subtracting half its size
    cursor.style.top = `${e.clientY - cursorSize / 2}px`; 
    cursor.style.left = `${e.clientX - cursorSize / 2}px`;
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

//hide custom cursor in the mobile index and navbar section
const mobileHome = document.getElementById('mobileHome');
const mobileNav = document.getElementById('mobile-nav');

//show and hide cursor 
const hideCursor = () => {
    cursor.style.display = 'none'; 
    document.body.style.cursor = 'none';
};

const showCursor = () => {
    cursor.style.display = 'none'; 
    document.body.style.cursor = '';
};

//event listeners for mobile section
mobileHome.addEventListener('mouseenter', hideCursor);
mobileHome.addEventListener('mouseleave', showCursor);
mobileHome.addEventListener('click', hideCursor);

//event listeners for mobile nav
mobileNav.addEventListener('mouseenter', hideCursor);
mobileNav.addEventListener('mouseleave', showCursor);
mobileNav.addEventListener('click', hideCursor);

//ensure custom cursor is displayed by default
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        cursor.style.display = 'none';
    }, 0);
});

