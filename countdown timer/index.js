const days_elements = document.getElementById("days");
const hours_elements = document.getElementById("hours");
const mins_elements = document.getElementById("mins");
const seconds_elements = document.getElementById("seconds");

const myBirthday = "31 May 2022";

function countdown_timer() {
    const newYearsDate = new Date(myBirthday);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    console.log(days, hours, mins, seconds);

    days_elements.innerText = days;
    hours_elements.innerText = formatTime(hours);
    mins_elements.innerText = formatTime(mins);
    seconds_elements.innerText = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


countdown_timer();

setInterval(countdown_timer, 1000);