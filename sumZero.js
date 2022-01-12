/*
* Write a function called sumZero which accepts a sorted
* array of integers. The function should find teh first pair
* where the sum is 0. Return an array that includes both
* values that sum to zero or undefined if a pair does not exist
* */

const sumZero = (sortedArray = []) => {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left < right) {
        let sum = sortedArray[left] + sortedArray[right];
        if (sum === 0) {
            return [sortedArray[left], sortedArray[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }

    return undefined;
};

const test = sumZero([-4, -3, -2, -1, 0, 1, 2, 5, 8]);

console.log(test);