// Handle keyboard events
const keys = {};

document.querySelectorAll('div.key').forEach((key) => {
    keys[key.dataset.key] = key;
    key.addEventListener('transitionend', () => {
        key.classList.remove('playing');
    })
});

window.onkeydown = (e) => {
    const key = keys[e.keyCode];
    if (!key) return;

    // Add key animation
    key.classList.add('playing');

    // Play associated sound

};
