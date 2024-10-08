// if mobile site surpasses certain size, snap to desktop version

window.onresize = function indexSnap() {
    if ($(window).width() > 650) {
        window.location = "/index.html#resumeSection"
    }
  }

indexSnap();