const addbutton = document.querySelector(".submit-button");
const inputbox = document.querySelector(".input-box");
const form = document.querySelector(".form-box");
const listbox = document.querySelector(".list-item");
let checkboxs= document.querySelectorAll('.checkbox-list');
let listitem= document.querySelectorAll('.item-value');

const items= JSON.parse(localStorage.getItem('items')) || [];

function additem(e) {
    e.preventDefault();
    if(inputbox.value=="") return;
    const item={
        name: inputbox.value,
        state: false
    }
    this.reset();
    items.push(item);
    displayItem(items);
    localStorage.setItem('items',JSON.stringify(items));
}

// function deleteit() {
//     // console.log( items.slice(0,this.dataset.index))
//     // console.log( items.slice((this.dataset.index+1),items.length))
//     console.log((this.dataset.index+1),items.length)
// }

function  checkit() {
    if (items[this.dataset.index].state==true){
        items[this.dataset.index].state=false;
    }
    else{
        items[this.dataset.index].state=true;
    }
    localStorage.setItem('items',JSON.stringify(items));
} 

function  displayItem(items =[]) {
    listbox.innerHTML = items.map((item , i) =>{
        return `
        <li class="item"><input type="checkbox"  data-index=${i} class="checkbox-list" ${item.state ? "checked" : '' }><span class="item-value" data-index=${i}>${item.name}</span></li>
        `
    }).join("");
    listitem= document.querySelectorAll('.item-value');
    checkboxs = document.querySelectorAll('.checkbox-list');
    // listitem.forEach(box => box.addEventListener("dblclick" , deleteit));
    checkboxs.forEach(box => box.addEventListener("click" , checkit));
}

form.addEventListener("submit" , additem);
displayItem(items);
