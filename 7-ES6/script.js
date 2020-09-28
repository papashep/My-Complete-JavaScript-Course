/************************************************************************
** Lecture: let and const
*************************************************************************
*/
/*
*************************************************************************
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
// const: is for constants, values we don't want to change
// let:   is like the old var
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';    // Gives an error because it's a constant
console.log(name6);
**************************************************************************
*/

// Note:
// Variables declare with 'var' are 'function' scoped but variables declared with 'let' and 'const' are 'blocked' scoped

/*
// ES5
function driversLicense5(passedTest) {
  
  if ( passedTest ) {
    // console.log('ES5:' + firstname);     SCRIPT ERROR UNDEFINED
    var firstName = 'John';
    var yearOfBirth = 1990;
  }
  console.log( 'ES5: ' + firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.' );
}

driversLicense5(true);

// ES6

We will get an error because let and const are blocked scoped and not function scoped as for ES5

function driversLicense6(passedTest) {
  
  if ( passedTest ) {
    let firstName = 'John';
    const yearOfBirth = 1990;
  }
  console.log( 'ES6: ' + firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.' );
}

driversLicense6(true);

// We can move the 'console.log' into the 'if' block of code and then it works OR and the bette way:
// 'let' and 'const' are only available in the same block of code or we can define the variables outside of the block,
// but for 'const' we must also assign the value outside of the block, we cannot do it inside the block because it
// wouldn't be accessible with our 'console.log' statement.

function driversLicense6(passedTest) {
  
  // console.log('ES6: ' + firstname);  ERROR WE CANNOT USE A VARIABLE BEFORE IT WAS DECLARED, happens because of
  // the temporal dead zone. Which means the variables are hoisted, but we cannot access them before they are declared.
  
  let firstName;
  const yearOfBirth = 1990;
  
  if ( passedTest ) {
    firstName = 'John';
  }
  console.log( 'ES6: ' + firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.' );
}

driversLicense6(true);

let i  = 23;

for ( let i = 0; i < 5; i++) {
  console.log('ES6: ' + i);                 // This 'i' is in the block scope therefore different variable to the
                                            // 'i' outside of the for loop block scope = 0,1,2,3,4
};

console.log('ES6: ' + i);                   // This 'i' is NOT in the for loop block scope so different variable = 23

// If we used 'var' instead of 'let' then 'i' would be the same variable and note: because 'i' was incremented to '5'
// before the break of the loop, then this last console.log would output '5',
*/

/************************************************************************
 ** Lecture: Blocks and IIFE'S
 *************************************************************************
 */
/*
// Simple block IIFE
// ES6
{  // IIFE private block
  const a = 1;
  let b = 2;
  var c = 3;
}
// console.log('ES6: ' + a + b);   // Unable to see a or b
console.log('ES6: ' + c);


//ES5 // Define a private variable
(function () {
  var c = 3;
})();
console.log('ES5: ' + c);
*/

/************************************************************************
 ** Lecture: Strings in ES6
 *************************************************************************
 */
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calculateAge ( year ) {
  return 2016 - year;
}
*/
/***********************************************************************************************************
 * TEMPLATE LITERALS
 *
 * They start and end with ` a back tick, variable names, functions and expression  can be within ${}
 ***********************************************************************************************************
 */
/*
// ES5
console.log( 'ES5: This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' +
              calculateAge(yearOfBirth) + ' years old.');

// ES6 and template literals and we use back ticks '`' instead of single quotation marks as in ES5
console.log(`ES6: This is ${firstName} ${lastName}. he was born in ${yearOfBirth}. Today he is ${calculateAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;

// Checking the contents of a string returning 'true' or 'false', case sensitive.

console.log('ES6: ' + n.startsWith('J'));
console.log('ES6: ' + n.endsWith('th'));
console.log('ES6: ' + n.includes('o'));

// Repeats the string variable without spaces on the same line.

console.log(firstName.repeat(5));

// To get a space we would write a template literal as below and put a space before the last back tick

console.log(`ES6: ${firstName} `.repeat(5));
*/
/********************************************************************************************************
 * ARROW FUNCTIONS 1
 *
 * The biggest advantage of Arrow functions is that they share surrounding 'this' keyword. This means that
 * unlike normal functions, Arrow functions do NOT get their own 'this' keyword. They simply use the 'this'
 * keyword of the function they are written in. They say it has a lexical keyword
 ********************************************************************************************************
 */
