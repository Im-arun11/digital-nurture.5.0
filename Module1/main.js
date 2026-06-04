//1
console.log("Welcome to the community Portal");
window.addEventListener("load",function(){
    alert("Welcome to the Community portal")
});
//2
const eventName = "Tree Plantation";
const eventDate = "10 June 2026";
let availableSeats = 50;
console.log(`Event: ${eventName}`);
console.log(`Date: ${eventDate}`);
console.log(`Available Seats: ${availableSeats}`);
availableSeats--;
console.log(`Seats remaining after registration: ${availableSeats}`);
//3
const events=[
    {
        name: "Tree Plantation",
        date: "2026-06-10",
        seats: 20
    },
    {
        name: "Blood Donation",
        date: "2025-01-10",
        seats: 15
    },
    {
        name: "Sports Meet",
        date: "2026-06-20",
        seats: 0
    }
];
const today =new Date();
events.forEach(event => {
    let eventDate =new Date(event.date);
    if (eventDate > today && event.seats > 0) {
        console.log(
            `${event.name} | Date: ${event.date} | Seats: ${event.seats}`
        );
    } else {
        console.log(`${event.name} is not available`);
    }
});

try {
    let selectedEvent = events[0];
    if (selectedEvent.seats <= 0) {
        throw new Error("No seats available");
    }
    selectedEvent.seats--;
    console.log(
        `Registration successful for ${selectedEvent.name}`
    );
} catch (error) {
    console.log("Registration Error: " + error.message);
}