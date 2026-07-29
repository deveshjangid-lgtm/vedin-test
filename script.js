// Basic interaction script for the Airline Booking System

function selectFlight() {
    alert("Flight selected! Redirecting to fare details and seat selection...");
    // Future implementation: window.location.href = 'fare-details.html';
}

document.addEventListener('DOMContentLoaded', () => {
    // Add logic to handle search form submission
    const searchForm = document.querySelector('form');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            // Let the form naturally redirect to search.html for now
            console.log("Searching for flights...");
        });
    }
});