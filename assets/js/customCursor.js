//create custom cursor el
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

//update cursor position
document.addEventListener('mousemove', (e) => {
    //subtract 10px to center cursor
    cursor.style.top = `${e.clientY - 15}px`; 
    cursor.style.left = `${e.clientX - 15}px`;
});


//handle hover/clickable elements
const handleHoverEffect = (element, color) => {
    element.addEventListener('mouseenter', () => {
        cursor.style.backgroundColor = color;
    });
    element.addEventListener('mouseleave', () => {
        cursor.style.backgroundColor = '#13CF93'; 
    });
};


//get all elements with hover class
const hoverElements = document.querySelectorAll('.hover');

//apply new color when over hover elements
hoverElements.forEach((element) => {
    handleHoverEffect(element, '#34a0a4');
});

// Get all clickable elements
const clickableElements = document.querySelectorAll('a, button, input, [role="button"]');

//apply new color when over clickable elements
clickableElements.forEach((element) => {
    handleHoverEffect(element, '#34a0a4');
});