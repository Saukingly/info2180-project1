document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector("form");
    const email = document.getElementById("email");
    const message = document.querySelector(".message");

    form.noValidate = true;

    form.addEventListener("submit", function(event) {
        message.classList.remove("correct");
        event.preventDefault();
        const emailValue = email.value.trim();
        const looksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

        if (!looksValid) {
            message.textContent = "Please enter a valid email address.";
        } else {
            message.classList.add("correct");
            message.textContent = "Thank you! Your email address " + emailValue + " has been added to our mailing list!";
        }
    });
});