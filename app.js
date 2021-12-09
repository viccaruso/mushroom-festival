// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';
import { findFriendByName } from './data-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
// initialize state

let mushroomCount = 3;

const friendData = [
    {
        name: 'Erich',
        satisfaction: 2
    },
    {
        name: 'Sarah',
        satisfaction: 3
    },
    {
        name: 'Missael',
        satisfaction: 1
    },
    {
        name: 'Soraya',
        satisfaction: 2
    },
];


addFriendButton.addEventListener('click', () => {
    // get the name from the input
    const name = friendInputEl.value;
    // create a new friend object
    const newFriend = {
        name: name,
        satisfaction: Math.ceil(Math.random() * 3)
    };
    // push it into the friends state array, passed in as an argument
    friendData.push(newFriend);
    // reset the input
    friendInputEl.value = '';
    // display all the friends (use a function here)
    displayFriends();
});


addMushroomButton.addEventListener('click', () => {
    if (Math.random() > .5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});

function displayFriends() {
    // clear out the friends in DOM
    while (friendsEl.firstChild) {
        friendsEl.firstChild.remove();
    }
    // for each friend in state . . .
    for (let friend of friendData) {
        const friendEl = renderFriend(friend);

        // this is a clickable list, so . . .
        //     add an event listener to each friend
        friendEl.addEventListener('click', () => {
            const foundFriend = findFriendByName(friend.name, friendData);
            if (foundFriend.satisfaction < 3 && mushroomCount > 0) {
                foundFriend.satisfaction++;
                mushroomCount--;
            }
            displayFriends();
            displayMushrooms();
            
        });

        // append the friendEl to the friends list in DOM
        friendsEl.append(friendEl);
    }

}


function displayMushrooms() {
    // clear out the mushroom div
    while (mushroomsEl.firstChild) {
        mushroomsEl.firstChild.remove();
    }
    for (let i = 0; i < mushroomCount; i++) {
        // for each mushroom in your mushroom state, render and append a mushroom
        mushroomsEl.append(renderMushroom());
    }
}

displayFriends();
displayMushrooms();
