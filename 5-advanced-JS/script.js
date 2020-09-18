// Function Constructor

// Always write Function Constructor name starting with a capital letter
// Remember 'this' is also an object
// This is the Function Constructor
/*
  When we use the new operator first an empty object is created.
  After that the Person constructor function is called with the arguments that we have specified.
  This creates a new execution context that has the 'this' variable.
  In a regular function call the 'this' variable points to the Global Object. The constructor looks after this and
  the 'this' variable will point to the 'new empty object' we have just created. The new empty object is assigned the
  properties we have specified and they are assigned to the john variable.
 */

/*
var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  // this.calculateAge = function () {
  // The function would be put in each and every object ??????
  // }
}

// This just put's it in the Constructors prototype function property which is found through the prototype chain
// and not in each object created, but the prototype chain allows access the function.
Person.prototype.calculateAge = function () {
  console.log(2016 - this.yearOfBirth);
}

// Not normally done but we can add the property 'lastName' to the prototype, so in this case they would all be called
// 'Smith'.
Person.prototype.lastName = 'Smith';

// Creates a new objects and is called 'Instantiation'.
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane',1969,'designer');
var mark = new Person('Mark',1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.name, john.lastName);
console.log(jane.name, jane.lastName);
console.log(mark.name, mark.lastName);
*/



// Object.create
/*
// First we define an object that will act as the prototype and then create a new object based upon that prototype
// this is simply a different way of doing what we have done previously
var personProto = {       // We don't have a capital letter at the beginning, because it's not a function constructor
    calculateAge: function () {
      console.log(2016 - this.yearOfBirth);
    }
};

//Note: we have to use '{ value: required value }' when assigning values to the properties.
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: { value: 'Jane' },
  yearOfBirth: { value: 1969 },
  job: { value: 'designer'}
});

/*
  The difference between Object.create and the function constructor pattern is that Object.create builds an object
  that inherits directly from the parameter argument that we pass into the the new object ie 'personProto'.
  While on the other hand the function constructor the newly created object inherits from the constructors prototype
  property, that's the big difference.
  The benefits of Object.create is that is allows use to implement a really complex inheritance structures in an
  easier way than function constructors, because it allows us to directly specify which object should be a prototype.
  
  The most popular is still the function constructor.
 */


// Primitives vs Objects
/*
  Variables containing primitives actually old that data inside themselves on objects it's very different.
  Variables associated with objects do not contain the object, but instead they contain a reference to a place in memory
  where the object is stored.
 */
/*
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);
// This means each variable holds it's own date. a = 46 b= 23

// Objects
// The same as above but with objects
var obj1 = {
  name: 'John',
  age: 26
}
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);
// The result for obj1.age and obj2.age both had a value of '30' when viewed in the console log
// when we said 'var obj2 = obj1' we did not create an object for obj2 all did was create a variable obj2, that
// contains a reference to obj1 in memory and so whatever we do to obj1 will be the same for obj2.
// In fact obj1 and obj2 are the same object. It works the same way for functions.

// Functions
var age = 27;

var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco';

}

console.log(age);
console.log(obj.city);
console.log(a);

/*
 The result in the console log is age = 27 obj.city = San Francisco
 we passed the 'age' variable holding a primitive and the object 'obj' variable holding a reference into our
 function 'change'. This function when invoked attempted to change the arguments that we passed into it.
 SO when we then look at the console log we se that the primitive has remained unchanged but the city in the
 object obj has changed. SO when we pass a variable holding a primitive and an object variable holding a reference
 to an object into our function 'b' into the function when it was invoked attempted to change the arguments passed
 into it.
 So this shows us when we pass a primitive into a function a simple copy is created, so we can change 'a' as much as
 we want it will never effect the variable on the outside of the function because it is a primitive, but when we pass
 the object it's not really the object that we pass but the reference to the object 'obj'.
 So we do not pass an object into a function, but only the reference to the object, so when we pass the reference to
 the function the change is still reflected outside the function.
 */

/*************************************************
 * Lecture: Passing functions as arguments.
 */
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {                 // arr = array    fn = function  Called a high-order function
  var arrRes = [];
  for ( var i = 0; i < arr.length; i++ ){
    arrRes.push( fn ( arr[i] ) );
  }
  return arrRes;
}

// Call back functions that we pass into our function.
// ---------------------------------------------------
function calculateAge(el) {                   // el = element
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;     // Returns true of false  >=
}
function maxHeartRate(el) {
  if ( el >=18 && el <= 81) {
  return Math.round( 206.9 - ( 0.67 * el ));   // el is the age, round, rounds to the nearest integer.
  } else {
    return -1;
  }
}
// ------------------------------------------------
var ages = arrayCalc(years, calculateAge); // We are not calling the calculateAge function here.
                                           // To do that we would have to specify 'calculateAge()'
                                           // We want is to be called later by the arrayCalc function hence
                                           // it's called a callback function.