/*
const years = [1990, 1965, 1982, 1937];

// ES5 normal function
var ages5 = years.map(function (el) {
  return 2016 - el;
});
console.log('ES5: ' + ages5);

// ES6  Three ways of writing an Arrow function

// Including the calculation within the statement
const ages = years.map(el => 2016 - el);  // Using the arrow function '=>'.
console.log('ES6: ' + ages);

// Using two arguments surrounded by parentheses (el, index)
let ages6 = years.map((el, index) => `Age element ${index + 1}: ${ 2016 - el }. `);
console.log('ES6: ' + ages6);

// If we have more than one line we have to use the curly braces and the return statement as with normal functions
ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}. `
});
console.log('ES6: ' + ages6);
*/
/********************************************************************************************************
 * ARROW FUNCTIONS 2
 *
 * The biggest advantage of Arrow functions is that they share surrounding 'this' keyword. This means that
 * unlike normal functions, Arrow functions do NOT get their own 'this' keyword. They simply use the 'this'
 * keyword of the function they are written in. They say it has a lexical 'this' variable.
 ********************************************************************************************************
 */
/*
// ES5

var box5 = {
  color: 'green',
  position: 1,
  clickMe: function () {
    var self = this;
    document.querySelector('.green').addEventListener('click',function () {
      
        var str = 'ES5: This is box number ' + self.position + ' and it is ' + self.color;
     
        alert(str);
    });
  }
}

// box5.clickMe();     // We get box number is undefined and that is because our inner function is a regular function
                    // and the 'this' keyword will be pointing to the window object. So we assign the variable
                    // 'self' and give it the 'this' value as a work around, and it now works.

// ES6
// Arrow functions use the surrounding this keyword.
// Best practice when you want to preserve the 'this' keyword(variable) use the arrow function '=>'.
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click',() => { // '()' when there is
                                                                                               // more than 1 line
            
            let str = 'ES6: This is box number ' + this.position + ' and it is ' + this.color; // Line 1
            alert(str);                                                                        // Line 2
        });
    }
}

// box6.clickMe();

// const box66 = {
//     color: 'green',
//     position: 1,
//     clickMe: () => {        // replaced with an Arrow function, therefore this method is now sharing the global 'this'
//                             // so the inner function would be sharing the global 'this' and therefore fail.
//         document.querySelector('.green').addEventListener('click',() => {  // '()' when there is
//                                                                                                 // more than 1 line
//
//             let str = 'ES6: This is box number ' + this.position + ' and it is ' + this.color; // Line 1
//             alert(str);                                                                        // Line 2
//         });
//     }
// }
//
// box66.clickMe();


function Person(name) {                 // Function constructor
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function (friends) {
    // The 'name' variable points to the person 'John'
    var arr = friends.map(function (el){
        // In here the this keyword does not point to the object, but in stead points to the Global Object
        return this.name + ' is friends with ' + el;
        
    }.bind(this));      // Bind copies the function and by specifying 'this' we are also copying the outer 'this' into
                        // the copied function, cool trick.
    
    console.log(arr);
}
var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function (friends) {

    let arr = friends.map(el => `${this.name} is friends with ${el}`);
    
    console.log(arr);
}
new Person('Mike').myFriends6(friends);
*/
/********************************************************************************************************
 * DESTRUCTURING
 *
 * This gives us a very convenient of extracting data from a data structure such as an object or an array
 ********************************************************************************************************
 */
