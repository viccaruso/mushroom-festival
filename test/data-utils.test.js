// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findFriendByName } from '../data-utils.js';
const test = QUnit.test;

test('findFriendByName should take in a string and array of objects and return the object with a name property that matches the string', (expect) => {
    //Arrange

    const nameArr = [
        {
            name: 'Vic'
        },
        {
            name: 'Taco'
        },
        {
            name: 'Pepper'
        },
        {
            name: 'Shannon'
        },
        {
            name: 'Paul'
        },
        {
            name: 'Cindy'
        },
    ];
    // Set up your arguments and expectations
    const expected = {
        name: 'Paul'
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findFriendByName('Paul', nameArr);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected, 'The object returned had a name property matching the function arg');
});
