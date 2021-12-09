// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderMushroom } from '../render-utils.js';

const test = QUnit.test;

test('renderMushroom should return a DOM node that is an empty div with a class of "mushroom"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual = renderMushroom().outerHTML === '<div class="mushroom"></div>';

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, 'HTML Element returned should be <div class="mushroom"></div>');
});
