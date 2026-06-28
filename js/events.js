// events.js - Sapana Gautam
// shows and hides event detail cards when the toggle button is clicked

var toggleButtons = document.querySelectorAll('.events-toggle');

toggleButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var detail = this.nextElementSibling;
        detail.classList.toggle('open');
    });
});
