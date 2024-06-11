console.log("welcome")

let hours = document.getElementById("h");
let minutes = document.getElementById("m");
console.log(hours.innerHTML)

setInterval(() => {
    const date = new Date();
    let hour = date.getHours();
    if (hour > 12) {
        hour = hour - 12;
    }
    hours.innerHTML = hour;
    minute = date.getMinutes();
    if (minute < 10) {
        minute = "0" + minute;
    }
    minutes.innerHTML = minute;

}, 1000)
