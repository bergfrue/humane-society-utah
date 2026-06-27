/*
    Student Name: Tanner Fox
    File Name: get-involved.js
*/

// Select all tab buttons
const tabButtons = document.querySelectorAll(".gi-tab-btn");

// Select all content panels
const panels = document.querySelectorAll(".gi-panel");

// Add a click event to each tab button
tabButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Get the panel id from the button's data-panel attribute
        const panelId = button.dataset.panel;

        // Remove active class from all buttons
        tabButtons.forEach(tab => {
            tab.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");

        // Hide all panels
        panels.forEach(panel => {
            panel.classList.remove("active");
        });

        // Show the matching panel
        document.getElementById(panelId).classList.add("active");

    });

});