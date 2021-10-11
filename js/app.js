const btnMode = document.getElementById('btn_mode');
const modeIcon = document.getElementById('mode_icon');
const modeText = document.getElementById('mode_text');
const body = document.querySelector('body');

// Light Dark switch

btnMode.addEventListener('click', (e) => {
    if (body.classList.value === 'light') {
        body.classList.remove('light');
        modeText.innerHTML = 'LIGHT';
        modeIcon.src = './assets/icon-sun.svg';
    } else {
        body.classList.add('light');
        modeText.innerHTML = 'DARK';
        modeIcon.src = './assets/icon-moon.svg';
    }
});
