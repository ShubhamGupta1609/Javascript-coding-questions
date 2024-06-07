/** 
 * Exercise 10: Find Missing Number in Array

Write a function findMissingNumber that takes an array of numbers containing integers from 1 to n, where n is the length of the array plus one. The array is sorted in ascending order, but one number is missing. The function should find and return the missing number.

For example:

findMissingNumber([1, 2, 4, 5, 6]) should return 3, as 3 is the missing number.
findMissingNumber([1, 3, 4, 5]) should return 2, as 2 is the missing number.
 */


const findMissingNumber = (arr) => {
    for (let num of arr) {
        if (arr.indexOf(num + 1) === -1) {
            return num + 1;
        }
    }
}

console.log(findMissingNumber([1, 2, 4, 5, 6])); // 3