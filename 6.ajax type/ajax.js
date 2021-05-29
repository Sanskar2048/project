const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities=[];

fetch(endpoint)
    .then(bolb => bolb.json())
    .then(data => cities=data);


function  find_match( hint ) {
    const search=cities.filter(place => {
        // g if global for the string and i is case insensetive flag or insted of creating the object we can repalce by /hint/i
        const regex= new RegExp(hint , 'gi');

        return place.city.match(regex) || place.state.match(regex);
    })

    return search;
}


document.querySelector("#search").addEventListener('change',display_match);
document.querySelector("#search").addEventListener('keyup',display_match)

function display_match() {
    let list=find_match(this.value);
    const html = list.slice(0,15).map(place=>{
        return`
        <div class="item">${place.city} ,${place.state} ,${place.population}</div>
        `
    }).join("");
    document.querySelector(".list").innerHTML=html;
}
