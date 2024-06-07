/** 
 *  Exercise 2: Check for Palindrome

Write a function isPalindrome that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise. Ignore non-alphanumeric characters and case sensitivity. For example:

isPalindrome("racecar") should return true.
isPalindrome("A man, a plan, a canal, Panama") should return true.
isPalindrome("hello") should return false.
 */

//Solution 1: Using inbuilt functions
const palindrome = (str) => {
    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join('')
    return reverseStr === lowRegStr
}
console.log(palindrome("racecar")) // true
console.log(palindrome("A man, a plan, a canal, Panama")) // false
console.log(palindrome("hello")) // false

//Solution 2: Using for loop

const isPalindrome = (str) => {
    // Remove non-alphanumeric characters and convert to lowercase
    const alphanumericStr = str.replace(/[\W_]/g, '').toLowerCase();
    
    // Check if the string is a palindrome
    for (let i = 0; i < alphanumericStr.length / 2; i++) {
        if (alphanumericStr[i] !== alphanumericStr[alphanumericStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome("racecar")); // true