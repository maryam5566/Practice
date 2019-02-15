function toggle(e) { 
    if (e.getAttribute("src") == "./images/Path 1@3x.png") {
        e.src = "./images/Path 2@3x.png";
    }
    else {
        e.src = "./images/Path 1@3x.png";
    }
}

// function toggle(img) {    
//     if (img.getAttribute("src") == "./images/Path 1@3x.png") {
//         img.src = "./images/Path 2@3x.png";
//     }
//     else {
//         img.src = "./images/Path 1@3x.png";
//     }
// }

function hoverRead(e) {
    e.style.boxShadow="0px 2px 10px #35484e";
    e.style.fontSize="17px";
}

function hoverBook(e) {
    e.style.boxShadow="0px 2px 10px #ec1943";
    e.style.fontSize="17px";
}

function hoverOut(e) {
    e.style.boxShadow="none";
    e.style.fontSize="16px";
}

function showText(e) {
    e.style.display="none";
    document.getElementById("moreText").style.display="block";
}

function hideText() {
    document.getElementById("moreText").style.display="none";
    document.getElementById("moreButton").style.display="block";
}