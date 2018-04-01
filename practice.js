// # Write a method that prints out every number from 1 to 100.
function oneToAHundred() {
  var number = 0;
  while (number < 100) {
    number += 1;
    console.log(number);
  }
}
oneToAHundred();

// # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

function everyOtherNumber() {
  var number = 0;
  while (number < 100) {
    if (number % 2 !== 0) {
      console.log(number);
    }
    number += 1;
  }
}

everyOtherNumber();

// # Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.
function counter(array) {
  var count = 0;

  array.forEach(function(number) {
    if (number === 55) {
      count += 1;
    }
  });
  console.log(count);
}

counter([1, 33, 55, 55, 6]);
// # Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string.
// # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].
function awesomesauced(strings) {
  var lengthOfArray = strings.length;
  var newArray = [];

  // while (index < lengthOfArray) {
  //   newArray.push(strings[index]);
  for (var index = 0; index < lengthOfArray; index++) {
    newArray.push(strings[index]);
    if (index !== lengthOfArray - 1) {
      newArray.push("awesomesauce");
    }
  }

  return newArray;
} // # Start with the hash: item_amounts = {chair: 5, table: 2}
// # Someone just bought two chairs. Change the hash such that the chair amount is 3.
// # The final result should be: {chair: 3, table: 2}

console.log(awesomesauced(["a", "b", "c", "d", "e"]));
// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # Someone just bought two chairs. Change the hash such that the chair amount is 3.
// # The final result should be: {chair: 3, table: 2}
var item_amounts = { chair: 5, table: 2 };
item_amounts["chair"] -= 2;
console.log(item_amounts);

// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # You received 7 desks to sell. Change the hash to include desks.
// # The final result should be: {chair: 5, table: 2, desk: 7}
var item_amounts = { chair: 5, table: 2 };
item_amounts["desk"] = 7;
console.log(item_amounts);

// # Write a method that accepts a number and returns its factorial.
// # For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
function factorial(num) {
  var product = 1;
  while (num > 0) {
    product *= num;
    num -= 1;
  }
  return product;
}

console.log(factorial(5));

