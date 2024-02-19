let today = new Date();
let day = today.getDay();
let date = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("date").innerHTML = ` ${days[day]}, ${months[month]} ${date}, ${year}`;