/*
* time start: 8:52pm
* time end: 9:08pm.
* success! i did think of the solution first.
* I talked through the idea of walking through the array
* */

const countUniqueValues = (values = []) => {
    let left = 0;
    let right = 1;
    let totalUniqueValues = 0;

    while (right !== values.length + 1) {
        if (values[left] !== values[right]) {
            totalUniqueValues++;
            left++;
            right++;
        } else {
            left++;
            right++;
        }
    }

    return totalUniqueValues;
};

test = countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);
console.log(test);

test2 = countUniqueValues([1,1,1,1,1,2]);
console.log(test2);

test3 = countUniqueValues([]);
console.log(test3);

test4 = countUniqueValues([-2,-1,-1,0,1]);
console.log(test4);