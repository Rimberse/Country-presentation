// SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

function changeSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slideshow__slide");
    var dots = document.getElementsByClassName("slideshow__dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slideshow__dot--active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " slideshow__dot--active";
}

// MORE & LESS BUTTON
function ReadMoreLessFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("more-less-btn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Lire plus \<i class=\"btn-text__icon fas fa-angle-double-down\"\>\<\/i\>";                     // escaping special characters
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Lire moins \<i class=\"btn-text__icon fas fa-angle-double-up\"\>\<\/i\>";
        moreText.style.display = "inline";
        btnText.style.marginTop = "3rem";
    }
}