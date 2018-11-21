var strip = document.getElementById("strip");
var grid = document.getElementById("grid");
var cubes = document.getElementById("cubes");
var close = document.getElementById("close");
var info = document.getElementById("info");
var fun = document.getElementById("fun");

var current;
var particleson = false;
var griddown = true;
var delay;

function openslide() {
    document.body.style.overflow = "hidden";
    strip.style.display = "block";
    if (current == "about") {
        close.classList.add('closeabout');
        delay = 0;
    } else {
        blur();
        delay = 750;
    }
    setTimeout(function () {
        close.style.display = "block";
        TweenMax.to(strip, .5, { top: "0%", ease: Power3.easeOut });
    }, delay);
}


function closeslide() {
    TweenMax.to(strip, .5, { top: "100%", ease: Power4.easeOut });
    document.body.style.overflow = "auto";
    close.style.display = "none";
    if (current != "about") {
        unblur();
    }
    close.classList.remove('closeabout');
    setTimeout(function () {
        strip.style.display = "none";
    }, 500);
}


function opensec(e) {
    current = e;
    if (!griddown || current == "about") {
        if (window.innerWidth > 800) {
            strip.src = e + ".html";
            openslide(e);
        } else {
            window.location.href = e + ".html";
        }
    } else {
        TweenLite.to(window, .35, { scrollTo: { y: "#grid", offsetY: 0 } });
    }
}


function blur() {
    grid.style.webkitFilter = "blur(20px)";
    grid.style.opacity = .5;
}


function unblur() {
    grid.style.webkitFilter = "blur(0px)";
    grid.style.opacity = 1;
}

function killanimate() {
    cancelAnimationFrame(rnd);
}


window.onscroll = function () { myFunction() };
killanimate();

function myFunction() {
    // console.log(document.body.scrollTop);
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        unblur();
        info.style.opacity = 0;
        info.style.pointerEvents = "none";
        //
        fun.innerHTML = "fun";
        particleson = false;
        cubes.style.opacity = 0;
        killanimate();
        //
        griddown = false;
        grid.style.transform = "scale(1)";
    } else {
        blur();
        info.style.opacity = 1;
        info.style.pointerEvents = "all";
        griddown = true;
        grid.style.transform = "scale(.95)";
    }
}

function particles() {
    if (particleson) {
        fun.innerHTML = "fun";
        particleson = false;
        cubes.style.opacity = 0;
        killanimate();
        info.style.mixBlendMode = "normal";
    } else {
        fun.innerHTML = "FUN";
        particleson = true;
        cubes.style.opacity = .75;
        animate();
        info.style.mixBlendMode = "difference";
    }
}