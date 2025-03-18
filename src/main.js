import './style.css'

const app = document.querySelector("#app");

// Déconseillé
app.innerHTML= `<div>
<h1>
Salut
<h1>
<input/>
</div>`;

// Conseillé
const div = document.createElement("div");
console.log({
    parentElement: div.parentElement,
    contenue: div.innerHTML,
});

const title = document.createElement("h1");
title.classList.add("big-title", "title");
title.style.background= "blue";
title.innerText = "Romaric !";
div.appendChild(title);

const input = document.createElement("input");
div.appendChild(input);
app.appendChild(div);

app.appendChild(div);