/*
// Lets say we have a array containing data and we want to store it in individual variables.

// ES5
// var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// ES6
const [name, age] = ['John', 26];   // Creates a constant for 'name' = 'John' and another constant 'age' = '26'
console.log(name + ' is ' + age);
// --------------------------------------
const obj = {                       // Create the object 'obj'
    firstName: 'John',
    lastName: 'Smith'
}
// --------------------------------------
const {firstName, lastName} = obj;
console.log(firstName + ' ' + lastName);
// ---------------------------------------
const {firstName: a, lastName: b} = obj;  // Assigning a new variable name to 'firstName' = 'a' and 'lastName' = 'b'
console.log(a + ' ' + b);


// Returning multiple values from a function

function calcAgeRetirement(year) {
    const age2 = new Date().getFullYear() - year;
    return [age2,  65 - age2];                                            // 65 is the age of retirement
}

const [age2, retirement] = calcAgeRetirement(1990);

console.log(age2);
console.log(retirement);
*/
/********************************************************************************************************
 * ARRAYS
 *
 * We are now going to use all the coloured boxes
 ********************************************************************************************************
 */
/*
const boxes = document.querySelectorAll('.box');    // returns a nodeList, we have to transfer it into an array

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur){
   cur.style.backgroundColor = 'dodgerblue';                // Changes all the boxes to 'dodgerblue'
});

// ES6
const boxesArr6 = Array.from(boxes);                         // This will transform the nodeList into an array
// boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');    // replaces the above two lines

//--------------------------------------------------------------------------------------------------------------
// Loops  - Changing the text in the boxes

// ES5
/*
for ( var i = 0; i < boxesArr5.length; i++) {
    if ( boxesArr5[i].className === 'box blue' ) {
       continue;
    }
    boxesArr5[i].textContent = 'I have changed to blue!';
}
*/
/*
// ES6          We have a new loop which combines the 'forEach' with the 'for' loop called 'for Of loop'
for (const cur of boxesArr6) {                  // 'cur' could be any name
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I have changed to blue!';
}

// Lets suppose we have a group of children and only one is of the age 18.

// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function (cur){
    return cur >= 18;
});
console.log(full);
// now find the position of the element in the array
console.log(full.indexOf(true));            // Element number 3 starting from 0.
console.log(ages[full.indexOf(true)]);      // returns 21

// ES6
// findIndex method is new
console.log(ages.findIndex(cur => cur >= 18)); // returns 3 again
console.log(ages.find(cur => cur >= 18)); // returns 21 again
*/


/**********************************************************************************************************
 * SPREAD OPERATOR (EXPAND) '...'
 *
 * This is a very convenient way to expand elements of an array in places like arguments and function calls
 * and other structures like nodeList
 **********************************************************************************************************
 */
/*
// Simple function to add four ages
function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ---------------------------------------------------
// Now using an array to call the function and it's parameters
var ages = [18, 30, 12, 21];

// ES5
var sum2 = addFourAges.apply(null, ages);    // Remember apply uses an array
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);           // '...' means expand the array, works like the var sum2 line above
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, 'Lily', ...familyMiller]; // adding two arrays using the expand operator and
                                                             // including another bigFamily member, which could be
                                                             // anywhere in the array.
console.log(bigFamily);
// ----------------------------------------------------
// We can also use this on a nodList for example

const h = document.querySelector('h1');              // 'h' is NOT a nodeList it's simple a node 'h1'
const boxes = document.querySelectorAll('.box');     // returns a nodeList into boxes
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
*/

/***********************************************************************************************************
 * REST PARAMETERS      (function parameters)
 *
 * The rest parameters takes single parameters and creates an array
 * The big difference between the spread operator and the rest operator is in the place that we use them.
 *  Spread Operator:    This is used in the function call
 *  Rest Operator:      This is used in the function declaration to accept an arbitrary number of parameters
 ***********************************************************************************************************
 */

