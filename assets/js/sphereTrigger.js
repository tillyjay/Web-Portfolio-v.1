//wait for DOM content to fully load
document.addEventListener('DOMContentLoaded', () => {
    //select ballDiv elements
    const balls = document.querySelectorAll('.ballDiv');

    //create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                //add 'visible' class when element in view
                entry.target.classList.add('visible');

                //unobserve element after it becomes visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        //trigger when 10% of ballDiv is visible
        threshold: 0.1 
    });

    //setTimeout to delay start of observation
    setTimeout(() => {
        //observe each ballDiv ele
        balls.forEach(ball => {
            observer.observe(ball);
        });
        //delay for 2 seconds 
    }, 2000); 
});
