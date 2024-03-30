const express = require('express');
const app = express();

//EVENT TYPES
const eventHandlers = {
    event1: handleGuerra,
    event2: handleViaggio,
    event3: handleLegge,
    // Add more event types and their corresponding handling functions
};

//FUNZIONA
function fireEvent(eventType, expirationHours) {
    console.log(`Event '${eventType}' fired.`);

    // Calculate the expiration time in milliseconds
    const expirationTime = expirationHours * 60 * 60 * 1000;

    // Set a timeout to trigger the handling function after the expiration time
    setTimeout(() => {
        console.log(`Event '${eventType}' expired.`);
        const handleExpiration = eventHandlers[eventType];
        if (handleExpiration) {
            handleExpiration();
        } else {
            console.log(`No handling function found for event '${eventType}'.`);
        }
    }, expirationTime);
}

function handleGuerra() {
    console.log('Handling expiration of event1.');
    // Perform specific actions for event1 expiration
}

function handleViaggio() {
    console.log('Handling expiration of event2.');
    // Perform specific actions for event2 expiration
}

function handleLegge() {
    console.log('Handling expiration of event3.');
    // Perform specific actions for event3 expiration
}

// Example usage
fireEvent('event1', 1);
fireEvent('event2', 2);
fireEvent('event3', 3);
fireEvent('event4', 4 );

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server Time Is ${convertToHMS(currentTime)}`);
});

