/*
* Write a function factorial which accepts a number and returns the factorial of that number.
* A factorial is the product of an integer and all the integers below it; e.g., factorial four (4!) is
* equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is always 1.
*/

// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

const factorial = (f) => {
    if (f === 0) {
        return 1;
    } else {
        return f * factorial((f - 1));
    }
};

const factorialRefactor = (f) => f === 0 ? 1 : f * factorialRefactor((f - 1));

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(7));
console.log(factorialRefactor(7));
console.log(factorial(0));