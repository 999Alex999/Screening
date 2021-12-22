let dateElement = document.getElementById("TODAYS DATE");

var months = [
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
  "December",
];
var d = new Date();
var monthName = months[d.getMonth()]; // "July" (or current month)

dateElement.innerHTML =
  "Valid " + monthName + " " + d.getDate() + ", " + d.getFullYear();

let hour = Math.floor(Math.random() * 55);
if(hour < 10){ 
  hour = "0" + hour; 
}
document.getElementById("TIME").innerHTML =
  "from 6:" + hour + " a.m. to 11:59 p.m.";
