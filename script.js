// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");


menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("show");

});


// ================= CLOSE MOBILE MENU =================

const navLinks = document.querySelectorAll(".navbar a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("show");

    });

});


// ================= ACTIVE NAVBAR =================

window.addEventListener("scroll", function () {

    const sections = document.querySelectorAll("section");

    const scrollPosition = window.scrollY + 150;


    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        const sectionId = section.getAttribute("id");


        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(function (link) {

                link.classList.remove("active");

            });


            const activeLink =
                document.querySelector(
                    '.navbar a[href="#' + sectionId + '"]'
                );


            if (activeLink) {

                activeLink.classList.add("active");

            }

        }

    });

});


// ================= FOOTER YEAR =================

const yearElement = document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


// ================= TYPING EFFECT =================

const typingElement =
    document.querySelector(".typing-text");


const words = [

    "Freelancer",

    "Web Developer",

    "Data Entry Specialist",

    "IT Enthusiast"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    if (!typingElement) return;


    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );


        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );


        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex++;


            if (
                wordIndex ===
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    const speed =
        deleting ? 60 : 110;


    setTimeout(
        typeEffect,
        speed
    );

}


typeEffect();


// ================= MOUSE PARALLAX =================

const hero =
    document.querySelector(".home");


const profile =
    document.querySelector(".home-image");


if (hero && profile) {

    hero.addEventListener(
        "mousemove",
        function (event) {

            if (window.innerWidth <= 850) {
                return;
            }


            const x =
                (event.clientX /
                    window.innerWidth -
                    0.5) * 2;


            const y =
                (event.clientY /
                    window.innerHeight -
                    0.5) * 2;


            profile.style.transform =
                `translate(
                    ${x * 8}px,
                    ${y * 8}px
                )`;

        }
    );


    hero.addEventListener(
        "mouseleave",
        function () {

            profile.style.transform =
                "translate(0,0)";

        }
    );

}


// ================= SCROLL REVEAL =================

const revealElements =
    document.querySelectorAll(
        ".skill-box, .project-card, .service-card, .info-box, .about-text"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show-reveal"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(
    function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "all 0.7s ease";

        observer.observe(element);

    }
);


// ================= SCROLL REVEAL STYLE =================

const revealStyle =
    document.createElement("style");


revealStyle.innerHTML = `

    .show-reveal {

        opacity: 1 !important;

        transform:
            translateY(0) !important;

    }

`;


document.head.appendChild(
    revealStyle
);