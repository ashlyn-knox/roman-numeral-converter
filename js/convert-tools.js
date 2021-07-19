"use strict";
// roman numeral array
const roman = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];
// arabic number array
const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// convert to numeral function
function convertToRoman(num) {
  // regex for non decimal numbers
  const regex = /^(\d\d*)$/;
  // set output
  let output = "";

  // regex test. if number handle output
  if (regex.test(num) === true) {
    // if number equals 0 output 'Nulla'
    if (num === 0) {
      output = "Nulla";
      // else if num is not 0
    } else if (num != 0) {
      // loop through arabic array
      for (let i = 0; i <= arabic.length; i++) {
        // while the array position is less than or equal to input number
        while (arabic[i] <= num) {
          // add the corresponding numeral to the output
          output += roman[i];
          // subtract the arabic array value from the input number
          num -= arabic[i];
        }
      }
    }
    // return the output
    return output;
  } else {
    // else not a number or is a decimal, get new input from user and try again
    return "Enter a non-decimal number. Also change this to prompt user for input";
  }
}

// convert to arabic number function
function convertToArabic(num) {
  // regex to make sure the input is a string of numerals
  // only accept MDCLXVI and ignore case
  const regex = /[mdclxvi]/i;
  // initialize output
  let output = 0;

  // if num is valid input, create an array out of it. othewise empty array
  if (regex.test(num)) {
    // create a numeral array. convert all numerals to capital letters
    const numArr = num.toUpperCase().split("");

    // loop through number array
    for (let i = 0; i <= numArr.length; i++) {
      // switch statement
      switch (true) {
        // if M
        case numArr[i] == "M":
          output += 1000;
          break;
        // if D
        case numArr[i] == "D":
          output += 500;
          break;
        //
        case numArr[i] == "C":
          numArr[i + 1] == "M" || numArr[i + 1] == "D"
            ? (output -= 100)
            : (output += 100);
          break;
        // if L
        case numArr[i] == "L":
          output += 50;
          break;
        // if X
        case numArr[i] == "X":
          numArr[i + 1] == "L" || numArr[i + 1] == "C"
            ? (output -= 10)
            : (output += 10);
          break;
        // if V
        case numArr[i] == "V":
          output += 5;
          break;
        // if I
        case numArr[i] == "I":
          numArr[i + 1] == "X" || numArr[i + 1] == "V"
            ? (output -= 1)
            : (output += 1);
      }
    }
    // return output
    return output;
  } else {
    return "Enter A valid roman numeral";
  }
}
