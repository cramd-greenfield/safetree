
// Use JavaScript to place information for the calendar
// Use Html methods to access tags
const daysContainer = document.querySelector(".days"),
nextBtn = document.querySelector(".next-btn"),
prevBtn = document.querySelector(".prev-btn"),
month = document.querySelector(".month"),
// Adding a new variable to hold the current day
todayBtn = document.querySelector(".today-btn");

// Array holding the months
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

// Array holding days
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Get the current date
// Use the new Date() method
const date = new Date();

// Get the current month
const currentMonth = date.getMonth();

// Get the current year
const currentYear = date.getFullYear();
//console.log(currentYear);

// Function to render the days 
function renderCalendar() {

    // Get prev month, current month, and next month days
    date.setDate(1);
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const lastDayIndex = lastDay.getDay();
    const lastDayDate = lastDay.getDate();
    const prevLastDate = new Date(currentYear, currentMonth, 0);
    const prevLastDayDate = prevLastDate.getDate();
    const nextDays = 7 - lastDayIndex - 1;

    // Update current year and month in header
    month.innerHTML = `${months[currentMonth]} ${currentYear}`;

    // Update days html
    let days = "";

    // Prev days html
    // Use for loop
    // Loop backwards
    for (let x = firstDay.getDay(); x > 0; x--) {
        // Assign days to be a div tag 
        // Use assignment operator
        // Div tag will hold the previous last date and subtract from the number
        days += `<div class="day prev">${prevLastDayDate - x + 1}</div>`;
    }

    // Current month days
    // Loop forwards
    for (let i = 1; i <= lastDayDate; i++) {
        // Check if it's today then add today class
        // If i is the new date and get date
        // and currentMonth is the new date and get month
        if (i === new Date().getDate() &&
         currentMonth === new Date().getMonth() &&
          currentYear === new Date().getFullYear()) {
            // If date, month, and year matches
            // Assign a div tag to days and place the current day inside
            days += `<div class="day today">${i}</div>`;
          } else {
            // Don't add the current day
            days += `<div class="day ">${i}</div>`;

          }
    }

    // Next Month days
    // Use for loop
    // Loop forwards
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="day next">${j}</div>`
    }
    // Placing hide today btn here
    // Run this function with every calendar render 
    hideTodayBtn();
    daysContainer.innerHTML = days
}

// Invoking the function
renderCalendar();

// Add an event listener on the buttons
// A click event
// Use addEventListener() method
nextBtn.addEventListener("click", () => {
    // Increase the current month by one
    currentMonth++;

    // If currentMonth is greater than 11
    if (currentMonth > 11) {
        // Set the currentMonth to 0
        currentMonth = 0;
        // Increase the currentYear by 1
        currentYear++;
    }
    // Render calendar
    // Call function
    renderCalendar();
})

// Add event listener for the previous month button
prevBtn.addEventListener("click", () => {
    // Decrease the current month by 1
    currentMonth--;

    // If the current month is less than 0
    if (currentMonth < 0) {
        // Set current month to 11
        currentMonth = 11;
        // Decrease the current year by 1  
        currentYear--;
    }
    // Render the calendar
    // Call the function
    renderCalendar();
})

// Go to today
// Adding event listener
// Button to take the user to current day month and year
todayBtn.addEventListener("click", () => {
    // Set month and year to current
    currentMonth = date.getMonth();
    currentYear = date.getFullYear();
    // Re-render the calendar
    renderCalendar();
})

// Hide today btn if its already current month and vise versa
function hideTodayBtn() {
    // If current month is new Date() and getMonth()
    // If current year is new Date() and getFullYear()
    if (currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()) {
        // Use style and display method
        // Set today btn to none
        todayBtn.style.display = "none";
    } else {
        todayBtn.style.display = "flex";
    }
}

