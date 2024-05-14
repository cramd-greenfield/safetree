// Import react
import React from 'react';

// Use JavaScript to place information for the calendar
// Use Html methods to access tags
const daysContainer = document.querySelector(".days"),
nextBtn = document.querySelector(".next-btn"),
prevBtn = document.querySelector(".prev-btn"),
month = document.querySelector(".month");

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
console.log(currentYear);

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
    month.innerHTML = `${month[currentMonth]} ${currentYear}`
}




// Create component function
const Calendar = () => {
    // Adding return with parenthesis. 
    // Note to self: Clarify the difference of implicit and explicit again
    // Placing elements for calendar

    /* Important Tags 
    header
    weekdays
    */
    
    return (
        <div class="container">
            <div class="calendar">
                <div class="header">
                    <div class="month">May, 2024</div>
                    <div class="btn">
                        <div class="btn today-btn">
                            <i class="fas fa-calendar-day"></i>
                        </div>
                        <div class="btn prev-btn">
                            <i class="fas fa-chevron-left"></i>
                        </div>
                        <div class="btn next-btn">
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div className="weekdays">
                    <div className="day">Sun</div>
                    <div className="day">Mon</div>
                    <div className="day">Tue</div>
                    <div className="day">Wed</div>
                    <div className="day">Thu</div>
                    <div className="day">Fri</div>
                    <div className="day">Sat</div>
                </div>
                <div className="days">
                    {/*Prev month days */}
                    <div className="day">28</div>
                    <div className="day">29</div>
                    <div className="day">30</div>

                    {/*Curr month days */}
                    <div className="day">1</div>
                    <div className="day">2</div>
                    <div className="day">3</div>
                    <div className="day">4</div>
                    <div className="day">5</div>
                    <div className="day">6</div>
                    <div className="day">7</div>

                    {/**Next month Days*/}
                    <div className="day next"></div>
                </div>
            </div>
        </div>
    );
}
// Export component function
export default Calendar;
