'use strict';

// Define reusable variables
var popup = document.getElementById("popup");
var fullImage = document.getElementById("fullImage");
var popupContent = document.querySelector(".popup-content");

function openPopup(imageSrc) {
    fullImage.src = imageSrc;
    popup.style.display = "block";
    document.addEventListener("click", outsideClickHandler);

    // Close the popup when clicking on the popup content
    popupContent.addEventListener('click', closePopupOnce, {
        once: true
    });
}

function closePopup() {
    popup.style.display = "none";
    document.removeEventListener("click", outsideClickHandler);
}

function closePopupOnce(event) {
    event.stopPropagation();
    closePopup();
}

function outsideClickHandler(event) {
    if (!popupContent.contains(event.target)) {
        closePopup();
    }
}

var images = document.querySelectorAll('img');

images.forEach(function(img) {
    img.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});


// Attach click event listeners to rectangles
var rectangles = document.querySelectorAll('.rectangle');
rectangles.forEach(function (rectangle) {
    rectangle.addEventListener('click', function (event) {
        event.stopPropagation();
        var imageSrc = this.querySelector('img').src;
        openPopup(imageSrc);
    });
});