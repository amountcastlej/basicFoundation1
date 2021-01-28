// 1. Get the numbers 1 to 255
// Write a function that returns an array with all the numbers from 1 to 255
//Declare a function, accepting an input
//loop through input
//return numbers from 1 to 255

// function getNum(){
//     var newArr = [];
//     for(i=1; i<=255; i++){
//         newArr.push(i);
//     }
//     return newArr;
// }
// var result = getNum();
// console.log(result);


// 2. Get even 1000
// Write a function that would get the sum of all the even numbers from 1 to 1000
// Declare a function that accepts a parameter
    //create a variable to store even numbers
// loop through numbers
// set a conditional statement to only collect even numbers
// put even numbers in that new variable
// add all of the even numbers together

// function getEven(){
//     var evenSum = 0;
//     for(var i=1; i<=1000; i++){
//         if(i % 2 == 0){
//             evenSum += i;
//         }
//     }
//     return evenSum;
// }
// var evenNums = getEven();
// console.log(evenNums); 

// 3. Sum odd 5000
// Write a function that would get the sum of all the odd numbers from 1 to 5000
// Declare a function that accepts a parameter
// create a variable that stores odd numbers
// loop through numbers 1 to 5000
// function getOdd(){
//     var oddSum = 0;
//     for(var i = 0; i <=50; i++){
//         if(i%2 == 1){
//             oddSum += i;
//             console.log(i);
//         }
//     }
//     return oddSum;
// }
// console.log(getOdd());

//4. Iterate an array
// Write a function that returns the sum of all the values within an array
// Declare a function that accepts an array of numbers
// Store the numbers in the array in a separate variable
// loop through the list of arrays
// sum the arrays in the list together
// return the array total

// function ArrCount(arr){
//     sum = 0;
//     for(var i = 0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(ArrCount([10, 15, 14, 20]))

//5. Find max
// Given an array with multiple values, write a function that returns the average of the values in the array
// Declare a function that accepts array of numbers
// store the numbers in the array in a separate variable
// loop through the list of arrays
// compare the numbers in the array to see if one is larger than the other
// return the largest number in the array

// function largestNum(arr){
//     max = 0;
//     for (var i = 0; i<arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(largestNum([-3,3,5,7]))

// 6. Find Average
// Given an array with multiple values, write a function that returns the average of the values in the array
// Declare a function that accepts a list of numbers
// Store a total that starts at 0
// loop through the list
// Add the values to the total
// return total / length of array

// function average(array){
//     total = 0;
//     for (let i=0; i<array.length; i++){
//         total += array[i];
//     }
//     return total / array.length;
// }
// console.log(average([1,3,5,7,2,0]))

// 7. Array odd
// Write a function that would return an array of all the odd numbers between 1 to 50
// Declare a function that accepts an array
// Declare a variable to push odd numbers into the variable
// Use a for loop to loop through numbers 1 to 50
// Create a condition of only wanting odd numbers
// Push the odd numbers into a separate variable
// return the variable of odd numbers
// console.log the variable with array of numbers

// function onlyOdd(){
//     var arr = [];
//     for (var i = 1; i < 50; i+=2){
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(onlyOdd());

// 8. Greater than Y
// Given value of Y, write a function that takes an array and returns the number of values that are greater than Y.
// Declare a function, accepting 2 params; Y and an array
// Declare a count variable
// loop through array 
    // if value from array is greater than Y
        // count it
    // return count

// function greater_than_y(y, arr){
//     var count = 0;
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i] > y){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(greater_than_y( 3, [1,3,5,7]))

// 9. Squares
// Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself.
// Declare function that accepts multiple values in an array
//  loop through array 
    // multiple arr value of iterable by itself
// log the result of array value squared

// function squares(arr){
//     for (var idx = 0; idx < arr.length; idx++){
//         arr[idx] = arr[idx]*arr[idx];
//     }
//     return arr;
// }
// var total = squares([1,5,10,-2]);
// console.log(total);

// 10. Negatives
// Given an array with multiple values, write a function that replaces any negative number within the array with the value of 0. When the program is done the array should contain no negative values
// declare a function that accepts multiple values
// loop through array
// create condition for if array value is negative
// Set array of iterable to equal 0

// function noNegatives(arr){
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i] < 0){
//             arr[i] = 0;
//         }
//     }
//     console.log(arr);
// }
// noNegatives([1,5,10,-2]);

// 11. Max/Min/Avg
// Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array.
// Create a function that accepts multiple values
// Create a variable for maximum value
// Create a variable for minimum value
// Create a variable for sum
// loop through array 
// set count equal to arr of iterable ++ 
// set condition if array of index value is greater than i push it into the max variable
// set else condition that if arr of index value is less than arr i push into min variable
// set average to equal the total 

// var max = [0];
// var min = [0];
// var count = 0
// function maxMinAvg(arr){
//     for (var i = 0; i < arr.length; i++){
//         count += arr[i];
//         if (arr[i] > max){
//             max = arr[i];
//         }
//         else if (arr[i] < min){
//             min = arr[i];
//         }
//     }
//     var newArr = [];
//     newArr.push(max);
//     newArr.push(min);
//     var total = count / arr.length;
//     newArr.push(total);
//     return newArr
// }

// 12. Swap Values
// Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2
// Declare the function of swap values given an array
// Store a temp variable for one array value
// array value reassignment
// return arr

// function swapValues(arr){
//     var temp = arr[0];
//     arr[0] = arr[arr.length-1]
//     arr[arr.length-1] = temp;
//     return arr;
// }
// console.log(swapValues([1,5,10,-2]))

// 13. Number to String
// Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'
// Declare a function that accepts parameters
// Loop through array of numbers
    // if number is less than 0
    // convert number to string 
    // return values in the array
    // print value onto the console

// function numtoStr(arr){
//     for (var i=0; i < arr.length; i++){
//         if (arr[i] < 0){
//             arr[i] = String('Dojo')
//         }
//     }
//     return arr;
// }
// console.log(numtoStr([-1,-3, 2]))


