import './style.css'

const app = document.querySelector("#app");

const colors = ["red", "blue", "yellow"];

let i = 0;
setInterval(() => {
    app.style.background = colors[i];
    i++;
    if (i > colors.length -1 ) {
        i=0;
    }
}, 1000);
