/** 
 * Exercise 4: Find the Second Largest Element

Write a function secondLargest that takes an array of numbers as input and returns the second largest element in the array. If there is no second largest element (e.g., the array has fewer than two distinct elements), return null.

For example:

secondLargest([7, 1, 5, 3, 6, 4]) should return 6.
secondLargest([7, 7, 7, 7, 7]) should return null, since there is no second largest element.
 */

//Solution 1: Using inbuilt functions

const secondLargest = (arr) => {
    const largestElement = Math.max(...arr)
    newArr = arr.filter(num => num !== largestElement)
    let secondLargestElement = Math.max(...newArr)
    return secondLargestElement
}

console.log(secondLargest([7, 1, 5, 3, 6, 4, 6, 6])) // 6
console.log(secondLargest([19, 11, 50, 3, 66, 49])) // 50


/**
 * The time complexity of your `secondLargest` function can be analyzed as follows:

1. Finding the maximum element using `Math.max(...arr)`: This operation requires iterating through all elements of the array once to find the maximum value. The time complexity of finding the maximum value in an array of size \( n \) is \( O(n) \).

2. Filtering out the largest element using `filter()`: This operation also requires iterating through all elements of the array once to filter out the largest element. The time complexity of `filter()` is \( O(n) \), where \( n \) is the size of the input array.

3. Finding the maximum element in the filtered array using `Math.max(...newArr)`: Similar to step 1, this operation requires iterating through all elements of the filtered array once to find the maximum value. The time complexity is \( O(m) \), where \( m \) is the size of the filtered array.

Overall, the time complexity of your `secondLargest` function is dominated by the operation with the highest time complexity, which is finding the maximum element in the original array (\( O(n) \)).

So, the overall time complexity is \( O(n) \), where \( n \) is the size of the input array.
 */