// ============================
// Smooth Scroll
// ============================

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const id = this.getAttribute("href");

        const section = document.querySelector(id);

        section.scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ============================
// Active Menu
// ============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        const height=section.clientHeight;

        if(scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    links.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// ============================
// Header Shadow
// ============================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.4)";

    }else{

        header.style.boxShadow="none";

    }

});

// ============================
// Scroll Reveal Animation
// ============================

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".about,.skills,.projects,.contact,.hero")
.forEach(el=>observer.observe(el));

// ============================
// Typing Effect
// ============================

const text="Junior Software Developer";

const typing=document.querySelector(".hero-text h2");

let i=0;

typing.textContent="";

function type(){

    if(i<text.length){

        typing.textContent+=text.charAt(i);

        i++;

        setTimeout(type,100);

    }

}

type();
// ======================
// Dark Mode
// ======================

const themeBtn=document.getElementById("theme-btn");

themeBtn.onclick=()=>{

document.body.classList.toggle("dark");

}

// ======================
// Scroll Top Button
// ======================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

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

}
// =========================
// Counter Animation
// =========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 80;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter, 25);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});