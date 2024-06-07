/**
 * Exercise 6: Remove Duplicates from an Array

Write a function removeDuplicates that takes an array of numbers as input and returns a new array with duplicate elements removed. The order of elements in the resulting array should be preserved.

For example:

removeDuplicates([1, 2, 3, 3, 4, 5, 5]) should return [3, 5].
removeDuplicates([7, 7, 7, 7, 7]) should return [7].
removeDuplicates([1, 2, 3, 4, 5]) should return [].
 */


//Solution 1: Using inbuilt functions

const removeDuplicates = (arr) => {
    return arr.filter((value, index) => arr.indexOf(value) !== index)
 }
 console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 5])) // [ 3, 5]