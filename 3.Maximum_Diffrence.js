/** 
 * Certainly! Here's another JavaScript exercise:

**Exercise 3: Find the Maximum Difference**

Write a function `maxDiff` that takes an array of numbers as input and returns the maximum difference between any two numbers in the array. The difference should be calculated by subtracting the smaller number from the larger number. If there are no two distinct elements in the array, return 0.

For example:
- `maxDiff([7, 1, 5, 3, 6, 4])` should return `6`, since `7 - 1 = 6`.
 */

//Solution 1: Using inbuilt functions
const maxDiff = (arr) => {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    return max - min;
}
console.log(maxDiff([7, 1, 5, 3, 6, 4])) // 6

//understanding the code
//implementation using Math.max() and Math.min() functions is correct and more concise.
// It efficiently finds the maximum and minimum elements in the array and calculates the difference between them,
// which gives the maximum difference between any two elements in the array.

//Solution 2: Using for loop

const maxDifference = (arr) => {
    let maxDiff = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let diff = arr[j] - arr[i];
            if (diff > maxDiff) {
                maxDiff = diff;
            }
        }
    }
    return maxDiff;
}

console.log(maxDifference([7, 1, 5, 3, 6, 4])) // 6