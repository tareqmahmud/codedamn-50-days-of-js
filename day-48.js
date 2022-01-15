function formatDuration(seconds) {
    // your code here
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds - hours * 3600) / 60);
    const sec = Math.floor(seconds - hours * 3600 - mins * 60);

    if (hours && !mins && !sec) {
        return hours > 1 ? `${hours} hours` : `${hours} hour`;
    } else if (mins && !hours && !sec) {
        return mins > 1 ? `${mins} minutes` : `${mins} minute`;
    } else if (sec && !mins && !hours) {
        return sec > 1 ? `${sec} seconds` : `${sec} second`;
    }
}

formatDuration(62);
