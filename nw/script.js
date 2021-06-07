// const child = document.querySelector(".child");
// const core = document.querySelector(".child .core");
// const coreitems = document.querySelector(".coreitems");
// const totopbtn = document.querySelector(".totop-btn");
// const desc = document.querySelector(".desc");
// const t1 = document.querySelector(".t1");
// const t1a = document.querySelector(".t1a a");
// const t1babout = document.querySelector(".t1 .t1b span");
// const desccontent = document.querySelector(".desc-content");
// const desctitle = document.querySelector(".desc-content .title");
// const descbody = document.querySelector(".desc-content .dbody");
// const desctags = document.querySelector(".desc-content .dtags");
// const topbar = document.querySelector(".topbar");
// const about = document.querySelector(".about");
// const aboutmebtn = document.querySelector(".about-btn");
// const cursor = document.querySelector(".cursor");
// const indexbtn = document.querySelector(".index-button");
// const indexbtnitemcontainer = document.querySelector(".index-button .item-container");
// const indexbtnitem = document.querySelectorAll(".index-button .item-container .item div");
// const fixedbuttons = document.querySelector(".fixed-buttons");
// const cover = document.querySelector(".cover");
// const embeddeduis = document.querySelector("#embeddeduis");
// const labelheader = document.querySelector(".labelheader");
// const morebutton = document.querySelectorAll(".more-button");

// //

// // ---- INDEX COVER ----

// let lookingcover = true;

// function gotoindex(n) {
//     tempcancelindexbutton();
//     location.hash = "#" + n;
// }

// function tempcancelindexbutton() {
//     jumpingsections = true;
//     setTimeout(function () { jumpingsections = false; lookingcover = false; }, 600);
// }

// // 

// // ---- PARTY MODE ----

// let partyon = false;
// const msg1 = "Hey there, Welcome!";
// const msg2 = "Let's get this party started! 🥳";
// t1a.innerHTML = msg1;
// cancelAnimationFrame(rnd);

// function toggleparty() {
//     if (partyon) {
//         cancelAnimationFrame(rnd);
//         t1a.classList.remove("t1a-party-on");
//         t1a.innerHTML = msg1;
//         scene3d.style.opacity = 0;
//         // scene3d.style.display = "none";
//         partyon = false;
//     } else {
//         t1a.classList.add("t1a-party-on");
//         t1a.innerHTML = msg2;
//         scene3d.style.opacity = 0.5;
//         // scene3d.style.display = "block";
//         animate();
//         partyon = true;
//     }
// }

// let partyobserver = new IntersectionObserver(partycallback, { rootMargin: "0px 0px 2000px 0px" });
// partyobserver.observe(labelheader);
// function partycallback(entries, observer) {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             partyon = true;
//             toggleparty();
//         }
//     });
// }

// //

// // ---- INDEX BUTTON ----

// let current_index = 0;
// let indexbuttonison = false;
// let jumpingsections = false;
// let infoison = false;
// indexbtn.style.width = indexbtnitem[current_index].offsetWidth + "px";

// // sets index button size

// function setsize() {
//     gsap.to(indexbtnitemcontainer, { duration: 0.9, ease: "expo.out", y: -(current_index * 65) });
//     // gsap.to(indexbtn, { duration: 1.5, ease: "expo.out", height: "65px" });
//     gsap.to(indexbtn, { duration: 0.9, ease: "expo.out", width: indexbtnitem[current_index].offsetWidth + "px" });
//     // gsap.to(indexbtn, { duration: 1.5, ease: "expo.out", borderRadius: "50px" });

// }

// function setIndex(n) {
//     current_index = n;
//     setsize();
// }

// indexbtn.addEventListener('mouseover', function () {
//     // gsap.to(indexbtn, { duration: 0.25, ease: "power2.out", scale: 1.1 });
// });

// indexbtn.addEventListener('mouseout', function () {
//     // gsap.to(indexbtn, { duration: 0.25, ease: "power2.out", scale: 1.0 });
// });

// let t1_observer = new IntersectionObserver(t1callback, { rootMargin: "0px 0px 2000px 0px" });
// t1_observer.observe(embeddeduis);
// function t1callback(entries, observer) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             hideindexbutton();
//             // if (totopbtnison) { hidetotopbtn() }
//         } else {
//             showindexbutton();
//         }
//     });
// }

// function showindexbutton() {
//     if (!jumpingsections) {
//         indexbuttonison = true;
//         gsap.to(fixedbuttons, { duration: 0.25, ease: "power1.out", top: "20px" });
//         gsap.to(totopbtn, { duration: 0.2, ease: "power2.out", bottom: "60px" });
//     }
// }

