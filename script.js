document.addEventListener("DOMContentLoaded", function () {
    const heart = document.getElementById("heart");

    // Redirect to another page when the heart is clicked
    heart.addEventListener("click", function() {
        window.location.href = "loveMessage.html";  // Redirect to a new page
    });
});
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;  // Reset to first slide
    }
    slides[slideIndex - 1].style.display = "block";  // Show current slide
    setTimeout(showSlides, 2000);  // Change image every 2 seconds
}

showSlides();  // Call function to start the slideshow
