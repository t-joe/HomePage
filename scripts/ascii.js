"use strict";
var speed = 250;
var aset = "";
var timer = null;
var i = 0;
var ia;
function setAnimation(animation) {
    document.getElementById("animationArea").value = ANIMATIONS[animation];
    aset = ANIMATIONS[animation];
}

function setFontsize(size) {
    document.getElementById("animationArea").style.fontSize = size;
}

function setSpeed(elem) {
    if(elem.checked){
        speed = 50;
    }
    else{
        speed = 250;
    }
    clearInterval(timer);
    timer = setInterval(playAnimation, speed);
}

function toggleButton(btn) {
    if(btn.getAttribute("id") == "start") {
        btn.disabled = true;
        document.getElementById("stop").disabled = false;
        document.getElementById("animation").disabled = true;
        ia = aset.split("=====\n");
        if(timer == null)
        {
            timer = setInterval(playAnimation, speed);
        }
    }
    else
    {
        clearInterval(timer);
        timer = null;
        btn.disabled = true;
        document.getElementById("start").disabled = false;
        document.getElementById("animation").disabled = false;
        document.getElementById("animationArea").value = aset;
    }
}

function playAnimation() {
    document.getElementById("animationArea").value = ia[i++];
    if(i == ia.length){
        i = 0;
    }
}