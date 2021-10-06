const btnMode = document.getElementById('btn_mode');
const modeIcon = document.getElementById('mode_icon');
const modeText = document.getElementById('mode_text');

let darkMode = false;

// Light Dark switch

btnMode.addEventListener('click', function () {
    if (darkMode === false) {
        darkModeSet();
    } else {
        lightModeSet();
    }
});

// Dark Mode

function darkModeSet() {
    document.body.style.backgroundColor = '#141D2F';
    document.querySelector('.title').style.color = '#fefefe';
    document.getElementById('mode_text').style.color = '#fefefe';
    document.getElementById('input').style.color = '#fefefe';
    document.getElementById('name').style.color = '#fefefe';
    document.getElementById('date').style.color = '#fefefe';
    document.getElementById('searchbar_container').style.backgroundColor =
        '#1e2a47';
    document.querySelector('.profile_container').style.backgroundColor =
        '#1e2a47';
    document.getElementById('bio').style.color = '#fefefe';
    document.querySelector('.profile_info ').style.color = '#fefefe';
    document.querySelector('.profile_stats_container ').style.backgroundColor =
        '#141d2f';
    document.querySelector('.profile_stats_container ').style.color = '#fefefe';
    document.querySelector('.profile_footer ').style.color = '#fefefe';

    mode_icon.src = './assets/icon-sun.svg';
    modeText.innerText = 'LIGHT';
    darkMode = true;
}

// Light Mode

function lightModeSet() {
    document.body.style.backgroundColor = '#f2f2f2';
    document.querySelector('.title').style.color = '#222731';
    document.getElementById('mode_text').style.color = '#4b6a9b';
    document.querySelector('.searchbar_container').style.backgroundColor =
        '#fefefe';
    document.querySelector('.profile_container').style.backgroundColor =
        '#fefefe';
    document.getElementById('input').style.color = '#222731';
    document.getElementById('bio').style.color = '#4b6a9b';
    document.querySelector('#name').style.color = '#2b3442';
    document.querySelector('#user').style.color = '#0079FF';
    document.querySelector('#date').style.color = '#697c9a';
    document.querySelector('.profile_stats_container ').style.backgroundColor =
        '#f6f8ff';
    document.querySelector('.profile_stats_container ').style.color = '#2b3442';
    document.querySelector('.profile_footer ').style.color = '#4b6a9b';

    mode_icon.src = './assets/icon-moon.svg';
    darkMode = false;
    modeText.innerText = 'DARK';
}
