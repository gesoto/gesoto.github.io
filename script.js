const child = document.querySelector(".child");
const core = document.querySelector(".child .core");
const projectbtn = document.querySelector(".project-btn");
const projectbtnlabel = document.querySelector(".project-btn-label");
const closebtn = document.querySelector(".close-btn");
const totopbtn = document.querySelector(".totop-btn");
const desc = document.querySelector(".desc");
const t1 = document.querySelector(".t1");
const desccontent = document.querySelector(".desc-content");
const desctitle = document.querySelector(".desc-content .titles div:nth-child(1)");
const descsubtitle = document.querySelector(".desc-content .titles div:nth-child(2)");
const descbody = document.querySelector(".desc-content .dbody");
const desctags = document.querySelector(".desc-content .dtags");
const topbar = document.querySelector(".topbar");
const about = document.querySelector(".about");
const aboutmebtn = document.querySelector(".about-btn");
const ci = document.querySelector(".coreitems");
const cursor = document.querySelector(".cursor");

// const tl = gsap.timeline();

// -- INIT --

// cursor.style.opacity = 0;
// gsap.to(cursor, { duration: 0.5, opacity: 1, repeat: 16, yoyo: "true" });

// tl.fromTo(t1, { opacity: 0 }, { opacity: 1, duration: 3.0, delay: 1.0 });
// tl.fromTo(t1, { y: 200 }, { y: 0, duration: 1.0, ease: "expo.out" }, "<2.0");
// tl.fromTo(ci, { y: 200 }, { y: 0, duration: 1.0, ease: "expo.out" }, "<");
// tl.fromTo(ci, { opacity: 0 }, { opacity: 1, duration: 1.0 }, "<");
// tl.fromTo(aboutmebtn, { opacity: 0 }, { opacity: 1, duration: 1.0 }, "<");
// tl.fromTo(projectbtn, { opacity: 0 }, { opacity: 1, duration: 1.0 }, "<");

// --

// -- PROJECT INFO --

// show / hide button

let t1_observer = new IntersectionObserver(t1callback); //, { rootMargin: "-75% 0px 0px 0px" });
t1_observer.observe(about);

function t1callback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.to(projectbtn, { duration: 0.25, ease: "power1.out", top: "-100px" });
            // gsap.to(projectbtn, { duration: 0.25, ease: "power1.out", bottom: "-100px" });
            hideinfoarea();
        } else {
            gsap.to(projectbtn, { duration: 0.25, ease: "power1.out", top: "40px" });
            // gsap.to(projectbtn, { duration: 0.25, ease: "power1.out", bottom: "60px" });
        }
    });
}

// show / hide info

let infoison = false;

function toggleinfo() {
    if (infoison) {
        hideinfoarea();
    } else {
        showinfoarea();
    }
}

function hideinfoarea() {
    projectbtn.style.display = "flex";
    closebtn.style.display = "none";
    desc.style.display = "none";
    gsap.to(core, { duration: 0.1, opacity: 1 });
    infoison = false;
}

function showinfoarea() {
    projectbtn.style.display = "none";
    closebtn.style.display = "flex";
    desc.style.display = "block";
    setTimeout(() => desc.scrollTo(0, 0), 1);
    gsap.to(core, { duration: 0.25, opacity: 0.05 });
    infoison = true;

    if (totopbtnison) { hidetotopbtn() }
}

//--

// BACK TO TOP BUTTON

let totopbtnison = false;

function backtoabout() {
    setTimeout(() => window.scrollTo(0, 100), 1);
    hidetotopbtn();
}
function backtotop() {
    setTimeout(() => window.scrollTo(0, 0), 1);
}

function showtotopbtn() {
    gsap.to(totopbtn, { duration: 0.25, ease: "power1.out", bottom: "60px", delay: 0.7 });
    // gsap.to(totopbtn, { duration: 0.25, ease: "power1.out", top: "20px", delay: 0.7 });
    setTimeout(() => { totopbtnison = true }, 700);
}

function hidetotopbtn() {
    gsap.to(totopbtn, { duration: 0.25, ease: "power1.out", bottom: "-100px" });
    // gsap.to(totopbtn, { duration: 0.25, ease: "power1.out", top: "-100px" });
    // totopbtn.style.bottom = "-100px";
    // totopbtn.style.top = "-100px";
    totopbtnison = false;
    // console.log("hidetotopbtn")
}

// show on footer

// const footer = document.querySelector('.footer');
// let footer_observer = new IntersectionObserver(footercallback);
// footer_observer.observe(footer);
// function footercallback(entries, observer) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             gsap.to(totopbtn, { duration: 0.25, ease: "power1.out", bottom: "200px" });
//             setTimeout(() => { totopbtnison = true }, 700);
//         }
//     });
// }


