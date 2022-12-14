/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

*******************************************************************************/
// let suffixCipher = function(sen, obj) {
//     let words = sen.split(' ');
//     let newWords = words.map(function(word) {
//         for (let key in obj) {
//             if (word.endsWith(key)) {
//                 let cb = obj[key];
//                 return cb(word);
//             }
//         }
//         return word;
//     })

//     return newWords.join(' ');
// };

let suffixCipher = function (sen, obj) {
    let words = sen.split(' ');
    let newArr = [];

    for (let index = 0; index < words.length; index++) {
        let modified = false;
        let word = words[index];

        for (let key in obj) {
            if (!word.endsWith(key)) {
                continue;
            } else {
                newArr.push(obj[key](word));
                modified = true;
            }
        }

        if (modified === false) newArr.push(word)
    }
    
    return newArr.join(' ');
};


let cipher1 = {
    ly: function (word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function (word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function (word) {
        return word.toUpperCase();
    },
    s: function (word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
