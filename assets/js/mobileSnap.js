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
    console.log('workSnap triggered');
    if ($(window).width() > 650) {
        window.location = "../index.html#workSection";
        console.log(window.location.pathname);
    }
};


//check which page is currently open and apply right snap
window.onresize = () => {
    console.log('Window resized');
    if (currentPage.includes('aboutMe')) {
        aboutSnap();
    } else if (currentPage.includes('contact')) {
        contactSnap();
    } else if (currentPage.includes('resume')) {
        resumeSnap();
    } else if (currentPage.includes('work')) {
        workSnap();
    } 
};


//initial check when page loads
if (currentPage.includes('aboutMe')) {
    aboutSnap();
} else if (currentPage.includes('contact')) {
    contactSnap();    
} else if (currentPage.includes('resume')) {
    resumeSnap();
} else if (currentPage.includes('work')) {
    workSnap();
} 


