/*
* Write a functions called same, which accepts two arrays.
* The function should return true if every value
* in the array has it's corresponding value squared in the second
* array. The frequency of values must be the same.
*/

/* question(s)
* 1. Is it safe to assume that the first inputted array will contain the
* square root and the second array will contain the squared values?
* 2. Is it safe to assume inputs will always be arrays?
* 3. I am assuming that the values may be mixed up, even if they are not,
* I am going to code around that.
*/

/* approach
* I want to return false as quickly as possible.
* 1. I will check to make sure the length of both arrays are equal.
* If not, I will return false.
* 2. I will start a loop using the first array.
* 3. In the loop, I will square the value of my array position and
* check to see if it's found in the second array with indexOf.
* 4. If that fails, I will return false.
* 5. If all checks out, I will return true.
*/

const same = (array1, array2) => {
    if (!Array.isArray(array1) || !Array.isArray(array2)) throw new Error('Input is not valid.');

    if (array1.length !== array2.length) return false;

    let valuesEqual = {};

    array1.forEach((value, index) => {
        if (array2.indexOf((value * value)) > -1) {
            valuesEqual[index] = true;
        } else {
            valuesEqual[index] = false;
        }
    });

    return !Object.values(valuesEqual).includes(false);
};

const test = same([1, 2, 3, 5], [1, 4, 9, 16]);
console.log(test);

/* notes
* I ran into some dumb bugs because I felt pressure to finish quickly.
* I did improve in terms of asking questions and laying out logic first.
* But the dumb bugs of !== vs === and sending down the reverse should be worked on.
* My solution may also not be the quickest. Looks like in terms of big O,
* this is a O(n^2). That's because I loop through both arrays. I guess it's the only way.
*
* My plan quickly broke down as I realized I could not return out of the loop.
* I had to pass my information back to an object with the indexes and weather or not
* the values matched when squared.
 */

/* time
* roughly 30 minutes. this is not good enough for this level of problem
* and I need to start timing myself so I know where I am.
* Timing should be broken up if possible.
* - planning
* - coding
* - debugging
* - testing
*/

/* After watching the video, this solution is considered naive. :) */
/* Also, the solution is wrong because I didn't understand the frequency AC. */
