// Sliding Window Problem Before Watching the Solution

/*
* Write a function called maxSubarraySum which accepts
* an array of integers and a number called n. The function
* should calculate the maximum sum of n consecutive
* elements in the array.
*/

const maxSubarraySum = (sumArray = [], window = 0) => {
    if (sumArray.length === 0) return null;

    if (!window) return null;

    let tracker = {};
    let largest = 0;

    for (let i = 0; i < sumArray.length; i++) {
        let currentWindow = sumArray.slice(i, (i + window));

        let currentSum = 0;

        currentWindow.forEach(number => {
            currentSum = number + currentSum;
        });

        tracker[i] = currentSum;
    }

    Object.entries(tracker).forEach(([key, value]) => {
        if (value > largest) {
            largest = value;
        }
    });

    return largest
};

let test = maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2);
console.log(test);

/* notes
* My solution is not exactly O(n). Once I slice the array using the window,
* I need loop through the values in my first loop. Thus resulting in a nested
* loop O(n^2). Plus, I then need to loop through the tracking object to find the
* largest sum. After watching the video, this is the naive solution. :)
*/