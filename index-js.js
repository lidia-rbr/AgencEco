/**
 * Smooth scroll when navigation links clicked
 */
document.addEventListener('click', function(event) {
    // Check if the clicked element is an anchor with an href attribute that starts with "#"
    if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
        event.preventDefault();

        // Get the target element
        let targetId = event.target.getAttribute('href');
        let targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Calculate the target's offset from the top of the page
            let targetOffsetTop = targetElement.offsetTop;

            // Smoothly scroll to the target element
            window.scrollTo({
                top: targetOffsetTop,
                behavior: 'smooth'
            });
        }
    }
});

let slideIndex = 1;
document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
});
/**
 * Triggered on click on bar icon to display full menu
 */
function displayMenu() {
    let myLinks = document.getElementById('myLinks');
    let myHeader = document.getElementById('myHeader');
    let logo = document.getElementById('headerLogo');
    let barIcon = document.getElementById('barIcon');
    if (myLinks.style.display === "block") {
        closeToggledMenu();
    } else {
        // Set initial state for transitions
        myLinks.style.display = 'block';
        myLinks.style.maxHeight = '0';
        myLinks.style.overflow = 'hidden';
        myLinks.style.transition = 'max-height 0.3s ease-in-out';
        logo.style.visibility = 'hidden';
        barIcon.style.color = 'white';
        barIcon.style.transition = 'color 0.3s ease-in-out';
        myHeader.style.backgroundColor = '#053B44';
        myLinks.offsetHeight;
        myLinks.style.maxHeight = myLinks.scrollHeight + "px";
    }
}

/**
 * Hide toggled menu and display header
 */
function closeToggledMenu() {
    let myLinks = document.getElementById('myLinks');
    let myHeader = document.getElementById('myHeader');
    let logo = document.getElementById('headerLogo');
    let barIcon = document.getElementById('barIcon');

    barIcon.style.color = '#053B44';
    logo.style.visibility = 'visible';
    myHeader.style.backgroundColor = 'white';
    myLinks.style.maxHeight = '0';
    setTimeout(() => {
        myLinks.style.display = 'none';
    }, 500);
}

/**
 * Reset form inputs and display message (demo purpose only)
 */
function displayConfirmationMessage() {
    // Select all text input elements and clear their values
    document.querySelectorAll('input[type="text"]').forEach(function(input) {
        input.value = '';
    });
    document.querySelectorAll('textarea').forEach(function(textarea) {
        textarea.value = '';
    });
    // Display an alert message
    window.alert("Message sent");
}

/**
 * Display next slide of the slideshow
 * @param {Number} n
 */
function plusSlides(n) {
    showSlides(slideIndex += n);
}

/**
 * Display previous slide of the slideshow
 * @param {Number} n
 */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/**
 * Display slide n
 * @param {Number} n
 */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}