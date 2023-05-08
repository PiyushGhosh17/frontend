import React, { useState } from "react";
import "./App.css";

let today = new Date();
let currYear = today.getFullYear();
let currMonth = today.getMonth();
let getDate = today.getDate();

function App() {
  const [month, setMonth] = useState(currMonth);
  const [year, setYear] = useState(currYear);
  const [todaysDate, setTodaysDate] = useState(getDate);

  const monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Augest",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  const datesArray = (month, year) => {
    let ans = [];

    for (let i = 0; i < 7; i++) {
      ans.push(day[i]);
    }

    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    const startingDay = new Date(year, month).getDay();

    let dayInWeek = 7;
    let date = 1;
    for (let i = 0; i < (lastDayOfMonth + startingDay) / 7; i++) {
      for (let j = 0; j < dayInWeek; j++) {
        if (i === 0 && j < startingDay) {
          ans.push(" ");
        } else if (date < lastDayOfMonth + 1) {
          ans.push(date);
          date++;
        } else {
          ans.push(" ");
        }
      }
    }
    console.log({ ans });
    return ans;
  };
  const nextMonth = () => {
    setYear(month === 11 ? year + 1 : year);
    setMonth(month === 11 ? 0 : month + 1);
  };

  const prevMonth = () => {
    setYear(month === 0 ? year - 1 : year);
    setMonth(month === 0 ? 11 : month - 1);
  };

  const handleChangeDate = (date) => {
    setTodaysDate(date);
  };

  return (
    <>
      <h1>Calendar view</h1>
      <div className="navigation">
        <button className="btn" onClick={prevMonth}>
          &lt;
        </button>
        <button className="btn" onClick={nextMonth}>
          &gt;
        </button>
        <h3>{todaysDate + " " + monthArray[month] + " ," + year}</h3>
        <input
          className="inp"
          type="text"
          name="month"
          placeholder="Enter Month no: "
          onChange={(e) => setMonth(e.target.value)}
        />
        <input
          type="text"
          name="year"
          placeholder="Enter Year "
          className="inp"
          onChange={(e) => setYear(e.target.value)}
        />
      </div>

      <div className="calendar">
        <ul id="days">
          {datesArray(month, year).map((date) => {
            return (
              <li id="date" onClick={() => handleChangeDate(date)}>
                {date}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;