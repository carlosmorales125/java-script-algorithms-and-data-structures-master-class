// Frequency Counter - sameFrequency

/*
* Write a function called sameFrequency.
* Given two positive integers, find out if the two
* numbers have the same frequency of digits.
* Your solution MUST have the following complexities:
* Time O(N)
*/

/*
* start 8:00pm
* end 8:15pm
*
* testing start 8:15pm
* testing end 8:18pm
*
* total time 18 minutes
*/

const sameFrequency = (int1 = 0, int2 = 0) => {
    // quick short circuit
    if (int1.toString().length !== int2.toString().length) return false;

    const createCounterObject = (int = 0) => {
        let counterObject = {};

        int.toString().split('').forEach(i => {
            let backToNumber = parseInt(i, 10);
            if (counterObject.hasOwnProperty(backToNumber)) {
                counterObject[backToNumber] = counterObject[backToNumber] + 1;
            } else {
                counterObject[backToNumber] = 1;
            }
        });

        return counterObject;
    };

    const counterInt1 = createCounterObject(int1);
    const counterInt2 = createCounterObject(int2);

    for (const key in counterInt1) {
        if (!counterInt2.hasOwnProperty(key)) {
            return false
        }

        if (counterInt1[key] !== counterInt2[key]) {
            return false;
        }
    }

    return true;
};

let test = sameFrequency(181, 811);
console.log(test);

let test2 = sameFrequency(182, 281);
console.log(test2);

let test3 = sameFrequency(34, 14);
console.log(test3);

let test4 = sameFrequency(3589578, 5879385);
console.log(test4);

let test5 = sameFrequency(22, 222);
console.log(test5);