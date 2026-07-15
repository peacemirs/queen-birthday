// =========================
// ELEMENTS
// =========================

const loveBtn =
document.getElementById("loveBtn");

const promiseBtn =
document.getElementById("promiseBtn");

const loveNote =
document.getElementById("loveNote");

const promiseText =
document.getElementById("promiseText");

const bgMusic =
document.getElementById("bgMusic");

const voiceNote =
document.getElementById("voiceNote");

const musicToggle =
document.getElementById("musicToggle");

// =========================
// LOVE NOTE TOGGLE
// =========================

if(loveBtn){

loveBtn.addEventListener(
    "click",
    () => {

        if(
            loveNote.style.display ===
            "block"
        ){

            loveNote.style.display =
            "none";

        }
        else{

            loveNote.style.display =
            "block";

        }

    }
);

}

// =========================
// PROMISE TOGGLE
// =========================

if(promiseBtn){

promiseBtn.addEventListener(
    "click",
    () => {

        if(
            promiseText.style.display ===
            "block"
        ){

            promiseText.style.display =
            "none";

        }
        else{

            promiseText.style.display =
            "block";

        }

    }
);

}

// =========================
// MUSIC BUTTON
// =========================

if(musicToggle && bgMusic){

musicToggle.addEventListener(
    "click",
    () => {

        if(bgMusic.paused){

            bgMusic.play();

            musicToggle.textContent =
            "🎵 Pause Music";

        }
        else{

            bgMusic.pause();

            musicToggle.textContent =
            "🎵 Play Music";

        }

    }
);

}

// =========================
// VOICE NOTE
// =========================

if(voiceNote && bgMusic){

voiceNote.addEventListener(
    "play",
    () => {

        bgMusic.pause();

        if(musicToggle){

            musicToggle.textContent =
            "🎵 Play Music";

        }

    }
);

voiceNote.addEventListener(
    "ended",
    () => {

        bgMusic.play();

        if(musicToggle){

            musicToggle.textContent =
            "🎵 Pause Music";

        }

    }
);

}

// =======================
// TYPEWRITER
// =======================

const text =
"Baby, thank you for being part of my life. I hope this birthday becomes one of your happiest memories. 💖";

let index = 0;

const typewriter =
document.getElementById("typewriter");

function typeText(){

if(index < text.length){

    typewriter.innerHTML +=
    text.charAt(index);

    index++;

    setTimeout(
        typeText,
        60
    );

}

}

if(typewriter){

typeText();

}

// =======================
// PHOTO SLIDESHOW
// =======================

const slideshow =
document.getElementById("slideshow");

const slides = [

"images/slide1.jpg",
"images/slide2.jpg",
"images/slide3.jpg",
"images/slide4.jpg",
"images/slide5.jpg",
"images/slide6.jpg",
"images/slide7.jpg",
"images/slide8.jpg",
"images/slide9.jpg",
"images/slide10.jpg",
"images/slide11.jpg",
"images/slide12.jpg",
"images/slide13.jpg",
"images/slide14.jpg",
"images/slide15.jpg",
"images/slide16.jpg",
"images/slide17.jpg",
"images/slide18.jpg",
"images/slide19.jpg",
"images/slide20.jpg",
"images/slide21.jpg",
"images/slide22.jpg",
"images/slide23.jpg",
"images/slide24.jpg",
"images/slide25.jpg",
"images/slide26.jpg",
"images/slide27.jpg",

];

let currentSlide = 0;

if(slideshow){

setInterval(() => {

    currentSlide++;

    if(
        currentSlide >= slides.length
    ){

        currentSlide = 0;

    }

    slideshow.src =
    slides[currentSlide];

},4000);

}

// =======================
// SECRET HEARTS
// =======================

const hearts =
document.querySelectorAll(
".secret-heart"
);

hearts.forEach(heart => {

heart.addEventListener(
    "click",
    () => {

        alert(
            heart.dataset.message
        );

    }
);

});

// =======================
// FIREWORKS
// =======================

const canvas =
document.getElementById("fireworks");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

const particles = [];

class Particle{

constructor(x,y,color){

    this.x = x;
    this.y = y;

    this.color = color;

    this.radius =
    Math.random()*3 + 2;

    this.speedX =
    (Math.random()-0.5)*8;

    this.speedY =
    (Math.random()-0.5)*8;

    this.life = 100;
}

update(){

    this.x += this.speedX;

    this.y += this.speedY;

    this.life--;

}

draw(){

    ctx.beginPath();

    ctx.arc(
        this.x,
        this.y,
        this.radius,
        0,
        Math.PI*2
    );

    ctx.fillStyle =
    this.color;

    ctx.fill();

}

}

function createFirework(){

const x =
Math.random()*canvas.width;

const y =
Math.random()*canvas.height*0.6;

const colors = [

    "#ff69b4",
    "#ffd700",
    "#87ceeb",
    "#ffffff",
    "#ffb6c1"

];

const color =
colors[
    Math.floor(
        Math.random()*colors.length
    )
];

for(let i=0;i<40;i++){

    particles.push(

        new Particle(
            x,
            y,
            color
        )

    );

}

}

function animateFireworks(){

ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
);

particles.forEach(
    (particle,index)=>{

        particle.update();

        particle.draw();

        if(
            particle.life <= 0
        ){

            particles.splice(
                index,
                1
            );

        }

    }
);

requestAnimationFrame(
    animateFireworks
);

}

animateFireworks();

/* Launch Fireworks */

setInterval(
createFirework,
1200
);

window.addEventListener(
"resize",
()=>{

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;

}

);

// ===============================
// SEND MESSAGE (FORMSUBMIT)
// ===============================

const form =
document.getElementById("messageForm");

const sendBtn =
document.getElementById("sendBtn");

const success =
document.getElementById("successMessage");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

sendBtn.classList.add("fly");

sendBtn.innerHTML="✈️ Flying To Samir...";

const rect=
sendBtn.getBoundingClientRect();

let count=0;

const interval=
setInterval(()=>{

createHeartTrail(

rect.left+40+count*12,

rect.top+20-count*6

);

count++;

if(count>15){

clearInterval(interval);

}

},70);

// Wait for animation

setTimeout(()=>{

fetch(form.action,{

method:"POST",

body:new FormData(form)

})

.then(()=>{

form.style.display="none";

success.style.display="block";

})

.catch(()=>{

alert("Oops! Something went wrong.");

});

},2200);

});

}

// ==========================
// HEART TRAIL
// ==========================

function createHeartTrail(x,y){

const heart=
document.createElement("div");

heart.innerHTML="💖";

heart.className="heartTrail";

heart.style.left=x+"px";

heart.style.top=y+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},1200);

}