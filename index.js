// Question 1: Ages array
var ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Subtracting the first element from the last element
var result = ages[ages.length-1] - ages[0];

// Printing the result
console.log("Question 1: Last Element - First Element = " + result);

// Adding the number '1' to the beginning of the array
ages.unshift(1);

// Re-declaring the result variable with the updated ages array
result = ages[ages.length - 1] - ages[0];

// Printing the result
console.log("Question 1: Last Element - New First Element = " + result);

// Calculating the average age in ages array
var sum = 0;

for (var i = 0; i < ages.length; i++) {
    sum += ages[i];
}

var averageAge = sum / ages.length;

// Printing the result
console.log("Question 1: Average Age = " + averageAge)

// Question 2: Names array
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
var totalLetters = 0;

for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}

var averageLetters = totalLetters / names.length;

// Printing the result
console.log("Question 2: average letters = " + averageLetters);

// Concatenating names
var concatenatedString = ''

for (let i = 0; i < names.length; i++) {
    concatenatedString += names[i] + ' ';
}

// Printing the result
console.log("Question 2 concatenated string = " + concatenatedString)

// Question 3: How do you access the last element of an array?
console.log("Question 3: someArray[someArray.length - 1]")

// Question 4: How do you access the first element of any array? 
console.log("Question 4: someArray[0]")

// Question 5: nameLengths
var nameLengths = [];

// Push method within a for loop to push the name length after each iteration
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length)
}

// Printing the result
console.log("Question 5: " + nameLengths)

// Question 6: Sum of all names
var sumOfNames = 0;

for (let i = 0; i < nameLengths.length; i++) {
    sumOfNames += nameLengths[i];
}

// Printing the result
console.log("Question 6: " + sumOfNames)

// Question 7: Concatenated Strings
function twoParameters (word, n) {
    return word.repeat(n);
}

// Printing the result
console.log("Question 7: " + twoParameters('Hello ', 3))

// Question 8: Creating a full name
function fullName (firstName, lastName) {
    return firstName + ' ' + lastName;
}

// Printing the result
console.log(fullName("Question 8: " + 'Anthony', 'Rose'))

// Question 9: Sum > 100
let arrayOfNumbers = [1, 2, 3, 4, 5, 90];
var sum = 0;

function sumOverOneHundred (arrayOfNumbers) {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
    }
    if (sum > 100) {
        return true
    }
}

// Printing the result
console.log("Question 9: " + sumOverOneHundred(arrayOfNumbers))

// Question 10: Sum Average
function sumAverage (sum) {
    return sum / arrayOfNumbers.length
}

// printing the result
console.log("Question 10: " + sumAverage(sum))

// Question 11: Two Arrays
let arrayOne = [1, 2, 3];
let arrayTwo = [4, 5, 6];
let sum1 = 0;
let sum2 = 0;
let average1 = 0;
let average2 = 0;

function greaterArray (arrayOne, arrayTwo) {
    for (let i = 0; i < arrayOne.length; i++) {
        sum1 += arrayOne[i];
    }

    for (let i = 0; i < arrayTwo.length; i++) {
        sum2 += arrayTwo[i];
    }

    average1 += sum1 / arrayOne.length;
    average2 += sum2 / arrayTwo.length;

    if (average1 > average2) {
        return true;
    } else {
        return false;
    }
}

// Printing the result
console.log("Question 11: " + greaterArray(arrayOne, arrayTwo));

// Question 12: Will Buy Drink

let isHotOutside = true;
var moneyInPocket = 10.75;

function willBuyDrink (isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}

console.log("Question 12: " + willBuyDrink(isHotOutside, moneyInPocket));

// Question 13: Over 30
var yearBorn = 1993

function definitelyThirtyOrOlder (yearBorn) {
    return yearBorn >= 1993;
}

// printing the result
console.log("Question 13: " + definitelyThirtyOrOlder(yearBorn))