// --

// -- ABOUT SECTION --

const firsttxtblk = document.querySelector(".labelheader .txtblk");

let aboutison = false;

let topbar_observer = new IntersectionObserver(topbarcallback); //, { rootMargin: "-75% 0px 0px 0px" });
topbar_observer.observe(topbar);

function topbarcallback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) { // && aboutison) {}
            // closeabout();
            if (aboutison) { closeabout(); }
            gsap.to(t1, { duration: 0.5, ease: "expo.out", y: 0 });
            gsap.to(firsttxtblk, { duration: 0.25, opacity: 0 });
        } else {
            aboutmebtn.classList.remove("about-btn-on");
            if (!aboutison) {
                gsap.to(t1, { duration: 0.5, ease: "expo.out", y: -140 });
                gsap.to(firsttxtblk, { duration: 0.25, opacity: 1 });
            }
        }
    });
}

function openabout() {
    gsap.to(about, { duration: 0.5, ease: "expo.out", height: "auto" });
    gsap.to(about, { duration: 0.25, ease: "linear", opacity: 1 });
    gsap.to(t1, { duration: 0.5, ease: "expo.out", marginTop: "50px" });
    aboutmebtn.classList.add("about-btn-on");
    aboutison = true;
}

function closeabout() {
    gsap.to(about, { duration: 0.5, ease: "expo.out", height: "0" });
    gsap.to(about, { duration: 0.25, ease: "linear", opacity: 0 });
    gsap.to(t1, { duration: 0.5, ease: "expo.out", marginTop: "200px" });
    aboutmebtn.classList.remove("about-btn-on");
    aboutison = false;
}

function toggleabout() {
    if (aboutison) {
        closeabout();
    } else {
        openabout();
    }
}


// --

// -- SECTION CONTEXT --

const info = [
    {
        title: "Embedded Display UI",
        subtitle: "KATERRA Advanced Building Systems",
        description: "A unique form-factor visual interface for an interconnected HVAC system in KATERRA's Building Systems. <br><br> The project required early concept, design, and prototyping in tandem with the engineering and industrial design teams. <br><br> Within the project I contributed with visual / motion design, animation, and prototyping throughout the entire project. I also helped development by creating and testing a set of readily-availably code components and animations on the target platform in order to rapidly assemble a polished visual interface.",
        tags: "<div>UX Prototyping</div><div>Motion Design</div><div>UI Design</div><div>UI Components Development</div><div>Animation</div>",
    },
    {
        title: "Building Management Tools",
        subtitle: "KATERRA Advanced Building Systems",
        description: "A complete set of management tools for KATERRA's building systems. <br> These tools help a wide range of scenarios, from the complex provisioning and installation of interconnected devices in all building units, to the management, maintenance, and troubleshooting of these systems while in operation. <br><br> My work involved the creation of an entire <a href='https://flamboyant-gates-7ea7eb.netlify.app/' target='_blank'>UI Design System</a> for the web platform. I managed, designed, and developed a library of front-end components that were used by both designers and developers to mock-up, prototype, and develop the final product. <br><br> The outcome allowed for a single universal design source, avoiding design > development hand-off issues and creating a much more efficient process.",
        tags: "<div>Design System</div><div>Component Development</div><div>UI Design</div><div>UX Prototyping</div><div>Storybook</div>",
    },
    {
        title: "Display User Interfaces",
        subtitle: "Hisense Technology",
        description: "Within the Hisense Innovation group, my work compromised multiple conceptual proposals involving a wide range of skills, from Visual, Motion, and Animation Design, to High fidelity prototyping, Front-end Development, and even Hardware prototyping. <br><br> While in charge of Rapid Prototyping I used as many platforms and tools as possible in order to achieve a final product like experience during the very early stages of the project. This allowed for essential user testing, pre-development design changes, and as a unified vision to the entire group and stakeholders. <br><br> Many products ended up being successfully released into the international market under the Sharp & Hisense umbrella.",
        tags: "<div>UI UX Design</div><div>Motion Design</div><div>Animation</div><div>High Fidelity Prototyping</div><div>10-foot User Interface</div>",
    },
    {
        title: "Voice User Interface",
        subtitle: "Hisense Technology",
        description: "A Voice user interface project created as part of a series of Hisense branded displays to make use of Hisense newest voice recognition technology. <br><br> Some of my contributions to the project were the design and development of a microphone audio <a href='https://github.com/gesoto/microphone-audio-visualizer' target='_blank'>visualizer</a> — the animation of a series of <a href='https://github.com/gesoto/animation-tester-reactjs' target='_blank'>avatar emotions</a> and its library implementation — And a high-fidelity prototype, which used a real microphone interface to voice-control the <a href='https://github.com/gesoto/voice-synthesis-and-speech-recognition' target='_blank'>prototype</a> by using the Web Audio API together with a list of pre-defined of preset commands and responses.",
        tags: "<div>Voice Interface</div><div>Motion Design</div><div>Animation</div><div>UX Prototyping</div>",
    },
    {
        title: "Mobile Game Development",
        subtitle: "Personal Projects",
        description: "Two mobile video games that I've worked on as passion projects. An Untitled personal project, and Zip, a game in which I collaborated as part of a 3 person independent team. <br><br> These projects gave me the inspiration to learn and the opportunity to work on a multitude of disciplines such as; visual design, game design, animation, programming, and audio design.",
        tags: "<div>Game Design</div><div>Game Development</div><div>Audio Design</div>",
    },
    {
        title: "Hybrid Smartphone",
        subtitle: "Flextronics",
        description: "In 2010 this <a href='https://www.fastcompany.com/3063087/whatever-happened-to-dual-screen-smartphones' target='_blank'>dual-screen</a> Android smartphone was a Flextronics in-house project involving the creation of an <a href='https://www.engadget.com/2011-06-23-prototype-dual-screened-2-in-1-android-smartpad-from-imerj-previ.html' target='_blank'>all-in-one device</a> device type hybrid. This unique device was capable of operating as a regular smartphone (single screen), a tablet like device (dual-screen), and a full fledge desktop computer (docked). <br><br> The project required multiple collaboration from different groups such as Frog Design, Canonical (Ubuntu), and in-house design-development from the ground up based on the Android Operating System. <br><br> As part of the design team, I worked on the dynamic visual interface that transitioned smoothly throughout the different modes in the Operating System. From single screen mode, to dual-screen, all the way into full desktop mode.",
        tags: "<div>UI Design</div><div>UX Prototyping</div><div>Motion Design</div>",
    },
];

