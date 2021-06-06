let sect = Array.from(document.querySelectorAll("[data-time]")).reduce((sum,item)=>{
    [a,b]=item.dataset.time.split(":").map(parseFloat);
    sec=a*60+b;
    sum+=sec;
    console.log(item.dataset.time);
    return sum;
},0);

const hour=Math.floor(sect/3600);
sect%=3600;
const min=Math.floor(sect/60);
sect%=60;
console.table(hour,min,sect);


