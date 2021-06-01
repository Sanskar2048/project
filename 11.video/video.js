const video=document.querySelector(".player video");
const PlayButton=document.querySelector(".play-button");
const skips=document.querySelectorAll('[data-skip]');
const slider=document.querySelectorAll('.slider')
const progressbar= document.querySelector('.progress-filler');
const progressframe= document.querySelector('.progress');
const player=document.querySelector(".player");
const fullscreen=document.querySelector(".fullscreen");

function toggleplay() {
    video.paused ? video.play() : video.pause();
}

function toggleChange() {
    PlayButton.textContent = video.paused ?"▶": "||";
}

function skipit() {
    video.currentTime +=parseFloat(this.dataset.skip);
}

function sliderupdate() {
    video[this.name]= this.value;
}

function videotimelap() {
    const a=(video.currentTime/video.duration)*100;
    progressbar.style.width=`${a}%`;
}

function movetimelap(e) {
    video.currentTime=(e.offsetX/progressframe.offsetWidth)*video.duration;
}
let previouswidth=video.offsetWidth;
// let previousheight=video.offsetHeight;
function onfullscreen() {
    // let heightof = window.innerHeight==video.offsetHeight? previousheight : window.innerHeight;
    // video.style.height=`${heightof}px`;
    let widthof = window.innerWidth==video.offsetWidth ? previouswidth : window.innerWidth ;
    video.style.width=`${widthof}px`;
}

let mousedown =false;
PlayButton.addEventListener("click", toggleplay);
video.addEventListener("play", toggleChange);
video.addEventListener("pause", toggleChange)
video.addEventListener("click", toggleplay);
video.addEventListener("timeupdate", videotimelap);
skips.forEach(button => button.addEventListener("click", skipit));
slider.forEach(slide=>slide.addEventListener("change", sliderupdate));
slider.forEach(slide=>slide.addEventListener("mousemove", sliderupdate));
progressframe.addEventListener("click", movetimelap);
player.addEventListener("mousemove", (e) =>{
    if(!mousedown) return;
    movetimelap(e);
});
progressframe.addEventListener("mousedown", () => mousedown=true);
progressframe.addEventListener("mouseup", () => mousedown=false);
fullscreen.addEventListener("click", onfullscreen);