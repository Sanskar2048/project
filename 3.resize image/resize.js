const input = document.querySelectorAll("input");

function update() {
    const suf = this.dataset.sizing || " ";
    console.log(suf);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suf)
}


input.forEach(input => input.addEventListener('change', update));
input.forEach(input => input.addEventListener("mousemove", update));