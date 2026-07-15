// ============================
// ELEMENTS
// ============================

const enterBtn = document.getElementById("enterBtn");
const musicBtn = document.getElementById("musicBtn");

const welcome = document.getElementById("welcome");
const mainSite = document.getElementById("mainSite");

const bgMusic = document.getElementById("bgMusic");

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

const giftCards = document.querySelectorAll(".gift-card");

// ============================
// COUNTDOWN
// ============================

function getBirthdayDate() {

const now = new Date();

let year = now.getFullYear();

let birthday = new Date(
    year,
    6,
    17,
    0,
    0,
    0
);

if(now > birthday){

    birthday = new Date(
        year + 1,
        6,
        17,
        0,
        0,
        0
    );

}

return birthday;

}

function updateCountdown(){

const target = getBirthdayDate().getTime();

const now = new Date().getTime();

const difference = target - now;

const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
);

const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
);

const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
);

const seconds = Math.floor(
    (difference / 1000) % 60
);

document.getElementById("days").textContent =
    String(days).padStart(2,"0");

document.getElementById("hours").textContent =
    String(hours).padStart(2,"0");

document.getElementById("minutes").textContent =
    String(minutes).padStart(2,"0");

document.getElementById("seconds").textContent =
    String(seconds).padStart(2,"0");

}

updateCountdown();

setInterval(
updateCountdown,
1000
);

// ============================
// ENTER WEBSITE
// ============================

enterBtn.addEventListener(
"click",
() => {

    welcome.classList.add("hidden");

    mainSite.classList.remove("hidden");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


);

// ============================
// MUSIC BUTTON
// ============================

musicBtn.addEventListener(
"click",
() => {

    if(bgMusic.paused){

        bgMusic.play();

        musicBtn.textContent =
            "Pause Music 🎵";

    }
    else{

        bgMusic.pause();

        musicBtn.textContent =
            "Play Music 🎵";

    }

}

);


// ============================
// FINAL SURPRISE
// ============================

surpriseBtn.addEventListener(
"click",
() => {

    const password = prompt(
        "💖 Enter Our Anniversary Date For Your Final Surprise 🌚:"
    );

    if(password === "12012026"){

        window.location.href =
        "surprise.html";

    }
    else if(password !== null){

        alert(
            "❌ Wrong Code Baby. Try Again 💕"
        );

    }

}

);

// =======================
// FLOWER TRAIL
// =======================

function createFlower(x,y){

const flower =
document.createElement("div");

flower.innerHTML = "❤️";

flower.classList.add(
    "flower-trail"
);

flower.style.left =
x + "px";

flower.style.top =
y + "px";

document.body.appendChild(
    flower
);

setTimeout(()=>{

    flower.remove();

},2000);

}

document.addEventListener(
"mousemove",
(e)=>{

    createFlower(
        e.clientX,
        e.clientY
    );

}

);

document.addEventListener(
"touchstart",
(e)=>{

    const touch =
    e.touches[0];

    createFlower(
        touch.clientX,
        touch.clientY
    );

}

);