// function hideindexbutton() {
//     indexbuttonison = false;
//     lookingcover = true;
//     gsap.to(fixedbuttons, { duration: 0.25, ease: "power1.out", top: "-100px" });
//     gsap.to(totopbtn, { duration: 0.2, ease: "power2.out", bottom: "-100px" });
//     hideinfoarea();
// }

// // toggle info area

// function toggleinfo() {
//     if (infoison) {
//         hideinfoarea();
//     } else {
//         showinfoarea();
//     }
// }

// function hideinfoarea() {
//     desc.style.display = "none";
//     gsap.to(core, { duration: 0.1, opacity: 1 });
//     // gsap.to(indexbtn, { duration: 0.25, opacity: 1 });
//     indexbtn.style.display = "block";
//     totopbtn.style.display = "flex";
//     // gsap.to(desccontent, { duration: 0.25, ease: "power1.out", y: 10 });
//     // infosvg.style.visibility = "visible";
//     // xsvg.style.visibility = "hidden";
//     // infobuttonlabel.innerHTML = "Info";
//     infoison = false;
// }

// function showinfoarea() {
//     desc.style.display = "block";
//     setTimeout(() => desc.scrollTo(0, 0), 1);
//     gsap.to(core, { duration: 0.25, opacity: 0.05 });
//     // gsap.to(indexbtn, { duration: 0.25, opacity: 0.05 });
//     indexbtn.style.display = "none";
//     totopbtn.style.display = "none";
//     // gsap.to(desccontent, { duration: 0.25, ease: "power1.out", y: 0 });
//     // infosvg.style.visibility = "hidden";
//     // xsvg.style.visibility = "visible";
//     // infobuttonlabel.innerHTML = "Close";
//     infoison = true;

//     // if (totopbtnison) { hidetotopbtn() }
// }

// //

// // ---- BACK TO TOP BUTTON ----

// let totopbtnison = false;
// let lastScrollTop = 0;
// let prescrolldir = "down";
// let newscrolldir = "down";
// totopbtn.style.transform = "translateY(160px)";

// window.addEventListener("scroll", function () {
//     let st = window.pageYOffset || document.documentElement.scrollTop;
//     if (st > lastScrollTop) {
//         prescrolldir = "down";
//     } else {
//         prescrolldir = "up";
//     }
//     if (newscrolldir != prescrolldir) {
//         // console.log("change");
//         if (prescrolldir == "up") {
//             showtotopbtn();
//         } else {
//             hidetotopbtn();
//         }
//     }
//     newscrolldir = prescrolldir;
//     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

// }, false);

// function showtotopbtn() {
//     // console.log("showtotopbtn")
//     gsap.to(totopbtn, { duration: 0.2, ease: "power2.out", y: "0px" });
//     totopbtnison = true;
// }

// function hidetotopbtn() {
//     gsap.to(totopbtn, { duration: 0.2, ease: "power2.out", y: "160px" });
//     totopbtnison = false;
// }

// function backtotop() {
//     location.hash = "#top";
//     // hidetotopbtn();
// }

// // show on footer

// // const footer = document.querySelector('.footer');
// // let footer_observer = new IntersectionObserver(footercallback);
// // footer_observer.observe(footer);
// // function footercallback(entries, observer) {
// //     entries.forEach(entry => {
// //         if (entry.isIntersecting) {
// //             gsap.to(totopbtn, { duration: 0.25, ease: "power1.out", bottom: "200px" });
// //             setTimeout(() => { totopbtnison = true }, 700);
// //         }
// //     });
// // }


// //

// // ---- ABOUT SECTION ----

// morebutton.forEach(i => { i.addEventListener('click', toggleinfo) });

// let aboutison = false;

// let topbar_observer = new IntersectionObserver(topbarcallback); //, { rootMargin: "-75% 0px 0px 0px" });
// topbar_observer.observe(topbar);

// function topbarcallback(entries, observer) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             if (aboutison) { closeabout(); }
//         } else {
//             // aboutmebtn.classList.remove("about-btn-on");
//         }
//     });
// }

// function openabout() {
//     gsap.to(about, { duration: 0.5, ease: "expo.out", height: "auto" });
//     gsap.to(about, { duration: 0.25, ease: "linear", opacity: 1 });
//     // gsap.to(t1, { duration: 0.5, ease: "expo.out", marginTop: "50px" });
//     // aboutmebtn.classList.add("about-btn-on");
//     t1babout.style.display = "none";
//     aboutison = true;
// }

