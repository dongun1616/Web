const h1 = document.querySelector('h1')
const btn = document.querySelector('button')

function rand() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    if (r + g + b < 100) {
        h1.style.color = 'white';
    }
    return `rgb(${r},${g},${b})`
}

btn.addEventListener('click', () => {
    const newColor = rand();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})