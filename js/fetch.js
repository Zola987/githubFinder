const searchBar = document.getElementById('searchbar_container');
const profileContainer = document.querySelector('.profile_container');

//Search Bar

let submitBtn = document.getElementById('submit');
let input = document.getElementById('input');

// submit button

submitBtn.addEventListener('click', () => {
    if (input.value !== '') {
        fetchGit(url + input.value);
    }
});

// Enter button

input.addEventListener('keydown', (e) => {
    if (!e) {
        let e = window.event;
    }
    if (e.key == 'Enter') {
        if (input.value !== '') {
            fetchGit(url + input.value);
        }
    }
});

// let noResult

//Profile Container
let avatar = document.getElementById('avatar');
let userName = document.getElementById('name');
let user = document.getElementById('user');
let date = document.getElementById('date');
let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
let bio = document.getElementById('bio');

// Stats

let repos = document.getElementById('repos');
let followers = document.getElementById('followers');
let following = document.getElementById('following');

// Footer

let loc = document.getElementById('location');
let page = document.getElementById('page');
let twitter = document.getElementById('twitter');
let company = document.getElementById('company');

// URL
const url = 'https://api.github.com/users/';

//Fetch

function fetchGit(git) {
    fetch(git)
        .then((response) => response.json())
        .then((data) => {
            profileUpdate(data);
        })
        .catch((error) => {
            throw error;
        });
}

function profileUpdate(data) {
    if (data.message !== 'Not Found') {
        // noResult.style.display = 'none'
        function checkNull(paramOne, paramTwo) {
            if (paramOne === '' || paramOne === null) {
                paramTwo.style.opacity = 0.5;
                paramTwo.previousElementSibling.style.opacity = 0.5;
                return 'Not available';
            } else {
                return `${paramOne}`;
            }
        }

        //API values
        avatar.src = `${data.avatar_url}`;
        userName.innerText = `${data.name}`;
        user.innerText = `@${data.login}`;
        datesegments = data.created_at.split('T').shift().split('-');
        date.innerText = `Joined ${datesegments[2]} ${
            months[datesegments[1] - 1]
        } ${datesegments[0]}`;
        bio.innerText =
            data.bio == null ? 'This profile has no bio.' : `${data.bio}`;
        repos.innerText = `${data.public_repos}`;
        followers.innerText = `${data.followers}`;
        following.innerText = `${data.following}`;
        loc.innerText = checkNull(data.location, loc);
        page.innerText = checkNull(data.blog, page);
        twitter.innerText = checkNull(data.twitter_username, twitter);
        company.innerText = checkNull(data.company, company);
        searchBar.classList.toggle('active');
        profileContainer.classList.toggle('active');
    } else {
        noResult.style.display = 'block';
    }
}
