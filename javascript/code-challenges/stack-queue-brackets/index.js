'use strict';


function validateBrackets(str) {
  let square = 0;
  let curly = 0;
  let round = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    if (str[i] === '[') square++;
    if (str[i] === '{') curly++;
    if (str[i] === '(') round++;
    if (str[i] === ']') square--;
    if (str[i] === '}') curly--;
    if (str[i] === ')') round--;
    if (square < 0 | curly < 0 | round < 0) return false;
    if (square > 0 | curly > 0 | round > 0) return false;
  } return true;
}
console.log('Yep we did it', validateBrackets);