var fullAges = arrayCalc(ages, isFullAge); // as above but for isFullAge

var rates = arrayCalc(ages, maxHeartRate); // as above

console.log(ages);
console.log(fullAges);
console.log(rates);

/*
  when JS works from first line , it will skip "years" array and skip "arrayCalc" function  and then skip "calculateAge"
  function.
  Then , it will find var "ages" call arrayCalc function with Arguments (years ,calculateAge ).
  JS will go back to arrayCalc function and replace arrayCalc (arr , fn) with arrayCalc (years ,calculateAge ).
  Then it enters the function to execute it will find an empty array "arrRes" and it will skip it.
  Then it will process the for loop: (var i=0 ; i < years.length , i++).
  It will get all years from the "years" array and store them in arrRes, arrRes.push(fn(arr[i])).
  The for loop will process the years array and fill arrRes array with :
    arrRes.push(calculateAge(years[0]));
    arrRes.push(calculateAge(years[1]));
    arrRes.push(calculateAge(years[2]));
    arrRes.push(calculateAge(years[3]));
    arrRes.push(calculateAge(years[4]));
  The arrRes array will finally look like this:
    calculateAge(years[0])
    calculateAge(years[1])
    calculateAge(years[2])
    calculateAge(years[3])
    calculateAge(years[4])
  One the loop finishes it returns the result. 
  
  Note : calculateAge is the callback function
     
      JS will go to next line;  function calculateAge (le)
     
      it will replace 'le' with  = (years[0])  this is equal to 1990
      it will replace 'le' with  = (years[1])  this is equal to 1965
      it will replace 'le' with  = (years[2])  this is equal to 1937
      it will replace 'le' with  = (years[3])  this is equal to 2005
      it will replace 'le' with  = (years[4])  this is equal to 1998
      
      it enters the calculateAge function and calculates the age for that array element:
      
      function calculateAge (el)) {
        return 2016 - el;      // 'el' being the year.
      }
  
  Note : isFullAge is the callback function
  
      JS will go to next line;  function isFullAge (le)
     
      it will replace 'le' with  = (years[0])  this is equal to 1990
      it will replace 'le' with  = (years[1])  this is equal to 1965
      it will replace 'le' with  = (years[2])  this is equal to 1937
      it will replace 'le' with  = (years[3])  this is equal to 2005
      it will replace 'le' with  = (years[4])  this is equal to 1998
      
      it enters the isFullAge function and calculates is the age is >= 18 for that array element:
      
      function isFullAge(el)  {
        return el >= 18;      // returns true or false.
      }

More notes on callback in the Notes.txt file.
*/


/********************************************************************
 * Lecture; Functions returning Functions
 * Functions is javascript are first class functions as they are objects.
 */

/*
// This function returns an entire function that we can you later, this is possible because functions are always.
// The anonymous functions simple return an object.
function interviewQuestion(job) {
  if ( job === 'designer' ) {
    return function (name) {      // An anonymous function, no function name.
      console.log( name + ', can you please explain what UX design is?' );
    }
  } else if ( job === 'teacher' ) {
    return function (name) {      // An anonymous function, no function name.
      console.log( 'What subject do you teach, ' + name + '?');
    }
  } else {
    return function (name) {      // An anonymous function, no function name.
      console.log('hello ' + name + ', what do you do?');
    }
  }
}

// This returns a function so we have to store the result somewhere:
// This is just like when we store a function expression in a variable (exactly the same)
var teacherQuestion = interviewQuestion('teacher');   // This will be the function returned when we pass 'teacher'
var designerQuestion = interviewQuestion('designer'); // This will be the function returned when we pass 'designer'

teacherQuestion('John');
designerQuestion('john');
designerQuestion('Jane');
designerQuestion('Mike');
// Left to right 'teacher' returns a function using 'mark'
interviewQuestion('teacher')('Mark');    // Same as above but specifying 'Mark' for the name parameter used
                                                    // by the anonymous function within the interviewQuestion function.
                                                    // it works because it's evaluated from left to right.
interviewQuestion('teacher')('Jane');
interviewQuestion('teacher')('Mike');
*/

/***********************************************************************
 * Immediately Invoked Function Expressions
 * Known as (IFFE)
 *
 */
