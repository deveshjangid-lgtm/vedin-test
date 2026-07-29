// Global Airports List for Autocomplete
const airports = [
    "New York (JFK)", "New York (LGA)", "Newark (EWR)",
    "London (LHR)", "London (LGW)",
    "Paris (CDG)", "Paris (ORY)",
    "Tokyo (HND)", "Tokyo (NRT)",
    "Sydney (SYD)", "Dubai (DXB)", "Amsterdam (AMS)",
    "Los Angeles (LAX)", "San Francisco (SFO)", "Chicago (ORD)",
    "Toronto (YYZ)", "Singapore (SIN)", "Frankfurt (FRA)"
];

// Initialize Autocomplete
function setupAutocomplete(inputId, suggestionsId) {
    const input = document.getElementById(inputId);
    const suggestionsBox = document.getElementById(suggestionsId);
    if (!input || !suggestionsBox) return;

    input.addEventListener('input', function() {
        const val = this.value;
        suggestionsBox.innerHTML = '';
        if (!val) {
            suggestionsBox.classList.remove('active');
            return;
        }

        const matches = airports.filter(airport => airport.toLowerCase().includes(val.toLowerCase()));
        
        if (matches.length > 0) {
            suggestionsBox.classList.add('active');
            matches.forEach(match => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.innerHTML = `<strong>${match.substr(0, val.length)}</strong>${match.substr(val.length)}`;
                div.addEventListener('click', () => {
                    input.value = match;
                    suggestionsBox.innerHTML = '';
                    suggestionsBox.classList.remove('active');
                });
                suggestionsBox.appendChild(div);
            });
        } else {
            suggestionsBox.classList.remove('active');
        }
    });

    document.addEventListener('click', (e) => {
        if (e.target !== input) {
            suggestionsBox.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupAutocomplete('from', 'from-suggestions');
    setupAutocomplete('to', 'to-suggestions');
});

// Handle Flight Search Results with Open-Source Mock Integration
function handleFlightSearch() {
    const urlParams = new URLSearchParams(window.location.search);
    const from = urlParams.get('from');
    const to = urlParams.get('to');
    const date = urlParams.get('date');

    const infoBox = document.getElementById('search-info');
    const list = document.getElementById('flights-list');
    
    if (!from || !to) {
        if(infoBox) infoBox.innerHTML = 'Please enter origin and destination.';
        if(list) list.innerHTML = '';
        return;
    }

    if (infoBox) {
        infoBox.innerHTML = `Flights from <span>${from}</span> to <span>${to}</span> on <span>${date || 'Any Date'}</span>`;
    }

    // Since many live flight APIs (like AviationStack or Skyscanner) require private API keys,
    // we use a sophisticated mock fetch to represent pulling from an open-source flight database.
    // In a production app, we would replace this URL with the actual endpoint, e.g. fetch('https://api.aviationstack.com/v1/flights...')
    
    setTimeout(() => {
        const mockData = generateLiveFlightMocks(from, to);
        if (list) {
            list.innerHTML = '';
            if (mockData.length === 0) {
                list.innerHTML = '<p>No flights found for this route.</p>';
                return;
            }
            mockData.forEach(flight => {
                const item = document.createElement('div');
                item.className = 'flight-item';
                item.innerHTML = `
                    <div>
                        <div class="flight-time">${flight.departureTime} - ${flight.arrivalTime}</div>
                        <div class="flight-route">${flight.airline} • ${flight.duration} • ${flight.stops}</div>
                    </div>
                    <div class="flight-price">$${flight.price}</div>
                    <button class="btn-primary" style="height: 40px; padding: 0 20px;">Book Now</button>
                `;
                list.appendChild(item);
            });
        }
    }, 1500); // Simulate API latency
}

function generateLiveFlightMocks(from, to) {
    const airlines = ["VedinAir Premium", "AeroGlobal", "SkyLink Express", "JetStream"];
    const flights = [];
    const count = Math.floor(Math.random() * 4) + 3; // 3 to 6 flights

    for(let i=0; i<count; i++) {
        const h1 = Math.floor(Math.random() * 12) + 1;
        const m1 = Math.random() > 0.5 ? '00' : '30';
        const h2 = Math.floor(Math.random() * 12) + 1;
        const m2 = Math.random() > 0.5 ? '15' : '45';
        
        flights.push({
            airline: airlines[Math.floor(Math.random() * airlines.length)],
            departureTime: `${h1}:${m1} AM`,
            arrivalTime: `${h2}:${m2} PM`,
            duration: `${Math.floor(Math.random() * 4) + 4}h ${Math.floor(Math.random() * 60)}m`,
            stops: Math.random() > 0.7 ? "1 Stop" : "Non-stop",
            price: Math.floor(Math.random() * 500) + 200
        });
    }
    return flights.sort((a,b) => a.price - b.price);
}