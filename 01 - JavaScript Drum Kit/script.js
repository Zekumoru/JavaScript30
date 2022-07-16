// Handle keyboard events
const keys = {};

document.querySelectorAll('div.key').forEach((key) => {
    keys[key.dataset.key] = key;
});

window.onkeydown = (e) => {
    const key = keys[e.keyCode];
    if (!key) return;

    // Add key animation

    // Play associated sound

};
