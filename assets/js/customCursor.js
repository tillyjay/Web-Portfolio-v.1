//create custom cursor el
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

//update cursor position
document.addEventListener('mousemove', (e) => {
    //subtract 10px to center cursor
    cursor.style.top = `${e.clientY - 10}px`; 
    cursor.style.left = `${e.clientX - 10}px`;
});

//detect clickable/hover elements and change cursor color 
const clickableElements = document.querySelectorAll('a, button, input, [role="button"]');

//change colour to dark green when hovering over clickable elements
clickableElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
        cursor.style.backgroundColor = '#097754'; 
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.backgroundColor = '#13CF93'; 
    });
});

