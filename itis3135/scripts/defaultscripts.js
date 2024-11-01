const scriptTest = () => alert("TEST TEST TEST");

scriptTest();

function displayDateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dayOfWeek = now.toLocaleString('default', { weekday: 'long' });
    const date = now.toLocaleDateString([], { day: 'numeric', month: 'long', year: 'numeric' });
    document.getElementById('date-time').textContent = `Today is ${time} on ${dayOfWeek}, ${date}`;
}

function greetUser() {
    const userName = document.getElementById('user-name').value;
    const userMood = document.getElementById('user-mood').value;
    const companyName = "Nifty Penguin Boardshop and Indoorpark";
    document.getElementById('greeting').textContent = `The ${companyName} welcomes you, Skater ${userName}! We're glad you are doing ${userMood}!`;
}

window.onload = displayDateTime;

function showPolygonName() { const polygonNames = { 1: "Monogon", 2: "Digon (or Bigon)", 3: "Trigon (or Triangle)", 4: "Tetragon (or Quadrilateral)", 5: "Pentagon", 6: "Hexagon", 7: "Heptagon", 8: "Octagon", 9: "Nonagon", 10: "Decagon" // Add more if inclined 
    }; let input = document.getElementById("number-input").value; let numberOfSides = Math.round(Math.abs(parseFloat(input))); if (numberOfSides >= 0 && numberOfSides <= 10) { alert(`A polygon with ${numberOfSides} sides is called a ${polygonNames[numberOfSides]}.`); } else { alert("Number of sides not supported."); } } document.addEventListener("DOMContentLoaded", function() { document.getElementById("submit-button").addEventListener("click", showPolygonName); });