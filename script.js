// ===============================
// BOLADE MODEL COLLEGE WEBSITE
// ===============================

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior:'smooth'
            });
        }
    });
});

// Reveal animation
const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

// Mobile Menu
const menu=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav-links");

if(menu){

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}

// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Hero Image Slider

const hero=document.querySelector(".hero");

const images=[

"images/school1.jpg",

"images/lab.jpg",

"images/school1.jpg"

];

let current=0;

setInterval(()=>{

current++;

if(current>=images.length){

current=0;

}

hero.style.backgroundImage=
`linear-gradient(rgba(40,25,15,.6),rgba(40,25,15,.6)),url(${images[current]})`;

},5000);
