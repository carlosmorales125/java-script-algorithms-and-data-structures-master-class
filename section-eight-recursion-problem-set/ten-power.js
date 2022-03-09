/*
* Write a function called power which accepts a base and an exponent. The function
* should return the power of the base to the exponent. This function should mimic
* the functionality of Math.pow() - do not worry about negative bases and exponents.
* Examples:
* // power(2,0) // 1
* // power(2,2) // 4
* // power(2,4) // 16
*
* exponent = 4 // so 2 * 2 = 4 // what do i ask here? is the exponent equal to 0? yes? not sure yet : else
* 4 * 2 = 8 // is the exponent equal to zero? no. return self(base, (exponent - 1);
*
*/

const power = (base, exponent) => {
    // a function has to call itself in order to be recursive

    // what is my base case question?
    // i see the possibility of a inner function with
    // a tracker, but there should be a better way.

    /*
    * if (`${basecase}`) {
    *   return answer;
    * } else {
    *   // first we have to reduce exponent number by one
    *   return power(base, (exponent -1));
    * }
    * */

    if (exponent === 0) {
        // because any number to the power of 0 is always 1.
        return 1;
    } else {
        return base * power(base, (exponent - 1));
    }
};

let test1 = power(2, 4);
console.log(test1);

let test2 = power(2, 0);
console.log(test2);

let test3 = power(10, 10);
console.log(test3);

let test4 = power(5, 1);
console.log(test4);