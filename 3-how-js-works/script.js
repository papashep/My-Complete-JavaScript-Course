/*
Global Execution Context, think of this as your window for now.
Code not inside a function is held inside the Global Execution Context

    var name = john;         <------- Not in any function stored in the Global Object
    
    function first() {       <------- Not in any function stored in the Global Object
      var a = 'Hello!';
      second();
      var x = a + name;
    }
    
    function second() {      <------- Not in any function stored in the Global Object
      var b = 'Hi!';
      third();
      var z = b + name;
    }
    
    function third() {       <------- Not in any function stored in the Global Object
      var c = 'Hey!';
      var z = c + name;
    }
    
  first();                   -------> Here we call the fist function and it gets a new
                                      Execution Context. What happens is this new context is put
                                      on the top of the current context. So called the Execution Stack.
                                      This becomes the active context in which the code is executed.
                                        var a = 'Hello!';     The 'a' variable is stored in this new context.
                                        second();             A new context is created and put on top of the stack.
                                        var x = a + name;     The 'x' variable is stored in this context when the
                                                              active context for the second function is removed from
                                                              the stack.
                                      When completed the context gets removed from the stack.
                                      Now the Global Execution context becomes the active context.
  second();                  -------> Here we call the second function from the first function and it gets a new
                                      Execution Context. What happens is this new context is put
                                      on the top of the current context. So called Execution Stack.
                                      This becomes the active context in which the code is executed.
                                         var b = 'Hi!';         The 'b' variable is stored in this new context.
                                         third();               A new context is created and put on top of the stack.
                                         var z = b + name;      The 'z' variable is stored in this context when the
                                                                active context for the third function is removed from
                                                                the stack.
                                      When completed the context gets removed from the stack.
                                      The context for the first function becomes the active context.
 
  Third();                   -------> Here we call the third function from the second function and it gets a new
                                      Execution Context. What happens is this new context is put
                                      on the top of the current context. So called Execution Stack.
                                      This becomes the active context in which the code is executed.
                                         var c = 'Hey'          The 'c' variable is stored in this new context.
                                         var z = c + name;      The 'z' variable is stored in this new context.
                                      When completed the context gets removed from the stack.
                                      The context for the second function becomes the active context.
 
 Each time we call a function it gets it's own Execution Context placed on top of the Stack.
 
 An execution context object has three properties:
  - The variable Object (VO)
    - Contains the function arguments
    - Any variable declarations
    - Any function declarations, not function expressions.
  - The Scope chain
    - The current variable objects
    - The variable objects of all it's parents
    - 'This' variable
 The execution context is created when a function is called and it is put on top of the execution stack,
 this happens in two phases:
    - The creation phase;
      - Creation of the Variable Object (VO).
        - The argument object is created, containing all the arguments that were passed into the function declaration.
        - Hoisting, this means they are available before the execution starts
          They are defined differently, functions declarations have a 'pointing to property' and variables
          are defined as undefined.
          - The code is scanned for function declarations: for each function declaration, a property is created in the
            Variable Object, pointing to the function declaration . This is done even before the code is executed.
          - Code is scanned for variable declarations: for each variable, a property is created in the Variable Object,
            and set to undefined.
      - Creation of the Scope chain.
        - Scoping answers the question "where can we access a certain variable or function?"
        - In JavaScript each new function creates a scope: the space/environment, in which the variables that it
          defines are accessible. In JavaScript the only way to create a new Scope is to write a function declaration.
          In Java a scope is a class, method or code block, but not in JavaScript.
        - Lexical scoping: a function that is lexically within another function which gets access to the scope
          of the outer function, also called the parent function.
      - Determine the value of the 'this' variable.
        - Each and every execution gets the 'this' variable and it is stored in the execution context object.
        - In a Regular function call: the 'this' keyword points at the global object,
          (the window object in the browser), this is the default.
        - In a Method call; the 'this' variable points to the object that is calling the method.
        - The 'this' keyword is not assigned a value until a function where it is defined is actually called.
    - Execution phase:
      - The code of the function that generated the current execution context is run line by line.
 
      
 */
///////////////////////////////////////
// Lecture: Hoisting in practice
/*
Hoisting
  - In the creation phase of the execution context, which in this case is the Global execution context, the
    function declaration calculateAge(1965) is stored in the Variable Object of the global context, before the code
    is executed. This is why the calculateAge function is available for us to use it. Remember a pointer property
    is created for the function declaration that we require.
    This only works for function declarations, but not for function expressions.
    The biggest take away from hoisting is the we can use code to call function declarations even before we have
    defined them in our code.
 */

