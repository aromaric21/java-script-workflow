import './style.css'

const app = document.querySelector("#app");

console.log({
    parent: app.parentElement,
    prevSister: app.previousElementSibling,
    nextSister: app.nextElementSibling,
    firstChild: app.firstElementChild,
    lastChild: app.lastElementChild,
    children: app.children,
});

document.getElementById
// ->document.querySelector("#id")
document.getElementsByClassName
// ->document.querySelector("#.className")
document.getElementsByTagName
// ->document.querySelector("tagName")

