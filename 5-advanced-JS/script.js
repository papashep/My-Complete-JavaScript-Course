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




