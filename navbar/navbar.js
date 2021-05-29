document.querySelectorAll('.nav_button').forEach(add_click_event);

function add_click_event(item) {
    item.addEventListener('click', event => {
        document.querySelectorAll('.nav_button').forEach(remove_selected);
        item.classList.add("nav_button_select");
    })
}

function remove_selected(item) {
    item.classList.remove("nav_button_select");
}

document.querySelector('#nav_button_slide svg').addEventListener('click', event => {
    document.querySelector('nav').classList.toggle("hide_show");
    document.querySelector('#nav_button_slide svg').classList.toggle("slider_ro");
})

document.querySelector('#mode').addEventListener('click', event => {
    document.querySelector('nav').classList.toggle("dark");
    
})