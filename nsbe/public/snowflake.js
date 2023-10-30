let container = document.getElementById('container');
let count = 50;

for (let i = 0; i < count; i++) {
    let leftSnow = Math.floor(Math.random() * window.innerWidth);
    let topSnow = Math.floor(Math.random() * window.innerHeight);
    console.log(leftSnow)
    let div = document.createElement('div');
    div.classList.add('snow');
    div.style.left = `${leftSnow}px`;
    div.style.top = `${topSnow}px`;

    container.appendChild(div);
}
