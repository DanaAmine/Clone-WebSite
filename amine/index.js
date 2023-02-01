let bars = document.querySelector(".bars");
let nav = document.querySelector("nav");
let ul = document.querySelector("ul");
let li = document.querySelectorAll(".icons");
bars.addEventListener("click",()=>{
    nav.classList.toggle("nav-show")
    ul.classList.toggle("ul-show")
    li.classList.toggle("icons-hide")
})