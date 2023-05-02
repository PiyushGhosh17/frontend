let today = new Date();

let currYear = today.getFullYear();
let currMonth = today.getMonth();

const month = [
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

const currDate = document.getElementById("currDate");
renderCal(currYear, currMonth);

function nextMonth() {
  currYear = currMonth === 11 ? currYear + 1 : currYear;
  currMonth = currMonth === 11 ? 0 : currMonth + 1;
  renderCal(currYear, currMonth);
}

function prevMonth() {
  currYear = currMonth === 0 ? currYear - 1 : currYear;
  currMonth = currMonth === 0 ? 11 : currMonth - 1;
  renderCal(currYear, currMonth);
}

function addNode(daysTag, li, date) {
  let dates = document.createElement(li);
  let textnode = document.createTextNode(date);
  dates.appendChild(textnode);
  daysTag.appendChild(dates);
}

function renderCal(currYear, currMonth) {
  const daysTag = document.getElementById("days");
  daysTag.innerHTML = "";

  for (let i = 0; i < 7; i++) {
    addNode(daysTag, "li", day[i]);
  }

  let lastDayMonth = new Date(currYear, currMonth + 1, 0).getDate();

  const startingDay = new Date(currYear, currMonth).getDay();
  currDate.innerHTML =
    today.getDate() + " " + month[currMonth] + "," + currYear;

  let daysInaWeek = 7;
  let date = 1;
  for (let i = 0; i < (lastDayMonth + startingDay) / 7; i++) {
    for (let j = 0; j < daysInaWeek; j++) {
      if (i === 0 && j < startingDay) {
        addNode(daysTag, "li", "");
      } else if (date < lastDayMonth + 1) {
        addNode(daysTag, "li", date);
        date++;
      } else {
        addNode(daysTag, "li", "");
      }
    }
  }
}
