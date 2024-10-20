//create custom cursor el
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);
cursor.style.boxShadow = 'rgba(77, 77, 77, 0.4) 0px 2px 8px 0px';

//get cursor size
const cusrsorSize = cursor.offsetWidth;

//update cursor position
document.addEventListener('mousemove', (e) => {
    //center cursor by subtracting half its size
    cursor.style.top = `${e.clientY - cusrsorSize / 2}px`; 
    cursor.style.left = `${e.clientX - cusrsorSize / 2}px`;
});


//handle hover/clickable elements
const handleHoverClick = (element, color, cursorSize) => {
    element.addEventListener('mouseenter', () => {
        cursor.style.backgroundColor = color; 
        cursor.style.width = `${cursorSize / 2}px`;  
        cursor.style.height = `${cursorSize / 2}px`; 
    });

    element.addEventListener('mouseleave', () => {
        cursor.style.backgroundColor = '#13CF93';  
        cursor.style.width = `${cursorSize}px`;  
        cursor.style.height = `${cursorSize}px`; 
        cursor.style.border = 'none';
    });
};


//get all elements with hover class
const hoverElements = document.querySelectorAll('.hover');

//apply new color when over hover elements
hoverElements.forEach((element) => {
    handleHoverClick(element, '#34a0a4', cusrsorSize);
});

//get all clickable elements
const clickableElements = document.querySelectorAll('a, button, input, [role="button"]');

//apply new color when over clickable elements
clickableElements.forEach((element) => {
    handleHoverClick(element, '#34a0a4', cusrsorSize);
});


//hide custom cursor in the mobile index and navbar section
const mobileSection = document.getElementById('mobileHome');
const mobileNav = document.getElementById('mobile-nav');

mobileSection.addEventListener('mouseenter', () => {
    cursor.style.display = 'none'; 
    document.body.style.cursor = 'none';
});

mobileSection.addEventListener('mouseleave', () => {
    cursor.style.display = 'block';
    document.body.style.cursor = '';
});

mobileNav.addEventListener('mouseenter', () => {
    cursor.style.display = 'none'; 
    document.body.style.cursor = 'none';
});

mobileNav.addEventListener('mouseleave', () => {
    cursor.style.display = 'block';
    document.body.style.cursor = '';
});

// Ensure the custom cursor is displayed by default
document.addEventListener('DOMContentLoaded', () => {
    cursor.style.display = 'block';
});