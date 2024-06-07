/**
 * Exercise 1: Reverse a String

Write a function reverseString that takes a string as input and returns the string reversed. 
For example, if the input is "hello", the output should be "olleh".
 * 
 */


//Solution 1: Using inbuilt functions

const reverseStringInbuild = (str) => {
    return str.split('').reverse().join('');
    }

console.log(reverseStringInbuild("hello")) // olleh

//Solution 1: Using for loop


const reverseStringLoop = (str) => {
let reversed = '';
for (let i =str.length-1; i>=0; i--){
       reversed += str[i];
 }
 return reversed
}

console.log(reverseStringLoop("hello")) // olleh