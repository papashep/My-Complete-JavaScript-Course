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
/*
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
*/

/************************************************************************
 * If / else statement
 *
 * === is strict equality, true or false, the strict equality operator
 * always considers operands of different types to be different.
 * ie 1' == 1  returns false
 *
 * == checks whether its two operands are equal, returning a Boolean result.
 * Unlike the strict equality operator, it attempts to convert and compare
 * operands that are different.
 * ie '1' == 1  returns true
*/

/*
var firstName = 'John';
var civilStatus = 'single';

  if ( civilStatus === 'married') {
    console.log(firstName + ' is married!!!');
  } else {
    console.log(firstName + ' will hopefully marry soon!');
  }

var isMarried = true;
if ( isMarried) {                                   // Already a boolean with a value
  console.log(firstName + ' is married!!!');
} else {
  console.log(firstName + ' will hopefully marry soon!');
}


var massMark, massJohn, bmiJohn, bmiMark, heightJohn, heightMark;
massJohn = 92, heightJohn = 1.95;
massMark = 78, heightMark = 1.69;
bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massMark / (heightMark * heightMark);

if (bmiMark > bmiJohn) {
  console.log('Mark\'s BMI is higher than John\'s? ');
} else {
  console.log('John\'s BMI is higher than Mark\'s BMI');
}

*/

/************************************************************************
 * Boolean Logic
*/

/*
var firstName = 'John';
var age = 25;

if ( age < 13 ) {
  console.log(firstName + ' is a boy');
} else if ( age >= 13 && age < 20 ) {    // Between 13 and 20
  console.log(firstName + ' is a teenager');
} else if ( age >= 20 && age <  30 ){
  console.log(firstName + ' is a young man');
} else {
  console.log(firstName + ' is a man');
}
*/

/************************************************************************
 * The Ternary Operator and Switch Statements
*/
/*
var firstName = 'John';
var age = 16;
// Ternary operator has three parts condition age >=18, true of false ?, else :
// if age >= 18 '?' then drinks beer ':' else drinks juice,
age >= 18 ? console.log(firstName + ' drinks beer.')
  : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(firstName + ' drinks ' + drink);

// Switch statement

var job = 'coder';
switch (job) {
  case 'teacher':
  case 'instructor' :
    console.log(firstName + ' teaches kids how to code.'); // This will be executed for 'teacher' or 'instructor'
    break;
  case 'driver':
    console.log(firstName + ' drives an uber in Lisbon.');
    break;
  case 'coder':
  case 'designer':
    console.log(firstName + ' designs beautiful websites.');
    break;
  default:
    console.log(firstName + ' does something else.');
}
var age = 30;
switch (true){
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >=13 && age < 20:
    console.log(firstName + ' is a teenager');
    break;
  case age >=20 && age < 30:
    console.log(firstName + ' is a young man');
    break;
  default:
    console.log(firstName + ' is a man');
}
*/

/************************************************************************
 * Truthy and Falsy values and equality operators
*/

/*
// falsy values: undefined, null, 0, empty strings '' and 'NAN' not a number.
// these valuse will be evaluated as false in an if else statement condition.
// truthy values: NOT falsy values and will be considered as true

var height = 0;  // Is a good way to check if a variable exists
if ( height || height === 0) {  // will fix the problem if you want zero
  console.log('Variable defined');
} else {
  console.log('Variable has NOT been defined');
}

// Equality operators

// === strict operator comparison (best practice)
// == This does type coercion, so the variable types do not have to match.
height = 23;
if (height == '23') {
  console.log('The operator does type coercion!')
}
*/


/**********************************************************************
 * Coding challenge 2
 */

/*
var avgJohn = ( 89 + 120 + 103 ) / 3;
var avgMike = ( 109 + 94 + 123 ) / 3;
var avgMary = ( 97 + 134 + 105 ) / 3;

console.log(avgJohn, avgMike, avgMary);

if (avgJohn > avgMike && avgJohn > avgMary) {
  console.log( 'John\'s team wins with ' + avgJohn + ' points' );
} else if (avgMike > avgJohn && avgMike > avgMary) {
  console.log( 'Mike\'s team wins with ' + avgMike + ' points' );
} else if ( avgMary > avgJohn && avgMary  > avgMike ) {
  console.log( 'Mary\'s team wins with ' + avgMary + ' points' );
} else {
  console.log(' There is a draw ');
}
*/


/**********************************************************************
 * Functions
 */










