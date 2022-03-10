/*
* Write a recursive function called fib which accepts a number and returns the nth number
* in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole
* numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter
* is equal to the sum of the previous two numbers.
* */

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// what's my base case?
// base case is 0.
// how am i tracking the current number?
// i am not tracking last product...

const fib = (num, currentProduct = 1, oldProduct = 1) => {
    if (num === 0) {
        return currentProduct;
    } else {
        const holder = currentProduct;
        currentProduct = currentProduct + oldProduct;
        oldProduct = holder;
        return fib((num - 2), currentProduct, oldProduct)
    }
};

console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));

/*
* solution:
* function fib(n){
*    if (n <= 2) return 1;
*    return fib(n-1) + fib(n-2);
* }
* */

// did not solve before looking at the solution. my code results in a stack overflow.