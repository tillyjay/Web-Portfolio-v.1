//wait for DOM to fully load before running script
document.addEventListener("DOMContentLoaded", () => {
    const backToTopBtn = document.getElementById("backToTopBtn");

    //show button when user scrolls down 100px or more
    window.addEventListener("scroll", () => {
        if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
            //show button
            backToTopBtn.style.display = "block"; 
        } else {
            //hide button
            backToTopBtn.style.display = "none"; 
        }
    });

    //scroll to top smoothly when button is clicked
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    });
});
