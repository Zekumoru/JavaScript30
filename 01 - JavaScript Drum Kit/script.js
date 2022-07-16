
const keys = {};

document.querySelectorAll('div.key').forEach((key) => {
    keys[key.dataset.key] = {
        div: key,
        audio: document.querySelector(`audio[data-key='${key.dataset.key}']`)
    };

    key.addEventListener('transitionend', () => {
        key.classList.remove('playing');
    });
});

window.onkeydown = (e) => {
    const key = keys[e.keyCode];
    if (!key) return;

    key.div.classList.add('playing');
    key.audio.cloneNode().play();
};