// function closeabout() {
//     gsap.to(about, { duration: 0.5, ease: "expo.out", height: "0" });
//     gsap.to(about, { duration: 0.25, ease: "linear", opacity: 0 });
//     // gsap.to(t1, { duration: 0.5, ease: "expo.out", marginTop: "200px" });
//     // aboutmebtn.classList.remove("about-btn-on");
//     t1babout.style.display = "inline";
//     aboutison = false;
// }

// function toggleabout() {
//     if (aboutison) {
//         closeabout();
//         // document.querySelector(".about-btn span").innerHTML = "About Me";
//     } else {
//         openabout();
//         // document.querySelector(".about-btn span").innerHTML = "Close";
//     }
// }


// //

// // ---- SECTION CONTEXT ----

// const info = [
//     {
//         title: "Embedded User Interfaces",
//         subtitle: "KATERRA Advanced Building Systems",
//         description: "A unique form-factor visual interface for an interconnected HVAC system in KATERRA's Building Systems. <br><br> The project required early concept, design, and prototyping in tandem with the engineering and industrial design teams. <br><br> Within the project I contributed with visual / motion design, animation, and prototyping throughout the entire project. I also helped development by creating and testing a set of readily-availably code components and animations on the target platform in order to rapidly assemble a polished visual interface.",
//         tags: "<div>UI Design</div><div>UX Prototyping</div><div>Motion Design</div><div>UI Component Development</div><div>QT</div><div>Embedded Linux</div>",
//     },
//     {
//         title: "UI Design Systems & Tools",
//         subtitle: "KATERRA Advanced Building Systems",
//         description: "A UI design system for different management tools in KATERRA's Advanced Building Systems. <br> These tools help a wide range of scenarios, from the complex provisioning and installation of interconnected devices in all building units, to the management, maintenance, and troubleshooting of these systems while in operation. <br><br> My work involved the creation of an entire <a href='https://flamboyant-gates-7ea7eb.netlify.app/' target='_blank'>UI Design System</a> for the web platform. I managed, designed, and developed a library of front-end components that were used by both designers and developers to mock-up, prototype, and develop the final product. <br><br> The outcome allowed for a single universal design source, avoiding design > development hand-off issues and creating a much more efficient process.",
//         tags: "<div>UI Design</div><div>UX Prototyping</div><div>Design Systems</div><div>Web Component Development</div><div>Storybook</div><div>Desktop & Mobile</div>",
//     },
//     {
//         title: "Smart Displays UIs",
//         subtitle: "Hisense Technology",
//         description: "Within the Hisense Innovation group, my work compromised multiple conceptual proposals involving a wide range of skills, from Visual, Motion, and Animation Design, to High fidelity prototyping, Front-end Development, and even Hardware prototyping. <br><br> While in charge of Rapid Prototyping I used as many platforms and tools as possible in order to achieve a final product like experience during the very early stages of the project. This allowed for essential user testing, pre-development design changes, and as a unified vision to the entire group and stakeholders. <br><br> Many products ended up being successfully released into the international market under the Sharp & Hisense umbrella.",
//         tags: "<div>UI Design</div><div>UX Prototyping</div><div>Motion Design</div><div>10-foot User Interfaces</div><div>High Fidelity Prototyping</div><div>Android & HTML</div>",
//     },
//     {
//         title: "Voice User Interfaces",
//         subtitle: "Hisense Technology",
//         description: "A Voice user interface project created as part of a series of Hisense branded displays to make use of Hisense newest voice recognition technology. <br><br> Some of my contributions to the project were the design and development of a microphone audio <a href='https://github.com/gesoto/microphone-audio-visualizer' target='_blank'>visualizer</a> — the animation of a series of <a href='https://github.com/gesoto/animation-tester-reactjs' target='_blank'>avatar emotions</a> and its library implementation — And a high-fidelity prototype, which used a real microphone interface to voice-control the <a href='https://github.com/gesoto/voice-synthesis-and-speech-recognition' target='_blank'>prototype</a> by using the Web Audio API together with a list of pre-defined of preset commands and responses.",
//         tags: "<div>Voice Interface</div><div>Animation</div><div>UX Prototyping</div><div>High Fidelity Prototyping</div><div>HTML</div>",
//     },
//     {
//         title: "Animation",
//         subtitle: "Branding Animation Loops",
//         description: "Within the product design process I've worked on several animations such as branding logo animations, screensavers, loading screens, and dynamic / interactive animations for displays.<br><br>I've created these animations both with traditional and dynamic animation tools and libraries such as After Effects, Cinema 4D, Animate, and THREE JS (3D Javascript library).",
//         tags: "<div>Motion Design</div><div>Animation</div><div>After Effects</div><div>Three.js</div><div>Cinema 4D</div>",
//     },
//     {
//         title: "Games",
//         subtitle: "Personal Projects",
//         description: "Two mobile video games that I've worked on as passion projects. An Untitled personal project, and Zip, a game in which I collaborated as part of a 3 person independent team. <br><br> These projects gave me the inspiration to learn and the opportunity to work on a multitude of disciplines such as; visual design, game design, animation, programming, and audio design.",
//         tags: "<div>Game Design & Development</div><div>2D & 3D Prototyping</div><div>Unity</div><div>AR</div>",
//     },
//     // {
//     //     title: "Smartphone Operating Systems",
//     //     subtitle: "Flextronics",
//     //     description: "In 2010 this <a href='https://www.fastcompany.com/3063087/whatever-happened-to-dual-screen-smartphones' target='_blank'>dual-screen</a> Android smartphone was a Flextronics in-house project involving the creation of an <a href='https://www.engadget.com/2011-06-23-prototype-dual-screened-2-in-1-android-smartpad-from-imerj-previ.html' target='_blank'>all-in-one device</a> device type hybrid. This unique device was capable of operating as a regular smartphone (single screen), a tablet like device (dual-screen), and a full fledge desktop computer (docked). <br><br> The project required multiple collaboration from different groups such as Frog Design, Canonical (Ubuntu), and in-house design-development from the ground up based on the Android Operating System. <br><br> As part of the design team, I worked on the dynamic visual interface that transitioned smoothly throughout the different modes in the Operating System. From single screen mode, to dual-screen, all the way into full desktop mode.",
//     //     tags: "<div>UI Design</div><div>UX Prototyping</div><div>Motion Design</div>",
//     // },
// ];

