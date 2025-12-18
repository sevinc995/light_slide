"use strict";
$(document).ready(function () {

});
// var modal = document.getElementById("myModal");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");

// var images = document.getElementsByClassName("myImg");

// for (let i = 0; i < images.length; i++) {
//     images[i].onclick = function () {
//         modal.style.display = "block";
//         modalImg.src = this.src;
//         captionText.innerHTML = this.alt;
//     };
// }

// var span = document.getElementsByClassName("close")[0];

// span.onclick = function () {
//     modal.style.display = "none";
// };

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var images = document.getElementsByClassName("myImg");
var currentIndex = 0;

// şəkilə klik
for (let i = 0; i < images.length; i++) {
    images[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        currentIndex = i;
    };
}

// close
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
};

// prev
document.querySelector(".prev").onclick = function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
};

// next
document.querySelector(".next").onclick = function () {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
};