document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector("form");
    const email = document.getElementById("email");
    const message = document.querySelector(".message");

    form.addEventListener("submit", function(event) {
        message.classList.remove("correct");
        event.preventDefault();
        const emailValue = email.value.trim();

        if (emailValue === "" || !(emailValue.includes("@"))) {
            message.textContent = "Please enter a valid email address.";
        } else {
            message.classList.add("correct");
            message.textContent = "Thank you! Your email address " + emailValue + " has been added to our mailing list!";
        }
    });
});