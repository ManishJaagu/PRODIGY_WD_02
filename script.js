let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let lapContainer = document.querySelector(".laps");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("lap-timer").addEventListener("click", () => {
    let lapTime = `${formatTime(hours)} : ${formatTime(minutes)} : ${formatTime(seconds)} : ${formatMilliseconds(milliseconds)}`;
    let lapElement = document.createElement("div");
    lapElement.innerText = lapTime;
    lapContainer.appendChild(lapElement);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000";
    lapContainer.innerHTML = "";  // to clear the lap times
});

function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    timeRef.innerHTML = `${formatTime(hours)} : ${formatTime(minutes)} : ${formatTime(seconds)} : ${formatMilliseconds(milliseconds)}`;
}

function formatTime(unit) {
    return unit < 10 ? "0" + unit : unit;
}

function formatMilliseconds(ms) {
    if (ms < 10) {
        return "00" + ms;
    } else if (ms < 100) {
        return "0" + ms;
    } else {
        return ms;
    }
}
