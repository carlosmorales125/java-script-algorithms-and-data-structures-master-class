/*
     start 8:05pm
     end 8:15pm
*/

const validAnagram = (str1 = '', str2 = '') => {
    if (str1.length !== str2.length) {
        return false;
    }

    const stringCounter1 = {};
    const stringCounter2 = {};

    for (let val of str1) {
        if (stringCounter1.hasOwnProperty(val)) {
            stringCounter1[val] = (stringCounter1[val] + 1);
        } else {
            stringCounter1[val] = 1;
        }
    }

    for (let val of str2) {
        if (stringCounter2.hasOwnProperty(val)) {
            stringCounter2[val] = (stringCounter2[val] + 1);
        } else {
            stringCounter2[val] = 1;
        }
    }

    for (let key in stringCounter1) {
        if (!stringCounter2.hasOwnProperty(key)) {
            return false;
        }

        if (stringCounter1[key] !== stringCounter2[key]) {
            return false
        }
    }

    return true;
};

let test = validAnagram('asddddd', 'asddddd');

console.log(test);

/* notes
* My solution had an extra loop.
* */