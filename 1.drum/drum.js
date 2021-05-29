function playsound(params) {
    const audio=document.querySelector(`audio[data-key="${params.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${params.keyCode}"]`);
    key.classList.add("playing");
    if(!audio)return;
    audio.currentTime=0;  //revind the audio without the audio was playing only one time 
    audio.play();
    key.addEventListener("transitionend",function name() {
        this.classList.remove("playing");
    })
}

function playsoundtouch() {
    const audio=document.querySelector(`audio[data-key="${this.getAttribute('data-key')}"]`);
    if(!audio)return;
    this.classList.add("playing");
    audio.currentTime=0;  //revind the audio without the audio was playing only one time 
    audio.play();
    this.addEventListener("transitionend",function name() {
        this.classList.remove("playing");
    })
}

window.addEventListener("keydown",playsound)

const keys=document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("click",playsoundtouch))