# Airline Booking System

This repository contains the front-end structure for a comprehensive modern Airline Booking System. 
The old cruise line files have been flushed and replaced with this foundation.

## Current Progress

- [x] **Home Page (`index.html`)**: Features a Hero Banner, Flight Search Widget, and Popular Destinations.
- [x] **Flight Search Results (`search.html`)**: Displays available flights, durations, and pricing.
- [x] **Global Styling (`styles.css`)**: Premium airline aesthetic using sky blue and cloud white themes.
- [x] **Interactions (`script.js`)**: Foundational logic for navigating the flight selection process.

## Recommended Build Order (Roadmap)

To build out the full application you requested, follow this order and create these specific HTML files in this repository root:

1. `fare-details.html` (Fare Details Popup & Rules)
2. `traveller-details.html` (Passenger Information Form)
3. `seat-selection.html` (Interactive aircraft seat map)
4. `add-ons.html` (Extra baggage, meals, lounge access)
5. `booking-summary.html` (Total fare, tax breakdown)
6. `payment.html` (Credit Card, Net Banking integration)
7. `confirmation.html` (Booking successful, PNR generated)
8. `e-ticket.html` (Boarding pass preview, QR Code)
9. `manage-booking.html` (Cancel/Change flight portal)
10. `flight-status.html` (Live flight tracker)

## How to add the remaining pages:
Create a new `.html` file for each page listed above. Link them together using standard `<a>` tags or JavaScript redirects (e.g., from `search.html` to `fare-details.html`). Reuse the `styles.css` file to ensure the header, footer, and buttons look consistent across the entire app!