/*
// A simple game that hides the score and returns true or false
// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();
// A better way is to invoke an IFFE expression.
// How does it work:
// If we specify function () {
//               }   it will expect a function declaration and give it a parsing error at compile time.
// We fool the parser by surrounding the expresion with parenthesis and the ending () invokes the function and treats
// it as an expression.
// This is privacy data because once invoked you cannot reference anything, they are only run once
// we can you his type of function to store variables keeping them private.
(function () {                                    // Anonymous function
  var score = Math.random() * 10;
  console.log(score >= 5);
})();
+function () {                                    // Anonymous function, same as above
  var score = Math.random() * 10;
  console.log(score >= 5);
}();

// This time we pass a parameter to the function
(function (goodLuck) {                                    // Anonymous function
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);

!function (goodLuck) {                                    // Anonymous function, same as above
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
}(5);
*/


/*********************************************
 * Lecture: Closures
 */
/*
function retirement(retirementAge) {
  var a = ' years left until retirement.';
  return function (yearOfBirth) {
    var age = 2020 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);
retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);
retirement(66)(1956);


// My little closures function example to add two numbers to the 'a' variable in the main function
// You cannot change the value of 'a' but you can still use it.
function addx(b){
  var a=100;
  return function (c) {
    var total = a + b + c;
    console.log(total);
    a = b + c;
  }
}
addx(200)(50);
addx(20)(3);

// function interviewQuestion(job) {
//   if ( job === 'designer' ) {
//     return function (name) {      // An anonymous function, no function name.
//       console.log( name + ', can you please explain what UX design is?' );
//     }
//   } else if ( job === 'teacher' ) {
//     return function (name) {      // An anonymous function, no function name.
//       console.log( 'What subject do you teach, ' + name + '?');
//     }
//   } else {
//     return function (name) {      // An anonymous function, no function name.
//       console.log('hello ' + name + ', what do you do?');
//     }
//   }
// }

// The above using closures
function interviewQuestion (job) {
  return function (name) {
    if ( job === 'designer' ) {
      console.log (name + ', can you please explain what UX design is?');
    } else if ( job === 'teacher' ) {
      console.log ('What subject do you teach, ' + name + '?');
    } else {
      console.log ('hello ' + name + ', what do you do?');
    }
  }
}
interviewQuestion('teacher')('John');
interviewQuestion('designer')('Jane');
interviewQuestion('')('Mark');



// Also write it like this
// retirement(66)(1956);
*/

/*
 The above calls the retirement function passing '66' to it, it is executed and popped of the stack on completion.
 When run we assign the variable 'a' a value and process the anonymous function to calculate the age and display
 it on the console log with the value of 'a' giving '2 years left until retirement.'
 But some how we are able to use the variable and retirement function after it has gone, this is 'Closures'.
 An inner function has always access to the variables and parameters of it's out function, even after the outer
 function has returned.

                                                                                         Global Scope
  Execution Stack                                                                        ------------
  ---------------
                                 
                                 function retirement(retirementAge) {
                                  var a = ' years let until retirement.';
                                  return function (yearOfBirth) {
                                    var age = 2016 - yearOfBirth;
                                    console.log((retirementAge - age) + a);
                                  }
                                 }

   Execution Context  ------>     var retirementUS = retirement(66);                   Scope
      retirement()                retirementUS(1990)                                   retirement()  retirementAge(66)
   On Return this context                                                                            a = 'years ...'
   is gone, but the 'a' var       // Result:                                           Remember the scope chain is a
   and retirementAge=66 still     // 40 years left until retirement.                   pointer to variable objects
   exists in memory               // (2016 - (2016 - 1990))
  
   Next place this Context Execution
   on the stack above the Global
   Execution
   retirementAge=66
   a= 'years .....'
   yearOfBirth = 1990                                                                         Scope
   age =26                                                                                    retirement(US)
   Execution context                                                                              retirementAge=66
      retirementUS()                                                                              a='years.....'
                                                                                                  Created by the
                                                                                                  inner function
                                                                                                     yearOfBirth=1990
                                                                                                     age=25
                                                                                                  
   Since the execution variables still exists the scope chain remains intact, Closures ae built in within JavaScript.
   An inner function has always access to the variables and parameters of it's out function, even after the outer
   function has returned.
     
     
     Execution Stack                                                                    Scope Chain
     ---------------                                                                    ---------------
*/

/*************************************************
 * Lecture: Bind, Call and Apply methods
 */
