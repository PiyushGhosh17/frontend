import "./App.css";

function App() {
  let today = new Date();
  let currYear = today.getFullYear();
  let currMonth = today.getMonth();
  let getDate = today.getDate();

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const month = [
    "jan",
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

  let ans = [];

  // renderCal(currYear, currMonth);

  const nextMonth = () => {
    currYear = currMonth === 11 ? currYear + 1 : currYear;
    currMonth = currMonth === 11 ? 0 : currMonth + 1;
    // renderCal(currYear, currMonth);
  };

  const prevMonth = () => {
    currYear = currMonth === 0 ? currYear - 1 : currYear;
    currMonth = currMonth === 0 ? 11 : currMonth - 1;
    // renderCal(currYear, currMonth);
  };

  const renderCal = (currYear, currMonth) => {
    for (let i = 0; i < 7; i++) {
      ans.push(day[i]);
    }
  };

  return (
    <>
      <h1>Calendar view</h1>
      <div className="navigation">
        <button className="btn" onClick={prevMonth}>
          {" "}
          &lt;{" "}
        </button>
        <button className="btn" onClick={nextMonth}>
          {" "}
          &gt;{" "}
        </button>
        <h3>{getDate + " " + month[currMonth] + " ," + currYear}</h3>
      </div>

      <div className="calendar">
        <ul id="days"></ul>
      </div>
    </>
  );
}

export default App;
