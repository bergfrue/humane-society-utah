// contact.js - Sapana Gautam
// toggles the directions panel open and closed
// handles contact form submission

var directionsBtn = document.getElementById('directions-btn');
var directionsPanel = document.getElementById('directions-panel');

directionsBtn.addEventListener('click', function() {
    directionsPanel.classList.toggle('open');
});

var contactForm = document.getElementById('contact-form');
var confirmMsg = document.getElementById('contact-confirm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('contact-name').value;
    confirmMsg.textContent = 'Thanks ' + name + '! We will get back to you soon.';
    contactForm.reset();
});
