const hero = document.querySelector(".hero");
const body = document.querySelector("body");


function shadow(e){
    let x= e.offsetX;
    let y= e.offsetY;
    const move=500;
    if(this !== e.target) {
        x+=e.target.offsetLeft;
        y+=e.target.offsetTop;
    }
    walkX=Math.round((move/body.offsetWidth * x) - (move/2));
    walkY=Math.round((move/body.offsetHeight * y ) -(move/2));

    console.log(walkY,walkX)
    hero.style.textShadow = `${walkX}px ${walkY}px 0 blue , 
                             ${-walkX}px ${walkY}px 0 yellow,
                             ${walkX}px ${-walkY}px 0 green,
                             ${-walkX}px ${-walkY}px 0 red`;
}

body.addEventListener("mousemove", shadow);