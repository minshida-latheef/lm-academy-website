
// LM ACADEMY JAVASCRIPT

// 1. Welcome message
console.log("Welcome to LM Academy!");

// 2. Contact form
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const message = document.getElementById("formMessage");

        message.textContent =
            "Thank you " + name + "! Your form is ready.";

        message.style.color = "#8C2C3F";

        contactForm.reset();

    });

}

// 3. Current year
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// 4. Gallery image click
const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        window.open(image.src, "_blank");

    });

});