/*
// ES5
function isFullAge5() {
    // console.log(arguments);         // arguments looks like an array but it isn't
    var argsArr = Array.prototype.slice.call(arguments);
    
    argsArr.forEach(function (cur){
        console.log((2016 - cur) >= 18);
    });
}
console.log('ES5......');
isFullAge5(1990,1999,1965);
console.log('=====');
isFullAge5(1990,1999,1965,2016,1987);

// ES6
console.log('ES6......');
function isFullAge6(...years) {
    years.forEach(cur => console.log((2016 - cur) >=18));
}
isFullAge6(1990,1999,1965,2016,1987);
*/
/*
// ES5
function isFullAge5(limit) {        // add the age limit
    // console.log(arguments);         // arguments looks like an array but it isn't
    var argsArr = Array.prototype.slice.call(arguments, 1); // It will start slicing from index 1
    console.log(argsArr);
    argsArr.forEach(function (cur){
        console.log((2016 - cur) >= limit);
    });
}
console.log('ES5......');
isFullAge5(21,1990,1999,1965);
console.log('=====');
isFullAge5(21,1990,1999,1965,2016,1987);

// ES6
console.log('ES6......');
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2016 - cur) >= limit));
}
isFullAge6(21,1990,1999,1965,2016,1987);
*/
/***********************************************************************************************************
 * DEFAULT PARAMETERS
 *
 * We use them whenever we want one or more parameters of a function to be preset.
 ***********************************************************************************************************
 */

/*
// ES5

function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    
    // Default parameters
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'English' : nationality = nationality;
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('john', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
*/
/*
//ES6
// Specifying defaults in the parameter list of a function.
function SmithPerson(firstName, yearOfBirth, lastName='Smith', nationality='English') {
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}
var john = new SmithPerson('john', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
*/


/***********************************************************************************************************
 * MAPS
 *
 * In the past we would create objects with properties and then assign values to them, this was known as a
 * hashmap for manipulating strings.
 * Maps is a completely new key valued data structure in ES6. The big difference is we can use anything for
 * the keys and not just objects. In Maps we can use any type of primitives functions and objects.
 * Maps can also be iterated upon which we couldn't do previously.
 * Maps are better than objects to create hashmaps:
 *  - We can use anything as keys.
 *  - Maps are iterable making it very easy to loop through them and to manipulate data
 *  - Easy to get the number of elements in a map using size
 *  - WE can easily add and remove data from a Map
 ***********************************************************************************************************
 */
/*
const question = new Map();             // A new empty Map
question.set('question', 'What is the official name of the latest JavaScript version?') ; // key + value
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true,'Correct answer: 3');
question.set(false, 'Please try again!');

/*
console.log(question.get('question'));
console.log(question.size);                 // Number of elements.

if ( question.has(4) ) {                    // Check if a key exists
    // question.delete(4);                  // Delete a key, if you try to delete a key that doesn't exist, it's
                                            // ignored
    console.log('Answer 4 is here');
}

// question.clear();  // Will clear the map
// console.log(question);

question.forEach((value, key) => console.log(`This is ${key}, and it is set to:- ${value}`));

for (let [key, value] of question.entries()){                         // same as above
    console.log(`This is ${key}, and it is set to:- ${value}`);
}
*/
/*
for (let [key, value] of question.entries()){
    if (typeof (key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Enter the correct answer'));

console.log(question.get(ans === question.get('correct')));
*/

/***********************************************************************************************************
 * CLASSES
 *
 * Classes don't add anything new to the language they are just synthetic sugar on the way we do prototype and
 * implement inheritance in JavaScript. Classes make it easier to implement inheritance and to create objects based
 * upon blue prints. In ES5 blue prints are called function constructors and we add methods to their prototype
 * properties in order to make all the instances created through a function constructor inherit these methods.
 * Class definitions are not hoisted, unlike function constructors we need to implement the class and only later in
 * our code can we start using it.
 * We can only add methods to classes and not properties.
 */

/*
// ES5
// We are writing this as a function expression but it could also be done as a function declaration.
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log('ES5: ' + age);
}

var john5 = new Person5('John', 1990, 'teacher');
john5.calculateAge();

// ES6  is the same as for ES5 but nicely structured
// All classes have to have the constructor method declaration
// We don't need separators such as semicolons or comma's
// We can add static methods to a class, these are not inherited by any new instances, not really helpful, we can use
// these like helper functions.

class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    // Add a method in the class,  no function or prototype here
    calculateAge () {
        const age = new Date().getFullYear() - this.yearOfBirth;
        console.log('ES6: ' + age);
    }
    
    static greeting() {
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');
john6.calculateAge();

// calling the static method
Person6.greeting();
*/


