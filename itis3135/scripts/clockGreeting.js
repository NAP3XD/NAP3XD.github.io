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