/* =========================================
   MIEL — ELEGANT BIRTHDAY EXPERIENCE
========================================= */

let currentScreen = 1;

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");


/* =========================================
   BACKGROUND PARTICLES
========================================= */

function createParticles() {

    const container =
        document.getElementById("particles");

    for (let i = 0; i < 35; i++) {

        const particle =
            document.createElement("div");

        particle.className = "particle";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            8 + Math.random() * 12 + "s";

        particle.style.animationDelay =
            Math.random() * 8 + "s";

        const size =
            2 + Math.random() * 3;

        particle.style.width =
            size + "px";

        particle.style.height =
            size + "px";

        container.appendChild(particle);
    }
}


/* =========================================
   MUSIC
========================================= */

function startMusic() {

    music.play()
        .then(() => {

            musicButton.textContent = "♫";

        })
        .catch(() => {

            console.log(
                "Music requires user interaction."
            );

        });
}


function toggleMusic() {

    if (music.paused) {

        music.play();

        musicButton.textContent = "♫";

    } else {

        music.pause();

        musicButton.textContent = "♪";

    }
}


/* =========================================
   SCREEN TRANSITIONS
========================================= */

function showScreen(number) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

        });


    const target =
        document.getElementById(
            `screen${number}`
        );


    if (!target) return;


    target.classList.add("active");

    currentScreen = number;


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function nextScreen() {

    if (currentScreen < 6) {

        showScreen(
            currentScreen + 1
        );

    }
}


/* =========================================
   OPEN ENVELOPE
========================================= */

function openLetter() {

    const envelope =
        document.getElementById("envelope");


    envelope.classList.add("open");


    startMusic();


    setTimeout(() => {

        showScreen(2);

    }, 1300);
}


/* =========================================
   CANDLE
========================================= */

function blowCandle() {

    const flame =
        document.getElementById("flame");

    const button =
        document.getElementById("wishButton");

    const result =
        document.getElementById("wishResult");


    flame.classList.add("out");


    button.disabled = true;

    button.style.opacity = "0.5";


    result.textContent =
        "Wish received. ✦";


    createCelebration();


    setTimeout(() => {

        showScreen(5);

    }, 2200);
}


/* =========================================
   GOLDEN CELEBRATION
========================================= */

function createCelebration() {

    for (let i = 0; i < 45; i++) {

        const particle =
            document.createElement("div");

        particle.className =
            "particle";

        particle.style.position =
            "fixed";

        particle.style.left =
            "50%";

        particle.style.top =
            "50%";

        particle.style.width =
            "4px";

        particle.style.height =
            "4px";

        particle.style.background =
            "#d8bb82";

        particle.style.opacity =
            "0.9";

        particle.style.transition =
            "all 1.8s ease";

        particle.style.zIndex =
            "20";

        document.body.appendChild(
            particle
        );


        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            100 +
            Math.random() * 300;


        setTimeout(() => {

            particle.style.transform =
                `
                translate(
                    ${Math.cos(angle) * distance}px,
                    ${Math.sin(angle) * distance}px
                )
                scale(0)
                `;

            particle.style.opacity = "0";

        }, 30);


        setTimeout(() => {

            particle.remove();

        }, 2000);
    }
}


/* =========================================
   INITIALIZATION
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        createParticles();

    }
);