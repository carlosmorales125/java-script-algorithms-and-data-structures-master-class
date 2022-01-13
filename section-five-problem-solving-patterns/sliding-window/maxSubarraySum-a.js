// Sliding Window Problem After Watching the Solution

/*
* Write a function called maxSubarraySum which accepts
* an array of integers and a number called n. The function
* should calculate the maximum sum of n consecutive
* elements in the array.
*/

const maxSubarraySum = (sumArray = [], window = 0) => {
    if (sumArray.length === 0) return null;

    if (!window) return null;

    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < window; i++) {
        maxSum = maxSum + sumArray[i];
    }

    tempSum = maxSum;

    for (let i = window; i < sumArray.length; i++) {
        tempSum = tempSum - sumArray[i - window] + sumArray[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
};

let test = maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

console.log(test);

/* notes
* This solution is basically copied from the course.
* Although it is copied, I understand the concept.
*/