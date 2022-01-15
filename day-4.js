const time = "01:59PM";

function convertTo24HrsFormat(time) {
    // Split time
    // 12:23PM -> [12, 23]
    const splitTime = time.replace(/AM|PM/g, "").split(":");
    const mins = splitTime[1].length === 1 ? `0${splitTime[1]}` : splitTime[1];

    // Convert AM
    if (time.endsWith("AM")) {
        if (splitTime[0] === "12") {
            return `00:${mins}`;
        } else {
            return splitTime[0].length === 1
                ? `0${splitTime[0]}:${mins}`
                : `${splitTime[0]}:${mins}`;
        }
    } else {
        // Convert PM
        if (splitTime[0] === "12") {
            return `12:${mins}`;
        } else {
            return `${parseInt(splitTime[0]) + 12}:${mins}`;
        }
    }
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`);
