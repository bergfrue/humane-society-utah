const form =
document.getElementById("email-form");

const message =
document.getElementById("confirmation");

form.addEventListener("submit", function(e){

    e.preventDefault();

    message.textContent =
    "Thank you for subscribing!";

});