// Function declarations

/*
calculateAge(1965);       // Using the function before we declared it.

function calculateAge(year) {
  console.log(2016 - year);
}
*/
// Function Expressions
/*
  retirement(1990);  -  If you move this line above the function expression you get the error:
  -----------------     'retirement is not a function'.
                        ------------------------------
  Hoisting only works with function declarations and not function expressions
 */


// retirement(1990);       // If you move this line above the function expression you get the error:
                           //      'retirement is not a function'.
/*
var retirement = function(year) {
  console.log(65 - (2016 - year));
}
retirement(1990);    // Must be declared after the function expression in your code.
// --------------------------------------------------------

// If you move this line above the function expression you get the error:
//      'retirement is not a function'.

console.log(age);         // The output shows the variable as undefined, set as part of creating the Variable Object VO
// -----------------------------

//Variables
var age = 23;
console.log(age);         // Age 23

function foo() {
  var age = 65;
  console.log(age);
}

foo();                    // Age is 65, is stored in the foo function execution context object on the stack.

console.log(age);         // Age is 23, stored in the global execution context object  'var age = 23'

*/
///////////////////////////////////////
// Lecture: Scoping

// First scoping chain example (Lexical Scoping)

/*
 var a = 'Hello!';              Global execution context object
 first();                       Creates the execution context object for the first function.
  function first() {
    var b = 'Hi!';
    second();                   Creates the execution context object for the second function.
    function second() {
      var c = 'Hey!';
      console.log(a + b + c);   The scope allows var c to be found in the second execution function context.
                                The scope allows var b to be found in the first execution function context.
                                The scope allows var a to be found in the global execution context.
                                Note: This does not work backwards.
                                This is known as the Scope Chain and only works one way.
    }
 }
 
 The above works because of the scoping chain, the first function is inside the global execution scope, the second
 function is inside the first function. This is called Lexical Scoping.
 */
/*
var a = 'Hello!';
first();

function first() {
  var b = 'Hi!';
  second ();

  function second () {
    var c = 'Hey!';
    console.log (a + b + c);
  }
}
*/

/*
 Example to show the difference between execution stack and scope chain


 var a = 'Hello!';
 first();
 
  function first() {
    var b = 'Hi!';
    second();
    
    function second() {
      var c = 'Hey!';
      third();
    }
  }
 
 function third() {
   var d = 'Mark';
   console.log(a + b + c + d);
 }
 
 
 The Execution Stack is in the order they are called.
 The Scope chain is in the order in which the functions are written in the code lexically.
 
Execution Stack of the code          ^
  -  Execution Context third()       |
  -  Execution Context second()      |
  -  Execution Context first()       |
  -  Execution Context global()      |

Scope Chain                          ^
  - Global Scope                     |     a = 'Hello!'
    - Scope first()                  |     a = 'Hello!'   b = 'Hi!'
      - Scope second()               |     a = 'Hello!'   b = 'Hi!'   c = 'Hey!'
    - Scope third()                  |     a = 'Hello!'   d = 'Mark'
  
Note: The order in which the functions are called, Execution Stack' does not determine the values of the variables
      this is done by the 'Scope Chain'.
 */
/*
var a = 'Hello!';
first();

function first() {
  var b = 'Hi!';
  second();
  
  function second() {
    var c = 'Hey!';
    third();
  }
}

function third() {
  var d = 'Mark';
  console.log(a, d);
}
*/

///////////////////////////////////////
// Lecture: The this keyword in practice.

// console.log(this);    // gets the windows object.

// calculateAge(1985);
//
// function calculateAge(year){
//   console.log(2016 - year);
//   console.log(this);          // This is a Regular function call and always points to the window.
// }

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function () {
    console.log (this);                       // The john object
    console.log (2016 - this.yearOfBirth);    // Year of birth
    function innerFunction() {
      console.log(this);                      // The windows object, it's still a regular project.
    }
    innerFunction();
  }
}
john.calculateAge();    // The 'this' now refers to the object that called the method calculateAge

var mike = {
  name: 'Mike',
  yearOfBirth: 1984
}

mike.calculateAge = john.calculateAge;     // Method borrowing from john
mike.calculateAge();                       // Calling the method, this shows the 'this' variable is only assigned a
                                           // a value when it is called.