const sections = document.querySelectorAll('[class^="coreitem section"]');
let observer = new IntersectionObserver(callback, { rootMargin: "-50% 0px -50% 0px" });
sections.forEach(i => { observer.observe(i) });

let currenttitle = "";

function callback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let a = parseInt(entry.target.className.slice(17, 18));
            projectbtnlabel.innerHTML = info[a].title;
            desctitle.innerHTML = info[a].title;
            descsubtitle.innerHTML = info[a].subtitle;
            descbody.innerHTML = info[a].description;
            desctags.innerHTML = info[a].tags;
            if (currenttitle !== info[a].title) {
                gsap.fromTo(projectbtn, { scale: 0.7 }, { duration: 1, ease: "elastic.out(2, 0.3)", scale: 1 });
                // gsap.fromTo(projectbtn, { top: "10px" }, { duration: 1, ease: "elastic.out(1, 0.3)", top: "20px" });
                // gsap.fromTo(projectbtn, { bottom: "40px" }, { duration: 1, ease: "elastic.out(1, 0.3)", bottom: "60px" });
            }
            currenttitle = info[a].title;

            if (totopbtnison) { hidetotopbtn() }
        }
    });
}

// Testing play/pause video

const testtarget = document.querySelectorAll('video');
let testobserver = new IntersectionObserver(testcallback);
testtarget.forEach(i => { testobserver.observe(i) });

function testcallback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // console.log(entry.target)
            entry.target.play();
            // console.log("play " + entry.target.src);
        } else {
            entry.target.pause();
            // console.log("pause");
        }
    })
}


// Testing fade in while scroll

// let fadeobserver = new IntersectionObserver(fadecallback, { rootMargin: "0px 0px 0px 0px" });
// sections.forEach(i => { fadeobserver.observe(i) });
// function fadecallback(entries, observer) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add("coreitem-on");
//         }
//     });
// }


// // Testing to lazyload img

const allimg = document.querySelectorAll('img.lozad');
let allimg_observer = new IntersectionObserver(allimgCallback, { rootMargin: "0px 0px 1000px 0px" });
allimg.forEach(i => { allimg_observer.observe(i) });

function allimgCallback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.src;
            // image.onload = function () {
            // image.classList.add("fade");
            // }
            allimg_observer.unobserve(image);
            console.log("load img " + entry.target.src);
        }
    })
}


// Testing to lazyload video

const allvideo = document.querySelectorAll('video.lozad');
let allvideo_observer = new IntersectionObserver(allvideoCallback, { rootMargin: "0px 0px 2000px 0px" });
allvideo.forEach(i => { allvideo_observer.observe(i) });

function allvideoCallback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const video = entry.target;
            video.src = video.dataset.src;
            allvideo_observer.unobserve(video);
            console.log("load video " + entry.target.src);
        }
    })
}
