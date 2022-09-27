# Problem Domain

Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return that array with elements in reversed order.

**Input:** array
**Output:** reversed array

**Test Cases:**
Is array empty?
Does contents of array matter? Data type? array of other structures?

**Visualization**
[1,2,3,4,5]->[5,4,3,2,1]

a. Create pointers to front and back, swap the values.
b. Move pointers toward middle, repeat.

**Algorithm**
-declare reverse function that takes array as paramater.
-Create front variable and assign the first index of the array.
-Create variable and dynamically assign the last index of the array.

-while end index is greater than the front index
-create a temp variable and assign the front value
-assign end to front
-assign temp to end
-increment front variable
-decrement end variable

return the moified array

**PseudoCode:**
reverseArray <- function
array <- array length -1

while end is greater than front
  temp <- front
  end <- temp

**Code**
function reverseArr(arr){
  let front = 0;
  let end = arr.length -1;
  while(end > front){
  let temp = arr[front];
  arr(front) = arr[end];
  arr[end] = temp;
  front++;
  end--;
  }
}
return arr;
}

// Common things to test:
off by errors
data type confirmation?
all of our test cases/ what ifs
does it work large scale

Front | End
  0   |  4     [5,2,3,4,1]
  1   |  3     [5,4,3,2,1]
  2   |  2      breaks loop
