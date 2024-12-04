const scriptTest = () => alert("TEST TEST TEST");

// scriptTest();

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

function showPolygonName() { 
    const polygonNames = { 
        1: "Monogon", 
        2: "Digon", 
        3: "Trigon", 
        4: "Tetragon", 
        5: "Pentagon", 
        6: "Hexagon", 
        7: "Heptagon", 
        8: "Octagon", 
        9: "Nonagon", 
        10: "Decagon" 
    }; 
    let input = document.getElementById("number-input").value; 
    let numberOfSides = Math.round(Math.abs(parseFloat(input))); 
    if (numberOfSides >= 0 && numberOfSides <= 10) { 
        alert(`A polygon with ${numberOfSides} sides is called a ${polygonNames[numberOfSides]}.`); 
    } else { 
        alert("Number of sides not supported."); 
    } 
} 
document.addEventListener("DOMContentLoaded", function() { document.getElementById("submit-button").addEventListener("click", showPolygonName); });

document.getElementById('coachForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const style = document.getElementById('style').value;
    let coach = '';

    switch (style) {
        case 'vert':
            coach = 'Tony Hawk';
            break;
        case 'street':
            coach = 'Nyjah Huston';
            break;
        case 'park':
            coach = 'Dante Pratt';
            break;
        default:
            coach = 'Please select a style.';
    }

    document.getElementById('result').textContent = coach;
});


document.addEventListener("DOMContentLoaded", () => { const inventory = { 'Real Decks': Math.floor(Math.random() * 100), 'Ace AF1 Trucks': Math.floor(Math.random() * 100), 'Bronson Bearings': Math.floor(Math.random() * 100), 'Girl Decks': Math.floor(Math.random() * 100), 'Spitfire Wheels': Math.floor(Math.random() * 100) }; function displayInventory() { const inventoryTable = document.getElementById('inventory-table'); inventoryTable.innerHTML = ''; for (const item in inventory) { const row = document.createElement('tr'); row.innerHTML = `<td>${item}</td><td>${inventory[item]}</td><td> <button onclick="updateInventory('${item}', 1)">Add</button> <button onclick="updateInventory('${item}', -1)">Remove</button> </td>`; inventoryTable.appendChild(row); } } window.updateInventory = function(item, amount) { if (inventory[item] + amount >= 0) { inventory[item] += amount; } else { alert('Cannot have negative inventory.'); } displayInventory(); }; displayInventory(); });

function addItem(type) { 
    let itemDetails; if (type === 'skateboard') { 
        const name = document.getElementById('skateboard-name').value; 
        itemDetails = `Skateboard "${name}"`; 
    } else if (type === 'helmet') { 
        const size = document.getElementById('helmet-size').value; 
        itemDetails = `Helmet (Size: ${size})`; 
    } else if (type === 'wheels') { 
        const size = document.getElementById('wheels-size').value; 
        itemDetails = `Wheels (Size: ${size})`; 
    } 
    alert(`${itemDetails} added to cart!`); 
}


function submitContactForm() { 
    const name = document.getElementById('contact-name').value; 
    const message = document.getElementById('contact-message').value; alert(`Message from "${name}": ${message}`); 
}

function checkInventory() {
    const prices = {
        "Real Deck": 6,
        "Ace AF1 Trucks": 4,
        "Bronson Bearings": 8,
        "Girl Deck": 7
    };
    const selectedItem = document.getElementById("inventory-select").value; 
    const itemQuantity = inventory[selectedItem] || 0;
    document.getElementById("output").innerText = `${selectedItem} in stock: ${itemQuantity}`;
}

document.getElementById("check-inventory-button").addEventListener("click", checkInventory);