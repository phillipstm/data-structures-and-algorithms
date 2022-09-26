# Array Binary Shift

## Collaborators: Elaine Huynh & Teresa Phillips

### Problem Domain

Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.

**input**: array, value (any datatype matching with array type) **output**: value match index position, or -1 no match

#### Testcases

 1. Is array emtpy?
 2. Does the array need to be returned in it's original form or   can it be changed in place?
 3. What are the constraints of the arrays size?
 4. Do we add given value right of center when adding to an odd numbered array or do we replace the middle value in the array

#### Visualization

    Input                              Output
 [4, 8, 15, 16, 23, 42], 15 --->         2
 [-131, -82, 0, 27, 42, 68, 179], 42---> 4
 [11, 22, 33, 44, 55, 66, 77], 90 --->  -1

#### Algorithm

1. Write a function BinarySearch which takes in 2 parameters array and value parameter
2. Find and Declare a reference to the middle index of the given array and declare an empty array to return
3. Iterate through given array using a for loop incrementing startpoint and decrementing end point using a formula to determine if the middlePoint is greater, less then or equal to value parameter. Repeat steps to keep interating array by incrementing or decrimenting start and end points.
4. Each iteration should copy given array's elements into empty array
5. If value parameter is matched formula returns index position  within the array. If there is no match formula returns -1


#### Code

const binarySearch = (array, value) => {
   let startPoint = 0;
   let endPoint = array.length - 1;
   let middlePoint = Math.round((startPoint + endPoint)/2);
 while(startPoint < endPoint){
    if(array[middlePoint] < value){
      startPoint = middlePoint + 1;
    } if(array[middlePoint] > value){
      endPoint = middlePoint - 1;
    } if(array[middlePoint] === value) {
    return middlePoint;
    }
    middlePoint = Math.floor((startPoint + endPoint)/2);
    }
    return -1;
  }; console.log(binarySearch([2,4,6, 9], 7)
);
