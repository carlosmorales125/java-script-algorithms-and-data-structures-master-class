/*
* Write a function called productOfArray which takes in an array of numbers and returns the
* product of them all.
*/

// questions I would ask if this where an interview.
// do i have to be worried about an empty array?
// do i have to be worried about an array with only one number in it?

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

const productOfArray = (array = [], index = 0) => {
    // I want to be careful and not change the array that is passed to us.
    // I am adding an index to the params with a default value of zero.
    // The only issue with this approach is I'm not sure it will work everywhere.

    if (array.length === 0) return 0;

    if (!array[index]) {
        return 1;
    } else {
        return array[index] * productOfArray(array, (index + 1));
    }
};

console.log(productOfArray([1,2,3]));
console.log(productOfArray([1,2,3,10]));
console.log(productOfArray([1,2,3,10,4]));
console.log(productOfArray([]));
console.log(productOfArray([5]));