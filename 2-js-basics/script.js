// console.log('Hello World!!!');
// Variable names must start with a letter, underscore or dollar sign

/*
var firstName = 'Melvyn';
console.log(firstName);

var lastName = 'Shepherd'
var age = 64;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job='Teacher';
console.log(job);
*/

/************************************************
 * Variable mutation and Type coercion
 * coercion means javascript automatically converts value types to what is needed.
 * ie numbers, booleans and undefined into a strings
*/

// var xage = '64';
// var sumx = age + xage;
// console.log(sumx);   // Output is '6464'

/*
var firstName = 'Melvyn';
var age = 64;
var job, isMarried;
job = 'Teacher';
isMarried = true;

console.log(firstName + ' is a ' + age + ' year old, ' + 'is job is a ' +
job + ' and is he married? ' + isMarried);
*/

/*************************************************
 * Variable mutation
*/

/*
age = 'sixty four';
job = 'driver'

// Prompt the user for the lastname and include it in the alert
var lastName = prompt('What is is his last Name ? ')

// alert opens a separate pop-up window.
alert(firstName + ' ' + lastName + ' is a ' + age + ' year old, ' + 'is job is a ' +
job + ' and is he married? ' + isMarried);
*/

/***************************************************
 * Basic Operators
*/

/*
var year, yearMelvyn, yearAngie, ageMelvyn, ageAngie;
now = 2020;
ageMelvyn = 64;
ageAngie = 61;

// Math operators
yearMelvyn = now - ageMelvyn;
yearAngie = now - ageAngie;
console.log(yearMelvyn );
console.log(yearAngie);
console.log(now + 2)
console.log(now * 2)
console.log(now / 10)

// Logical operators
var angieOlder = ageAngie < ageMelvyn;
console.log(angieOlder);

// typeof Operator
console.log(typeof angieOlder);                       // Displays boolean
console.log(typeof ageAngie);                         // Displays number
console.log(typeof 'Melvyn is older than Angie')      // Displays string
var x;
console.log(typeof x)                                 // Displays undefined
*/

/***************************************************
 * Operator Precedence
 */

/*
var now = 2018
var yearJohn = 1989
var fullAge = 18

// Multiple Operators
var isFullAge = now - yearJohn >= fullAge
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);


// Multiple Assignments
var x, y;
x =  y = (3 + 5) * 4 - 6;   // 8 * 4 - 6 // 32 - 6 // 26       // Assign the formula to both x and y at the same time
                                                               // The = assignment works from right to left
                                                               // So the formula is calculated 1st then = y, then x = y
                                                               // This is the = Associativity of the precedence table
console.log(x , y);  // Still get a space between the two on the console log



// More Operators
// x = x * 2;   // 52
x *= 2;       // 52   same formula as above
console.log(x);
x += 10;      // 62
console.log(x);
x++;          // 63 increments by 1
console.log(x);
x--;          // 62 decrements by 1
console.log(x);
*/

/**********************************************************************
 * Coding challenge 1
*/
var massMark, massJohn, bmiJohn, bmiMark, heightJohn, heightMark, isHigher;
massJohn = 92;
heightJohn = 1.95;
massMark = 78;
heightMark = 1.69;
bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark, bmiJohn);
isHigher = bmiMark > bmiJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + isHigher);












