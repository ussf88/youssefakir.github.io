const logo = document.querySelectorAll("#logo path");
document.addEventListener('DOMContentLoaded', () => {
    function animateSgv(id, delay, delayIncrement) {
        const logo = document.getElementById(id);
        const logoPaths = document.querySelectorAll(`#${id} path`);
        delay = delay;
        for (let i = 0; i < logoPaths.length; i++) {
            logoPaths[i].style.strokeDasharray = logoPaths[i].getTotalLength();
            logoPaths[i].style.strokeDashoffset = logoPaths[i].getTotalLength();
            logoPaths[i].style.animation = `line-anim 2s ease forwards ${delay}s`;
            delay += delayIncrement;
        }
        logo.style.animation = `fill 0.5s ease forwards ${delay + 1.5}s, scal 1s ease forwards 5s,posi 1s ease forwards 6s`;
    }
    // Set the id of SVG, delay time in seconds to start animation and delay between each animation
    animateSgv('logo', 0, 0.3)
}, false);


var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 6000);
}

function showPage() {
    document.querySelector(".content").style.display = "block";
}
const navbutton = () => {
    const burger = document.querySelector('.fab-icon-holder');
    const nav = document.querySelector('.fab-options');
    const navlinks = document.querySelectorAll('.fab-options li');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');



        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navlinkfade 0.5s ease ${index / 10}s forwards`;
            }
        });
        burger.classList.toggle('toggle');
    });

}
navbutton();
const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const headline = document.querySelector('.headline');
const tl = new TimelineMax();
var scrollpos = window.scrollY; // window scroll position
var wh = window.innerHeight - 50; // as soon as element touches bottom with offset event starts
var about = document.querySelector(".about"); //element

window.addEventListener('scroll', function () {
    this.console.log("scroll " + scrollpos);
    this.console.log("other " + (about.offsetTop - wh));
    if (scrollpos > (about.offsetTop - wh)) {
        tl.fromTo(hero, 5, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
            .fromTo(hero, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })
            .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2");
        this.console.log("hello");
    }
    this.console.log("hello1");
});