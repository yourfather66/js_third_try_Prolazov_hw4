let amountOfDays;
do {
  amountOfDays = +prompt(`Enter amount of days`, `1`);
} while (!Number.isInteger(amountOfDays));

const hoursInDay = 24;
const secondsInHours = 60;
let secondsInDay = amountOfDays * hoursInDay * secondsInHours;
alert(`${secondsInDay} seconds in a ${amountOfDays} days`);
