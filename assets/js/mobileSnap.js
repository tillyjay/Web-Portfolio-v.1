//detect current page using window.location.pathname
const currentPage = window.location.pathname;


//about Snap
const aboutSnap = () => {
    if ($(window).width() > 650) {
        window.location = "../index.html#aboutSection";
    }
};

//contact Snap
const contactSnap = () => {
    if ($(window).width() > 650) {
        window.location = "../index.html#contactSection";
    }
};

//resume Snap
const resumeSnap = () => {
    if ($(window).width() > 650) {
        window.location = "../index.html#resumeSection";
    }
};

//work Snap
const workSnap = () => {
    if ($(window).width() > 650) {
        window.location = "../index.html#workSection";
        console.log(window.location.pathname);
    }
};


//check which page is currently open and apply right snap
window.onresize = () => {
    if (currentPage.includes('aboutMe.html')) {
        aboutSnap();
    } else if (currentPage.includes('contact.html')) {
        contactSnap();
    } else if (currentPage.includes('resume.html')) {
        resumeSnap();
    } else if (currentPage.includes('work.html')) {
        workSnap();
    } 
};


//initial check when page loads
if (currentPage.includes('aboutMe.html')) {
    aboutSnap();
} else if (currentPage.includes('contact.html')) {
    contactSnap();    
} else if (currentPage.includes('resume.html')) {
    resumeSnap();
} else if (currentPage.includes('work.html')) {
    workSnap();
} 


