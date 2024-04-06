'use strict';

// Function to open the popup with full image
function openPopup(imageSrc) {
    var popup = document.getElementById("popup");
    var fullImage = document.getElementById("fullImage");
    fullImage.src = imageSrc;
    popup.style.display = "block";

    // Add event listener to close the popup when clicking anywhere outside of the image
    document.addEventListener("click", outsideClickHandler);
}

// Function to close the popup
function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";

    // Remove the event listener when the popup is closed
    document.removeEventListener("click", outsideClickHandler);
}

// Function to handle clicks outside of the popup
function outsideClickHandler(event) {
    var popupContent = document.querySelector(".popup-content");
    if (!popupContent.contains(event.target)) {
        closePopup();
    }
}

// Add event listeners to each rectangle for opening popup on click
var rectangles = document.querySelectorAll('.rectangle');
rectangles.forEach(function (rectangle) {
    rectangle.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent propagation to the outsideClickHandler
        var imageSrc = this.querySelector('img').src;
        openPopup(imageSrc);
    });
});