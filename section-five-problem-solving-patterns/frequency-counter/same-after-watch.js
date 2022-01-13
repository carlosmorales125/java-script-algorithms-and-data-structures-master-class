/*
* Write a functions called same, which accepts two arrays.
* The function should return true if every value
* in the array has it's corresponding value squared in the second
* array. The frequency of values must be the same.
*/

/* question(s)

*/

/* approach
    followed the teacher's method with my own syntax.
*/

const same = (array1, array2) => {
    if (!Array.isArray(array1) || !Array.isArray(array2)) throw new Error('Input is not valid.');

    if (array1.length !== array2.length) return false;

    let answer = true;

    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    array1.forEach(val => {
        if (frequencyCounter1.hasOwnProperty(val)) {
            frequencyCounter1[val] = (frequencyCounter1[val] + 1);
        } else {
            frequencyCounter1[val] = 1;
        }
    });

    array2.forEach(val => {
        if (frequencyCounter2.hasOwnProperty(val)) {
            frequencyCounter2[val] = (frequencyCounter2[val] + 1);
        } else {
            frequencyCounter2[val] = 1;
        }
    });

    Object.keys(frequencyCounter1).forEach(val => {
        if (!(val ** 2 in frequencyCounter2)) {
            answer = false;
        }

        if (frequencyCounter2[val ** 2] !== frequencyCounter1[val]) {
            answer = false;
        }
    });

    return answer;
};

const test = same([1, 2, 3, 5], [1, 4, 9, 25]);
console.log(test);

/* notes
    this solution is better because if n in O(n) is 1000,
    the solution runs n through a series of 3 loops.
    first loop is 1000 calculations.
    the second loop brings it up to 2000 calculations.
    finally, the third loops brings the calculations to 3000 or less.

    nested loops would square n. because 1000 x 1000 = 1,000,000.
    that's drastically more than 3000 or less if n = 1000.
 */

/* time

*/