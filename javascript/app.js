


let toggle = document.querySelector(".navbar-toggle");
let nav = document.querySelector("header .header-top nav");


toggle.addEventListener("click",function(){
    toggle.classList.toggle("active");
    nav.classList.toggle("show");
})


let img = document.querySelector(".content .item .right img");
let width = img.offsetWidth;
img.style.height = `${width}px`;





