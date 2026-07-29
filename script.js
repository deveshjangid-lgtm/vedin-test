// Dynamic luxury clock updater for Devesh Cruise Line
function updateShipClock() {
    const clockElement = document.getElementById('ship-time');
    if (!clockElement) return;

    const now = new Date();
    
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // Cover midnight
    const formattedHours = String(hours).padStart(2, '0');

    // Updates to show luxury dynamic onboard time
    clockElement.textContent = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
}

// Start clock update sequence once page renders
document.addEventListener('DOMContentLoaded', () => {
    updateShipClock();
    setInterval(updateShipClock, 1000);
});