function calculateWatchTime(times) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }

    let totalSeconds = 0;

    for (let time of times) {
        if (typeof time !== "number") {
            return "Invalid";
        }
        totalSeconds = totalSeconds + time;
    }

    let hours = totalSeconds / 3600;
    let minutes = (totalSeconds % 3600) / 60;
    let seconds = totalSeconds % 60;

    hours = parseInt(hours);
    minutes = parseInt(minutes);
    seconds = parseInt(seconds);

    return { hour: hours, minute: minutes, second: seconds };
}

const total = calculateWatchTime([100, 99, 119, 300]);
console.log(total);