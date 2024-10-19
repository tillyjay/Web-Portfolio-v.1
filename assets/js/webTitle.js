
/* Animate SVG Web Font */
const setTextAnimation = (delay, duration, strokeWidth, timingFunction, strokeColor, repeat) => {
    let paths = document.querySelectorAll("path");
    let mode = repeat ? 'infinite' : 'forwards';
    
    paths.forEach((path, i) => {
        const length = path.getTotalLength();
        path.style.strokeDashoffset = `${length}px`;
        path.style.strokeDasharray = `${length}px`;
        path.style.strokeWidth = `${strokeWidth}px`;
        path.style.stroke = strokeColor;
        path.style.animation = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
        path.style.animationDelay = `${i * delay}s`;
    });
};

setTextAnimation(0.1, 2.3, 2, 'linear', '#13cf93', false);
