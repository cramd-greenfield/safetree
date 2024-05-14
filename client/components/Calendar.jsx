// Import react
import React from 'react';
 
// Import the renderCalendar function
import Script from '../helpers/calendarScript.js';

// Create component function
const Calendar = () => {

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
        
                </div>
            </div>
            <script>
                <Script />
            </script>
        </div>
    );
}

// Export component function
export default Calendar;
