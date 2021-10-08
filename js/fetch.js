const searchBar = document.getElementById('searchbar_container');
const profileContainer = document.querySelector('.profile_container');

//Search Bar

const submitBtn = document.getElementById('submit');
const input = document.getElementById('input');
const noResult = document.getElementById('no_result');

// submit button

submitBtn.addEventListener('click', () => {
    if (input.value !== '') {
        fetchGit(url + input.value);
    }
});

// Enter button

input.addEventListener(
    'keydown',
    (e) => {
        if (!e) {
            let e = window.event;
        }
        if (e.key == 'Enter') {
            if (input.value !== '') {
                fetchGit(url + input.value);
            }
        }
    },
    false,
);

//Profile Container
const avatar = document.getElementById('avatar');
const userName = document.getElementById('name');
const user = document.getElementById('user');
const date = document.getElementById('date');
const months = [
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
const bio = document.getElementById('bio');

// Stats

const repos = document.getElementById('repos');
const followers = document.getElementById('followers');
const following = document.getElementById('following');

// Footer

const loc = document.getElementById('location');
const page = document.getElementById('page');
const twitter = document.getElementById('twitter');
const company = document.getElementById('company');

// URL
const url = 'https://api.github.com/users/';

// Octacat
fetchGit(url + 'octocat');

// Fetch

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
        noResult.style.display = 'none';
        function checkNull(paramOne, paramTwo) {
            if (paramOne === '' || paramOne === null) {
                paramTwo.style.opacity = 1;
                paramTwo.previousElementSibling.style.opacity = 1;
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
