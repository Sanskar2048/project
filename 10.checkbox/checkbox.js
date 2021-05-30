let min,max,count;
let activate=false;
function activateit(e) {
    if(e.keyCode==16){
        activate=true;
        dis=[0,0];
        count=0;
    }
}
function deactivateit(e) {
    if(e.keyCode==16){
        activate=false;
    }
}
items=[...document.querySelectorAll(".checkbox")];

function selectit() {
    if(activate==false) return;
    let a=items.findIndex(listItem => listItem.dataset.index==this.dataset.index);
    dis[count%2]=a;
    count++;
    if(count%2==0) check(dis[0],dis[1])
}
window.addEventListener("keydown", activateit);
window.addEventListener("keyup", deactivateit);
items.forEach( item => item.addEventListener("click", selectit) );

function check(a,b) {
    if(a>b){
        temp=a;
        a=b;
        b=temp;
    }
    for(i=a+1;i<b;i++){
        items[i].click();
    }
}