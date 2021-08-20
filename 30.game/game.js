let moles=document.querySelectorAll(".mole");
let mole=document.querySelectorAll(".moles");
let board=document.querySelector(".score");
let score=0;
let speed=0;
let count=0;

setInterval(random,2000);

function random(){
    count++;
    DisplayScore();
    let n=Math.floor(Math.random() * 6);
    speed=10*score;
    let t=700-speed+Math.floor(Math.random() * 200);
    console.log(n,t);
    moveup(n,t);
}

function DisplayScore(){
    board.innerHTML=score+"/"+count+ ((score/count)>0.5 ? "🔥" : "🤬");
}

function AddToScore(){
    score++;
    DisplayScore();
}

async function moveup(i,t){
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
    moles[i].classList.add("moleup");
    await sleep(t);
    moles[i].classList.remove("moleup");
}

mole.forEach(element => {
    element.addEventListener("click", AddToScore);
});