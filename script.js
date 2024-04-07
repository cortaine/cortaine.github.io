'use strict';

function openPopup(imageSrc) {
    var popup = document.getElementById("popup");
    var fullImage = document.getElementById("fullImage");
    var popupContent = document.querySelector(".popup-content"); // Ensure you have this class on your popup content div

    fullImage.src = imageSrc;
    popup.style.display = "block";

    // Add event listener to close the popup when clicking anywhere outside of the image
    document.addEventListener("click", outsideClickHandler);

    // Close the popup when clicking on the popup content as well
    // Ensure this doesn't interfere with other interactive elements inside your popup
    popupContent.addEventListener('click', function (event) {
        event.stopPropagation(); // Important to prevent this click from propagating to the document level
        closePopup();
    }, {
        once: true
    }); // Option to auto-remove this listener after first invocation
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";

    // Remove the event listener when the popup is closed
    document.removeEventListener("click", outsideClickHandler);
}

function outsideClickHandler(event) {
    var popupContent = document.querySelector(".popup-content");
    if (!popupContent.contains(event.target)) {
        closePopup();
    }
}

var rectangles = document.querySelectorAll('.rectangle');
rectangles.forEach(function (rectangle) {
    rectangle.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent propagation to the outsideClickHandler
        var imageSrc = this.querySelector('img').src;
        openPopup(imageSrc);
    });
});