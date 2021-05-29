sec_arm = document.querySelector(".sec");
min_arm = document.querySelector(".min");
hour_arm = document.querySelector(".hour");
function setTime() {
    const now = new Date();
    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hour = now.getHours();
    sec_arm.style.transform = `rotateZ(${6 * sec + 90}deg)`;
    min_arm.style.transform = `rotateZ(${6 * min + 90}deg)`;
    hour_arm.style.transform = `rotateZ(${30 * hour + 90}deg)`;
}
setInterval(setTime, 1000);

zoom_in = document.querySelector("#in");
zoom_out = document.querySelector("#out");
zoom = 1;

zoom_in.addEventListener("click", function name(params) {
    zoom += 0.1;
    document.querySelector(".clock").style.transform = `scale(${zoom})`;
})
zoom_out.addEventListener("click", function name(params) {
    if(zoom<0.4)
    return;
    zoom -= 0.1;
    document.querySelector(".clock").style.transform = `scale(${zoom})`;
})