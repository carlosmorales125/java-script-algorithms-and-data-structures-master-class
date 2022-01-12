// Overall, I'm not completely upset about my solution.
// I think I understood the question and
// delivered a solution very similar to Colt's.

// Where I messed up:
// I didn't think to ask questions.
// I need to get better about input checking and validation.
// I need to get better about speaking my logic out loud.

const charCountInString = (string) => {
    const counter = {};

    // this is not needed. you can use 'for (char of string) { ... }'
    const stringArray = string.split('');

    stringArray.forEach(char => {
        if (!counter.hasOwnProperty(char)) {
            // This might be overkill. No matter what, this will be O(n).
            // I don't think we are saving any time by quickly filtering chars and assigning.
            // Colt Steele increments the number or assigns 1 to the char in the object.
            // Remember that accessing and assigning object properties is O(1).
            const charCount = stringArray.filter(iChar => iChar === char).length;
            counter[char] = charCount;
        }
    });

    return counter;
};

const test = charCountInString('hello HI, number is (678) 587-8130. Call me! ;)');
console.log(test);