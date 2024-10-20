//create custom cursor el
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

//get cursor size
const cusrsorSize = cursor.offsetWidth;
console.log(cusrsorSize); 

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