// const sections = document.querySelectorAll('[class^="coreitem section"]');
// let observer = new IntersectionObserver(callback, { rootMargin: "-50% 0px -50% 0px" });
// sections.forEach(i => { observer.observe(i) });

// let currenttitle = "";

// function callback(entries, observer) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             let a = parseInt(entry.target.className.slice(17, 18));
//             // projectbtnlabel.innerHTML = info[a].title;
//             desctitle.innerHTML = info[a].title;
//             // descsubtitle.innerHTML = info[a].subtitle;
//             descbody.innerHTML = info[a].description;
//             desctags.innerHTML = info[a].tags;
//             if (currenttitle !== info[a].title) {
//                 // gsap.fromTo(projectbtn, { scale: 0.7 }, { duration: 1, ease: "elastic.out(2, 0.3)", scale: 1 });
//                 // gsap.fromTo(projectbtn, { top: "10px" }, { duration: 1, ease: "elastic.out(1, 0.3)", top: "20px" });
//                 // gsap.fromTo(projectbtn, { bottom: "40px" }, { duration: 1, ease: "elastic.out(1, 0.3)", bottom: "60px" });
//             }
//             currenttitle = info[a].title;

//             // if (totopbtnison) { hidetotopbtn() }

//             if (!indexbuttonison && !lookingcover) { showindexbutton() }

//             if (a != current_index) {
//                 // console.log("changed current_index to from " + current_index + " to " + a);
//                 // gsap.fromTo(indexbtn, { scale: 0.7 }, { duration: 1, ease: "elastic.out(1, 0.4)", scale: 1 });
//                 current_index = a;
//                 setIndex(a);
//                 // if (current_index > 3 ) {
//                 //     infobutton.style.transform = "scale(0)";
//                 // } else {
//                 //     infobutton.style.transform = "scale(1)";
//                 // }
//             }
//         }
//     });
// }

// Testing play/pause video

const testtarget = document.querySelectorAll('video');
let testobserver = new IntersectionObserver(testcallback);
testtarget.forEach(i => { testobserver.observe(i) });

function testcallback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // console.log(entry.target)
            entry.target.style = "visibility: visible;"
            entry.target.play();
            // console.log("play " + entry.target.src);
        } else {
            entry.target.style = "visibility: hidden;"
            entry.target.pause();
            // console.log("pause " + entry.target.src);
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

const allimg = document.querySelectorAll('img');
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
            // console.log("load img " + entry.target.src);
        }
    })
}


// Testing to lazyload video

const allvideo = document.querySelectorAll('video');
let allvideo_observer = new IntersectionObserver(allvideoCallback, { rootMargin: "0px 0px 2000px 0px" });
allvideo.forEach(i => { allvideo_observer.observe(i) });

function allvideoCallback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const video = entry.target;
            video.src = video.dataset.src;
            allvideo_observer.unobserve(video);
            // console.log("load video " + entry.target.src);
        }
    })
}