/*
var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function (style, timeOfDay){
    if ( style === 'formal') {
      console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and' +
        ' I\'m '
        + this.age + ' years old.');
    } else if ( style === 'friendly') {
      console.log('Hey! What\'s up? Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m '
        + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    }
  }
}

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
}
john.presentation('formal','morning');

// Let use the presentation function for Emily who does not have it defined in her object
// We use the call method specifying the value for the 'this' variable followed by the other arguments
john.presentation.call(emily,'friendly','afternoon');  // Called method borrowing.

john.presentation.apply(emily,['formal', 'morning']);  // This may not work because our function does not expect an
                                                       // array. IT DID WORK FOR ME
// The Bind method is very similar to the call method, it also allows us to set the 'this' method explicitly, however
// the difference here is the bind method doesn't immediately call the function, but instead it generates a copy of
// the function so we can store it somewhere, it can be extremely useful to set a function with preset values.
// This is known as Currying in JavaScript.

var johnFriendly = john.presentation.bind(john, 'friendly');  // The function gets stored in the johnFriendly variable.
                                                              // in this example we only stored the first input
                                                              // variable, we could have stored both if we wanted.
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily,'formal');
emilyFormal('afternoon');

// Using the bind method with call back
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {                 // arr = array    fn = function  Called a high-order function
  var arrRes = [];                            // the function is applied to the array
  for ( var i = 0; i < arr.length; i++ ){
    arrRes.push( fn ( arr[i] ) );
  }
  return arrRes;
}

// Call back functions that we pass into our function.
// ---------------------------------------------------
function calculateAge(el) {                   // el = element
  return 2016 - el;
}

function isFullAge(limit, el) {               // Added limit to the fullAge function
  return el >= limit;                         // Returns true of false  >=
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this,20));
console.log(ages);
console.log(fullJapan);


// // Using version 6+ of JavaScript
// let dragon =
//   name =>
//     size =>
//       element =>
//         name + ' is a ' +
//         size + ' dragon that breathes ' +
//         element + '!'
// console.log(dragon('fluffykins')('tiny')('lightning'))
*/

/*********************************************************************
 *  Coding Challenge
 */
/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one
   (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers
   (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct
   answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor
   (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code
   is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do
   exactly that).
*/
/*
// Function Constructor
(function() {   // Answer to number 7 is an immediately invoked expression.
  function Question(question, answers, correct) {
    
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
  
  // write the method in the prototype of Question so that it's not in all the instances created from the function
  // Example of  usage when the Question is called by 'q1' then the this keyword will point to 'q1'
  Question.prototype.displayQuestion =  function () {
    
    console.log(this.question);
    
    for ( var i = 0; i < this.answers.length; i++ ) {
      console.log(i + ': ' + this.answers[i]);
    }
  }
  
  Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
      console.log('Correct answer!');
    } else {
      console.log('Wrong answer. Try again :)')
    }
  }
  
  // Now use the function constructor to create a couple of questions
  var q1 = new Question('Is JavaScript the coolest programming language in the world?',
    ['Yes','No'],0);
  // 'new' creates an empty object, then it calls the Question function and sets the 'this' variable(s) of this function
  // to the new empty object that we just created 'q1' which holds the reference to the new object.
  
  var q2 = new Question('What is the name of this course\'s teacher?',
    ['John','Fred', 'Jonas'],2);
  
  var q3 = new Question('What does best describe coding?',
    ['Boring','Hard', 'Fun','Tedious'],2);
  
  // Store the questions in an array and select one random question
  var questions = [q1, q2, q3];
  
  var n = Math.floor(Math.random() * questions.length);   // Math.floor converts the random number to an integer value
    
    questions[n].displayQuestion();
    
    var answer = parseInt(prompt('Please select the correct answer.'));
    questions[n].checkAnswer(answer);
  
})();  // Answer to question 7 is to invoke the immediate function'()'
*/
/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function
   for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user
   writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the
   score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools
   you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/

// See Notes.txt to see what is happening here
// -------------------------------------------
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }
        
        this.displayScore(sc);
    }
    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }
    
    
    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                          ['Yes', 'No'], 0);
    var q2 = new Question('What is the name of this course\'s teacher?',
                          ['John', 'Micheal', 'Jonas'], 2);
    var q3 = new Question('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tedious'], 2);
    
    var questions = [q1, q2, q3];
    
    function score() {        // We are using the closures to keep a running total of the score
        var sc = 0;
        return function(correct) {   // Increase the score if the answer is correct and return it
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    
    var keepScore = score();    // This variable holds the function score(), the 'sc' variable will always be accessible
                                // to the keepScore function.
   
   
    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var answer = prompt('Please select the correct answer.');
        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }
    
    nextQuestion();  // we call the same function each time we want to continue with the game
    
})();
