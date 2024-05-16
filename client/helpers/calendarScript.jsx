// import React, { useState, useEffect } from 'react';

// const CalendarScript = () => {
//     // State variables
//     const [currentMonth, setCurrentMonth] = useState();
//     const [currentYear, setCurrentYear] = useState();
//     const [daysContainer, setDaysContainer] = useState();
//     const [monthElement, setMonthElement] = useState();
//     const [todayBtn, setTodayBtn] = useState();

//     // Array holding the months
//     const months = [
//         "January",
//         "February",
//         "March",
//         "April",
//         "May",
//         "June",
//         "July",
//         "August",
//         "September",
//         "October",
//         "November",
//         "December"
//     ];

//     // Array holding days
//     const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//     useEffect(() => {
//         // Get the current date
//         const date = new Date();

//         // Set current month and year
//         setCurrentMonth(date.getMonth());
//         setCurrentYear(date.getFullYear());

//         // Assign elements
//         setDaysContainer(document.querySelector(".days"));
//         setMonthElement(document.querySelector(".month"));
//         setTodayBtn(document.querySelector(".today-btn"));

//         // Render the calendar
//         renderCalendar();
//     }, []);

//     // Function to render the days 
//     function renderCalendar() {
//         // Get prev month, current month, and next month days
//         const firstDay = new Date(currentYear, currentMonth, 1);
//         const lastDay = new Date(currentYear, currentMonth + 1, 0);
//         const lastDayIndex = lastDay.getDay();
//         const lastDayDate = lastDay.getDate();
//         const prevLastDate = new Date(currentYear, currentMonth, 0);
//         const prevLastDayDate = prevLastDate.getDate();
//         const nextDays = 7 - lastDayIndex - 1;

//         // Update current year and month in header
//         monthElement.innerHTML = `${months[currentMonth]} ${currentYear}`;

//         // Update days html
//         let daysHtml = "";

//         // Prev days html
//         for (let x = firstDay.getDay(); x > 0; x--) {
//             daysHtml += `<div className="day prev">${prevLastDayDate - x + 1}</div>`;
//         }

//         // Current month days
//         for (let i = 1; i <= lastDayDate; i++) {
//             if (i === new Date().getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()) {
//                 daysHtml += `<div className="day today">${i}</div>`;
//             } else {
//                 daysHtml += `<div className="day">${i}</div>`;
//             }
//         }

//         // Next Month days
//         for (let j = 1; j <= nextDays; j++) {
//             daysHtml += `<div className="day next">${j}</div>`
//         }

//         // Update days container
//         daysContainer.innerHTML = daysHtml;

//         // Hide today button if it's already the current month
//         hideTodayBtn();
//     }

//     // Event listeners
//     function hideTodayBtn() {
//         if (currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()) {
//             todayBtn.style.display = "none";
//         } else {
//             todayBtn.style.display = "flex";
//         }
//     }

//     // Handle next month button click
//     function handleNextMonthClick() {
//         setCurrentMonth(currentMonth + 1);
//         if (currentMonth + 1 > 11) {
//             setCurrentMonth(0);
//             setCurrentYear(currentYear + 1);
//         }
//         renderCalendar();
//     }

//     // Handle previous month button click
//     function handlePrevMonthClick() {
//         setCurrentMonth(currentMonth - 1);
//         if (currentMonth - 1 < 0) {
//             setCurrentMonth(11);
//             setCurrentYear(currentYear - 1);
//         }
//         renderCalendar();
//     }

//     // Handle today button click
//     function handleTodayBtnClick() {
//         setCurrentMonth(new Date().getMonth());
//         setCurrentYear(new Date().getFullYear());
//         renderCalendar();
//     }

//     return (
//         <React.Fragment>
//             {/* Button to go to previous month */}
//             <div className="btn prev-btn" onClick={handlePrevMonthClick}>
//                 <i className="fas fa-chevron-left"></i>
//             </div>
//             {/* Button to go to next month */}
//             <div className="btn next-btn" onClick={handleNextMonthClick}>
//                 <i className="fas fa-chevron-right"></i>
//             </div>
//             {/* Button to go to today */}
//             <div className="btn today-btn" onClick={handleTodayBtnClick}>
//                 <i className="fas fa-calendar-day"></i>
//             </div>
//         </React.Fragment>
//     );
// }

// export default CalendarScript;


import React, { useState, useEffect } from 'react';

const CalendarScript = () => {
    // Define state variables
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    // Define the months array
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    // Define event handlers
    const handleNextMonthClick = () => {
        setCurrentMonth(currentMonth + 1);
        if (currentMonth + 1 > 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        }
        renderCalendar();
    };

    const handlePrevMonthClick = () => {
        setCurrentMonth(currentMonth - 1);
        if (currentMonth - 1 < 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        }
        renderCalendar();
    };

    const handleTodayBtnClick = () => {
        setCurrentMonth(new Date().getMonth());
        setCurrentYear(new Date().getFullYear());
        renderCalendar();
    };

    // Function to render the calendar
    const renderCalendar = () => {
          // Get the first and last day of the current month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

    // Initialize an array to hold the JSX elements for each day
    let days = [];

    // Loop through the days of the month
    for (let date = new Date(firstDayOfMonth); date <= lastDayOfMonth; date.setDate(date.getDate() + 1)) {
        // Determine if the current date is in the current month
        const isInCurrentMonth = date.getMonth() === currentMonth;

        // Highlight the current day
        const isCurrentDay = date.toDateString() === new Date().toDateString();

        // Add a CSS class for styling
        const classNames = ['day'];
        if (!isInCurrentMonth) classNames.push('other-month');
        if (isCurrentDay) classNames.push('current-day');

        // Push JSX element for the day to the days array
        days.push(
            <div className={classNames.join(' ')} key={date}>
                {date.getDate()}
            </div>
        );
    }

    // Return the JSX for the calendar grid
    return (
        <div className="calendar-grid">
            {days}
        </div>
    );
    };

    // useEffect to call renderCalendar when currentMonth or currentYear changes
    useEffect(() => {
        renderCalendar();
    }, [currentMonth, currentYear]);

    // Define a function to generate the JSX for the days of the month
const renderDaysOfMonth = () => {
    // Get the number of days in the current month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Create an array to store the JSX elements for the days
    const daysJSX = [];

    // Loop over the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
        // Check if the current day is today
        const isToday = i === new Date().getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear();

        // Construct the JSX for the day
        const dayJSX = (
            <div className={`day ${isToday ? 'today' : ''}`} key={i}>
                {i}
            </div>
        );

        // Push the JSX element for the day to the array
        daysJSX.push(dayJSX);
    }

    // Return the array of JSX elements for the days
    return daysJSX;
};

    // Return JSX for the calendar component
    return (
        <div className="calendar">
        <div className="month">{months[currentMonth]} {currentYear}</div>
        <div className="days">{renderDaysOfMonth()}</div>
        <div className="buttons">
            <button className="prev-btn" onClick={handlePrevMonthClick}>
                <i className="fas fa-chevron-left"></i>
            </button>
            <button className="next-btn" onClick={handleNextMonthClick}>
                <i className="fas fa-chevron-right"></i>
            </button>
            <button className="today-btn" onClick={handleTodayBtnClick}>
                <i className="fas fa-calendar-day"></i>
            </button>
        </div>
    </div>
    );
};

export default CalendarScript;
