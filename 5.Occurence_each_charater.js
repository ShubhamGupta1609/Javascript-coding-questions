/**
 * Exercise 5: Count Occurrences of Each Character

Write a function countOccurrences that takes a string as input and returns an object containing the count of occurrences of each character in the string. Only consider alphanumeric characters and ignore case sensitivity.

For example:

countOccurrences("Hello, World!") should return { "h": 1, "e": 1, "l": 3, "o": 2, "w": 1, "r": 1, "d": 1 }.
countOccurrences("A man, a plan, a canal, Panama") should return { "a": 6, "m": 2, "n": 4, "p": 2, "l": 3, "c": 3 }.
 */

//Solution 1: Using inbuilt functions

const countOccurrences = (str) => {
    const re = /[\W_]/g;
    const lowRegStr = str.toLowerCase().replace(re, '');
    const obj = {}
    for (let char of lowRegStr) {
        if (obj[char]) {
            obj[char]++;
        } else {
            obj[char] = 1;
        }
    }
    return obj
}

console.log(countOccurrences("Hello, World!")) // { "h": 1, "e": 1, "l": 3, "o": 2, "w": 1, "r": 1, "d": 1 }