/***********************************************************************************************************
 * CLASSES with SUBCLASSES
 *
 * Inheritance between classes using subclasses.
 *
 */

/*
// ES5
// We are writing this as a function expression but it could also be done as a function declaration.
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log('ES5: ' + age);
}

// Inheritance from Person5
// ------------------------
// Why do we specify 'this' keyword as the first parameter of the call method:
// - We need to remember how the new operator works:
//   - So when creating a new Athlete5 object, new creates a new empty object, calls the Athlete5 function constructor
//     and sets the 'this' keyword to the newly created empty objects.
//   - The execution context that we are in here the 'this' keyword will point to the new empty object. If we want the
//     Person5 name, yearOfBirth and job to be set on the new Athlete5 object, then we need to call the Person5
//     constructor with the 'this' keyword also set to the newly created Athlete5 object.
//   - So after we create the Athlete5 object all the properties including Person5 will be in the Athlete5 object.
var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);     // calling the super class, we must specify it's arguments, no more
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);  // This connects the two objects and the prototype chain is
                                                        // maintained.

Athlete5.prototype.wonMedal = function () {         // Person5 will not see this method because it's only in the
                                                    // Athlete5 object.
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();    // Inherited from the super class Person5
johnAthlete5.wonMedal();

// ES6

class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    // Add a method in the class,  no function or prototype here
    calculateAge () {
        const age = new Date().getFullYear() - this.yearOfBirth;
        console.log('ES6: ' + age);
    }
    
    static greeting() {
        console.log('Hey there!');
    }
}

// Inheritance from Person6
// ------------------------
class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    
    wonMedal() {                    // Not inherited
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
johnAthlete6.calculateAge();    // Inherited from the super class Person5
johnAthlete6.wonMedal();
Person6.greeting();
*/


/***********************************************************************************************************
 * CODING CHALLENGE
 *
 * Suppose that you're working in a small town administration, and you're in charge of two town elements:
 1. Parks
 2. Streets
 
 It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
 
 At an end-of-year meeting, your boss wants a final report with the following:
 1. Tree density of each park in the town (forumla: number of trees/park area)
 2. Average age of each town's park (forumla: sum of all ages/number of parks)
 3. The name of the park that has more than 1000 trees
 4. Total and average length of the town's streets
 5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
 
 All the report data should be printed to the console.
 
 HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
 
 */
const formatNumber = function (num) {
    
    var numSplit, int, dec;
    
    /*
    + or - before the number
    exactly 2 decimal points
    comma separating the thousands
    
    2310.4567 -> +2,310.46
    2000 -> +2,000.00
    */
    
    num = Math.abs (num);
    num = num.toFixed (2);
    // numSplit = num.split('.');
    numSplit = num.split ('.');
    
    int = numSplit[0];
    if ( int.length > 3 ) {
        int = int.substr (0, int.length - 3) + ',' + int.substr (int.length - 3, 3);
        //input 23510, output 23,510
    }
    
    dec = numSplit[1];
    
    return (int < 0 ? '-' : '+') +  int + '.' + dec;
};

class Element {                             // Our Super class
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}


class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area; //km2
        this.numTrees = numTrees;
    }
    
    treeDensity() {
        const density = formatNumber(this.numTrees / this.area);
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}


class Street extends Element {
    constructor(name, buildYear, length, size = 3) {    // Size defaults to '3'
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    
    classifyStreet () {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}


const allParks = [new Park('Green Park', 1987, 0.2, 215),
                  new Park('National Park', 1894, 2.9, 3541),
                  new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                    new Street('Evergreen Street', 2008, 2.7, 2),
                    new Street('4th Street', 2015, 0.8),
                    new Street('Sunset Boulevard', 1982, 2.5, 5)];

function calc(arr) {
    
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    
    return [sum, sum / arr.length];
    
}


function reportParks(p) {
    
    console.log('-----PARKS REPORT-----');
    
    // Density
    p.forEach(el => el.treeDensity());
    
    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);
    
    // Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
    
}


function reportStreets(s) {
    
    console.log('-----STREETS REPORT-----');
    
    //Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);
    
    // CLassify sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);



