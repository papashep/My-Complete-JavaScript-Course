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

/*
function calculateAge( birthYear ) {    // birthYear is an arument we can pass into the function
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement( year, firstName ) {    // A function does NOT have to return a value
  var age = calculateAge(year);                       // Calling another function from within a function
  var retirement = 66 - age;
  if (retirement < 1 ) {
    console.log(firstName + ' is already retired.');
  } else {
    console.log(firstName + ' retires in ' + retirement + ' years.');
  }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/**********************************************************************
 * Function Statements and Expressions
 */

/*
// Function declaration
// function whatDoYouDo(job, firstName){
//
// }

// Function expression
var whatDoYouDo = function(job, firstName) {
  switch (job) {   // Do not need the 'break' because the 'return' ends the switch statement.
    case 'teacher':
      return firstName + ' teaches kids how to code.'; // This will be executed for 'teacher' or 'instructor'
    case 'driver':
      return firstName + ' drives an uber in Lisbon.';
    case 'designer':
    case 'coder':
      return firstName + ' designs beautiful websites.';
    case 'retired':
      return firstName + ' now retired and living it up.';
    default:
      return firstName + ' does something else.';
  }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
console.log(whatDoYouDo('anything', 'Fred'));
console.log(whatDoYouDo('driver', 'Mary'));

// Expresions produces a result 2+3 = 5,   the result being 5
// Statements them selves do not produe a result  a = 5
// Function expresiions produces a result where function declarations do not

*/

/**********************************************************************
 * Arrays  They are zero based
 */

/*
// Initialize new array's
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);  // new not normally used

console.log(names[1]);
console.log(names);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary'; // gets the length of the array and adds 'Mary' to the end
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');                              // The push method will add an item to the end of the array
john.unshift('Mr.');                            // The upshift method adds to the beginning of the array
john.pop();                                     // The pop method removes the element from the end
john.pop();                                     // The pop method removes the element from the end
john.shift();                                   // The shift method removes the element from the beginning
console.log(john);
console.log(john.indexOf(1990));                // Show the position of 1990 in the array, starting from zero
console.log(john.indexOf(23));                  // Show the position of 23 in the array, returns -1 not in the array
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer'; // Ternary operation
console.log(isDesigner);
*/

/**********************************************************************
 * Coding challenge 3
 */

/*
function tipCalculator(billAmount) {
  var percentage;
  if (billAmount < 50.00) {
    percentage = (20/100);
  } else if (billAmount >= 50.00 && billAmount <= 200.00) {
    percentage = (15/100);
  } else {
    percentage = (10/100);
  }
  return billAmount * percentage;
}

var billAmount = [124, 48, 268];

var tip = [tipCalculator(billAmount[0]),
           tipCalculator(billAmount[1]),
           tipCalculator(billAmount[2])];

var totalBill = [billAmount[0] + tip[0],
                 billAmount[1] + tip[1],
                 billAmount[2] + tip[2]];

console.log(billAmount);
console.log(tip);
console.log(totalBill);
*/

/**********************************************************************
 * Objects and Properties
 *
 * With objects we can name each of the values using key value pairs
 * which means each object has a name which is called the key.
 * we can use objects to group different variables together that have no particular order
 * In arrays the order matters a lot but in objects it doesn't matter.
 */

/*
// Object literal
var john = {              // Creating the object john
  fistName: 'John',       // firstname is the key and john is the value making a key pair and is fistName is a property
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};
console.log(john);
console.log(john.fistName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);
john.job = 'designer';
console.log(john.job);
john['isMarried'] = true;
console.log(john.isMarried);

// New object syntax
var jane = new Object();      // Another way of creating a new empty object, next line fills up the object
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/**********************************************************************
 * Objects and Methods
 *
 * Objects can hold different data types, including arrays and even other objects.
 * Objects can also hold functions and they are called methods
 */

/*
var john = {
  fistName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function () {         // Function expression calcAge contains the result.
    // return 2020 - this.birthYear;
    return this.age = 2020 - this.birthYear;
  }
};
// console.log(john.calcAge(john.birthYear));
// console.log(john.calcAge());     // Using this in the function means we don't have pass the value
//
// john.age = john.calcAge();       // This uses the function expression 'calAge' and stores 'age' in the john object
// console.log(john);
john.calcAge();                     // calculates and adds the age property
console.log(john);
*/

/**********************************************************************
 * Coding challenge 4
 */

