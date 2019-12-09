function helloWorld(){
    alert("Hello, world!");
}
let timer = null;
function changeSize() {
    if(timer == null)
        timer = setInterval(changeSizeby2, 500);
    else
    {
        clearInterval(timer);
        timer = null;
    }
}
function changeSizeby2() {
    var elem = document.getElementById("txtArea");
    var fsize = window.getComputedStyle(elem, null).getPropertyValue("font-size");
    var size = parseInt(fsize);
    elem.style.fontSize = (size + 2) + "pt";
}

function changeFont(chkbx) {
    var elem = document.getElementById("txtArea");
    if(chkbx.checked)
    {
        elem.style.fontWeight = "bold";
        elem.style.color = "green";
        elem.style.textDecoration = "underline";
        document.body.style.backgroundImage = "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
    }
    else
    {
        elem.style.fontWeight = "normal";
        elem.style.color = "black";
        elem.style.textDecoration = "none";
        document.body.style.backgroundImage = "";
    }
}

function malkovitch() {
    var elem = document.getElementById("txtArea");
    var words = elem.value.split(" ");
    var str = "";
    for(let i = 0; i< words.length; i++)
    {
        if(words[i].length >= 5)
            str += " " + "Malkovitch";
        else
            str += " " + words[i];
    }
    elem.value = str.trim();
}
function igpayAtinlay() {
    var strArray = [];
    var removeIdx = [];
    var elem = document.getElementById("txtArea");
    var words = elem.value.split(" ");
    strArray = elem.value.split(" ");
    for(let i = 0; i< words.length; i++) {
        if (words[i].charAt(0).match(/[aeiou]/)) {
            removeIdx.push(i);
            strArray.push(words[i] + "-ay");
        }
        else strArray[i] = words[i] + "-ay";
    }
    var str = "";
    for(let i = removeIdx.length - 1; i >= 0 ; i--)
        strArray.splice(removeIdx[i], 1);
    for(let i = 0; i<strArray.length; i++)
        str += " " + strArray[i];
    elem.value = str.trim();
}