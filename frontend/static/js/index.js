import Content from "./views/Content.js";
import Intro from "./views/Intro.js";
import End from "./views/End.js";
import Gallery from "./views/Gallery.js";
import {gsap, toArray, ScrollTrigger, ScrollToPlugin, MorphSVGPlugin} from "./libs/gsap-public/esm/all.js";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MorphSVGPlugin);
// import {ScrollTrigger} from "./libs/gsap-public/minified/ScrollTrigger.min.js";


// gsap.registerPlugin(ScrollTrigger);

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        {path: "/intro", view: Intro},
        {path: "/end", view: End},
        {path: "/home", view: Gallery},
        {path: "/content", view: Content}
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
};


window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);


        }
    });

    router();
});


document.addEventListener('DOMContentLoaded', () => {
    let views = gsap.utils.toArray(".view"),
        scrollTween;

    //SCROLL scale

    const tl = gsap.timeline();

    let animation_duration = "linear";
    let time_duration = 1;
    tl.to(".scale-1--steak", {
        y: "+=98.75vh",
        x: "-20.7vw",
        scale: 1.1,
        // scrub: true,
        // overwrite: true,

        // immediateRender: true,
        ease: animation_duration,
        onComplete: console.log("Completed"),
        onUpdate: console.log("Update"),

        // transformOrigin: "50% 50%",
        scrollTrigger: {
            // immediateRender: true,
            start: "center center",
            end: "bottom top",
            trigger: ".scale-1",
            // pin: true,
            // duration: time_duration,
            scrub: true,
            // markers: true,
            overwrite: true,
            // id: `scale-${i}`
            delay: 0,
            // lazy: false,

        }
    });
    console.log(tl);


    tl.to(".scale-2--lottie", {
        opacity: 1,
        inertia: false,
        overwrite: true,
        immediateRender: true,
        ease: animation_duration,
        // delay:0.5,
        duration: time_duration,

        scrollTrigger: {
            // immediateRender: true,

            start: "top 1",
            end: "center top",
            trigger: ".scale-2",
            // pin: true,
            // duration: time_duration,
            // scrub: true,
            // markers: true,
            overwrite: true,
            // id: `scale-${i}`
            // delay: 5,
            onEnter: () => scale1_fadeout(tl, animation_duration, time_duration),
            // lazy: false,
            // onLeave: () => scale1_fadeout(tl, animation_duration, time_duration),
        }
    });

    function scale1_fadeout(tl, animation_duration, time_duration) {
        tl.to(".scale-1--steak", {
            // onStart: () => scale2_fadein(tl, animation_duration, time_duration),
            opacity: 0,
            inertia: false,
            overwrite: true,
            immediateRender: true,
            delay: time_duration,
            ease: animation_duration,
            onComplete: () => LottiePlay_phase1(),
        })
    };

    function LottiePlay_phase1() {
        let lottie = document.querySelector(".scale-2--lottie");
        lottie.play();
        lottie.addEventListener("frame", (evt) => {

                if (evt.detail.frame > 190) {
                    if (evt.detail.frame < 195) {
                        console.log(evt);
                        lottie.pause();
                    }
                }

            }
        );
    }

    tl.to(".scale-2--lottie", {
        y: "+=100vh",
        scrub: true,
        // overwrite: true,

        // immediateRender: true,
        ease: animation_duration,
        onUpdate: () => LottiePlay_phase2(),
        onComplete: () => LottieGsap_phase3(),
        // transformOrigin: "50% 50%",
        scrollTrigger: {
            // immediateRender: true,
            start: "center center",
            end: "bottom top",
            trigger: ".scale-2",
            // pin: true,
            // duration: time_duration,
            scrub: true,
            // markers: true,
            overwrite: true,
            // id: `scale-${i}`
            delay: 0,
            // lazy: false,

        }
    });

    function LottiePlay_phase2() {
        let lottie = document.querySelector(".scale-2--lottie");
        lottie.play();
        lottie.addEventListener("frame", (evt) => {

                if (evt.detail.frame > 340) {
                    if (evt.detail.frame < 345) {
                        console.log(evt);
                        lottie.pause();
                    }
                }

            }
        );
    }

    function LottieGsap_phase3() {
        tl.fromTo(".scale-2--lottie", {
            y: "100vh",
            scrub: true,
            ease: animation_duration,
        }, {
            y: "+=100vh",
            scrub: true,
            ease: animation_duration,
            onUpdate: () => LottiePlay_phase3(),
            scrollTrigger: {
                start: "center center",
                end: "bottom top",
                trigger: ".scale-2--bis",
                scrub: true,
                overwrite: true,
                delay: 0,
            }
        });
    }

    function LottiePlay_phase3() {
        let lottie = document.querySelector(".scale-2--lottie");
        lottie.play();
        lottie.addEventListener("frame", (evt) => {
                if (evt.detail.frame > 598) {
                    lottie.pause();
                    if (lottie.getLottie().isPaused == true) {
                        scale2_fadeout();
                    }
                }
            }
        );
    }

    function scale2_fadeout() {
        tl.to(".scale-2--lottie", {
            opacity: 0,
            inertia: false,
            overwrite: true,
            duration: time_duration,
            ease: animation_duration,
        })
    };
    tl.from(".scale-3--images", {
        y: "-101.3vh",
        x: "-20.7vw",
        scrub: true,
        ease: animation_duration,
        onComplete: () => steak_explosion(),

        scrollTrigger: {
            start: "top bottom",
            end: "center center",
            trigger: ".scale-3",
            scrub: true,
            overwrite: true,
            delay: 0,
        }
    });

    function steak_explosion() {
        document.querySelector(".scale-3--agriculture").classList.add('active');
        document.querySelector(".scale-3--consommation").classList.add('active');
        document.querySelector(".scale-3--embalage").classList.add('active');
        document.querySelector(".scale-3--supermarche").classList.add('active');
        document.querySelector(".scale-3--transformation").classList.add('active');
        document.querySelector(".scale-3--transport").classList.add('active');
        document.querySelector(".scale-3--outline").classList.add('active');
    }

    tl.to('.scale-3--agricultureImage---path', {
            morphSVG: '.scale-4--illustration---path',
            // y: '-=100vh',
            onStart: () => scrolldown_scale4(),
            scrollTrigger: {
                start: "center center",
                end: "bottom top",
                trigger: ".scale-3",
                pin: ".scale-3--agricultureImage---svg",
                scrub: true,
                markers: true,
                overwrite: true,
                delay: 0,
            }
        }
    );

    function scrolldown_scale4() {
        document.querySelector('.scale-3--agricultureImage').classList.add('active');
        // morphSVG: '.scale-3--agricultureImage---path',
    };

// just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):

//SCROLL scale END


//SCROLL SNAP

    function goToSection(i) {
        scrollTween = gsap.to(window, {
            scrollTo: {y: i * innerHeight, autoKill: false},
            delay: 0,
            duration: time_duration,
            onComplete: () => scrollTween = null,
            ease: animation_duration,
        });
    }


    views.forEach((view, i) => {
        ScrollTrigger.create({
            trigger: view,
            onEnter: () => goToSection(i)
        });

        ScrollTrigger.create({
            trigger: view,
            start: "bottom bottom",
            onEnterBack: () => goToSection(i)
        });
    });


// just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
    ScrollTrigger.create({
        start: 0,
        end: "max",
        inertia: false,
        ease: animation_duration,
        duration: time_duration,
        overwrite: true,
        scrub: false,
        snap: 1 / (views.length - 1),
        fastScrollEnd: true,
        lazy: false,
    })

//SCROLL SNAP END

// Ecosia picto

});

