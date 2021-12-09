export default function findFriendByName(name, friends) {
    // iterate through the friends
    // when you find a friend with the correct name, return that friend
    for (let item of friends) {
        if (item.name === name) {
            return item;
        }
    }
}