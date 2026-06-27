/*
    Student Name: Tanner Fox
    File Name: adopt.js
*/

// Select all filter buttons
const filterButtons = document.querySelectorAll(".adopt-filter-btn");

// Select all pet cards
const petCards = document.querySelectorAll(".adopt-pet-card");

// Add click event to each filter button
filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Determine which filter was selected
        const filter = button.dataset.filter;

        // Update active button
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        // Show or hide cards
        petCards.forEach(card => {

            if (filter === "all" || card.classList.contains(filter)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

});