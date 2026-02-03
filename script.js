let text="You are my happiness, my heart, my forever. I love you so much ❤️";
let index = 0;

function sayYes() {
    document.getElementById("questionBox").style.display = "none";
    document.getElementById("loveBox").style.display = "block";
    document.getElementById("music").play();
    typeEffect();
    }

    function sayNo() {
    document.getElementById("questionBox").style.display = "none";
    document.getElementById("sadBox").style.display = "block";
}

function typeEffect(){
    if(index < text.length){
        document.querySelector(".typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}

function toggleNight(){
    document.body.classList.toggle("dark");
}

function zoom(img){
    document.getElementById("zoomBox").classList.remove("hidden");
    document.getElementById("zoomImg").src = img.src;
}
function closeZoom(){
    document.getElementById("zoomBox").classList.add("hidden");
}

function moveNo(){
    let btn = document.getElementById("noBtn");
    let x = Math.random()*200 - 100;
    let y = Math.random()*200 - 100;
    btn.style.transform = `translate(${x}px,${y}px)`;
}