/*
 Modules are just functions that can or cannot accept arguments into the
 The budget controller module, this variable will be an immediately invoked object expression that will return an
 object. We are creating an IIFE
 The IIFE is private because it creates a new scope that cannot be seen outside of the scope
 The secret of the module is that only return public objects that can be seen by other code.
 */
/**
 =====================================================================================================================
 BUDGET CONTROLLER
 =====================================================================================================================
 This is our first module budgetController
*/
var budgetController = (function () {
  
  // Constructor
  var Expense = function (id, description, value) {     // Function constructor to hold data
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };
  
  Expense.prototype.calcPercentage = function (totalIncome) {
    if ( totalIncome > 0 ) {
      this.percentage = Math.round(( this.value / totalIncome ) * 100);
    } else {
      this.percentage = -1;
    }
  };
  
  Expense.prototype.getPercentage = function () {
    return this.percentage;
  };
  
  // Constructor
  var Income = function (id, description, value) {     // Function constructor to hold data
    this.id = id;
    this.description = description;
    this.value = value;
  };
  
  // private function
  var calculateTotal = function (type) {
    
    var sum = 0;
    
    data.allItems[type].forEach(function (cur) {
      sum += cur.value;
    });
    
    data.totals[type] = sum;
    
  };
  
  // Data structure
  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0,
    percentage: -1
  };
  
  return {
    addItem: function (type, des, val) {
      var newItem, ID;
      
      // [1 2 3 4 5], next ID = 6
      // [1 2 4 6 8], next ID = 9
      // ID = last ID + 1
      
      // Create new ID
      if ( data.allItems[type].length > 0 ) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1; // Retrieves the last ID and adds 1 to it for
      } else {
        ID = 0;
      }
      
      // Create new instances based on 'inc' or 'exp' type
      if ( type === 'exp' ) {
        newItem = new Expense (ID, des, val);
      } else if ( type === 'inc' ) {
        newItem = new Income (ID, des, val);
      }
      
      // Push it into our data structure
      data.allItems[type].push (newItem);
      
      // Return the new element
      return newItem;
      
    },
    
    deleteItem: function (type, id) {
      
      // [1 2 4 6 8], next ID = 9
      // data.allItems[type][id];  We cannot use this because the 'id' may not be in a sequential order so we must find
      //                           the last 'id' so if you selected the element no '3' you would actually delete '6'.
      // We need to create an array of all the items and find out the index of the element that we want to delete.
      // Example if we wanted to delete item no '6' the index would be '3'.
      
      var ids, index;
      
      ids = data.allItems[type].map(function (current) {    // map creates a new array of our 'ids'
        return current.id;   // ids = [1 2 4 6 8] now we have to find the index of the 'id = 6'
      });
      
      index = ids.indexOf(id);   // returns the 'index' of the 'id = 6' which is 'index = 3'
      
      if ( index !== -1) {
        data.allItems[type].splice(index, 1);  // This will delete 'index' number '3', 'id' number '6'
      }
      
    },
    
    calculateBudget: function () {
      
      // Calculate total income and expenses
      calculateTotal('exp');
      calculateTotal('inc');
      
      // Calculate the budget: income - expenses
      data.budget = data.totals.inc - data.totals.exp;
      
      // Calculate the percentage of income that we spent
      if ( data.totals.inc > 0 ){
        data.percentage = Math.round(( data.totals.exp / data.totals.inc) * 100 );
      } else {
        data.percentage = -1;
      }
      
      // Expense = 100 and income = 300, spent 33.333% = 100/300 = 0.3333 * 100
    },
    
    calculatePercentages: function () {
      /*
      a = 20
      b = 10
      c = 40
      income = 100
      a = 20 / 100 = 20%
      b = 10 / 100 = 10%
      c = 40 / 100 = 40%
      */
      
      data.allItems.exp.forEach(function (cur){  // Call Back function
        cur.calcPercentage(data.totals.inc);
      });
    },
    
    getPercentages: function () {
      
      var allPerc = data.allItems.exp.map(function (cur) {  // allPerc is an array of all percentages created by map
        return cur.getPercentage();
      });
      return allPerc;
    },
    
    getBudget: function () {     // Need to return four values so we create an object
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
      };
    },
    
    testing: function () {
      console.log (data);
    }
    
  };
  
}) ();


/**
=====================================================================================================================
 UI CONTROLLER
=====================================================================================================================
Module UIController is another IIFE. // completely independent modules, known as 'separation of concerns'. It means
that each part should only be doing one thing independently.
*/

var UIController = (function () {
  
  var DOMstrings = {                          // Object of all input strings '.' class labels in the html file
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensesLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container',
    expensesPercLabel: '.item__percentage',
    dateLabel: '.budget__title--month'
  };
  
  var formatNumber = function (num, type) {
    
    var numSplit, int, dec;
    
    /*
    + or - before the number
    exactly 2 decimal points
    comma separating the thousands
    
    2310.4567 -> +2,310.46
    2000 -> +2,000.00
    */
    
    num = Math.abs(num);
    num = num.toFixed(2);
    // numSplit = num.split('.');
    numSplit = num.split('.');
    
    int = numSplit[0];
    if (int.length > 3) {
      int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
      //input 23510, output 23,510
    }
    
    dec = numSplit[1];
    
    return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
    
    
  };
  
  var nodeListForEach = function (list, callback) {
    
    for ( var i = 0; i < list.length; i++) {
      callback(list[i], i);     // list[id], index
    }
  };
  
  return {
    
    getInput: function () {
      return {                                                       // Returning an object rather than three variables
        type: document.querySelector (DOMstrings.inputType).value,   // Will be either 'inc' or 'exp'
        description: document.querySelector (DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector (DOMstrings.inputValue).value)  // 'parseFloat' converts to a number
      };
    },
  
     /*
     This object is the same object we created with the function constructor and then passed it to our app controller.
     In the app controller we first read the fields and store them in the 'input' variable.
     Using this input variable and the 'addItem' method we created a new item and stored it in the 'newItem' variable
     which now contains the new object and that's the object we are going to pass to the 'addListItem' variable.
     */
    addListItem: function (obj, type) {
      var html, newHtml, element;
      // Create HTML string with placeholder text
      
      if ( type === 'inc') {
        element = DOMstrings.incomeContainer;
        
        html = '<div class="item clearfix" id="inc-%id%">' +
               '<div class="item__description">%description%</div>' +
               '<div class="right clearfix">' +
               '<div class="item__value">%value%</div>' +
               '<div class="item__delete"><button class="item__delete--btn">' +
               '<i class="ion-ios-close-outline"></i></button></div>' +
               '</div>' +
               '</div>';
      } else if ( type === 'exp') {
        element = DOMstrings.expensesContainer;
        
        html = '<div class="item clearfix" id="exp-%id%">' +
               '<div class="item__description">%description%</div>' +
               '<div class="right clearfix">' +
               '<div class="item__value">%value%</div>' +
               '<div class="item__percentage">21%</div>' +
               '<div class="item__delete">' +
               '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div>' +
               '</div>' +
               '</div>';
      }
      
      // Replace the placeholder text with some actual data from the object
      if ( html != null ) {
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
      }
      
      // Insert the HTML into the DOM
      
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },
    
    deleteListItem: function (selectorID) {  // Removing elements from the DOM
      
      var el = document.getElementById(selectorID);
      el.parentNode.removeChild(el);
    },
    
    clearFields: function () {
      var fields, fieldsArr;
      
      // this returns a LIST which we will convert to an array using the 'slice' method of array.
      fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
      
      fieldsArr = Array.prototype.slice.call(fields);  // This will trick the slice method into thinking we gave
                                                       // it an array, so it will create a new array 'fieldsArr'
      // forEach method that we can use on arrays. We create a call back function so it can work on each element in the
      // array.
      fieldsArr.forEach(function (current, index, array) {
        current.value = "";
      });
      
      fieldsArr[0].focus();           // Set the focus back to the fist input field 'description'.
      
    },
    
    displayBudget: function (obj) {
      
      var type;
      
      obj.budget > 0 ? type = 'inc' : type = 'exp';
      
      document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
      document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
      document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
      
      if ( obj.percentage > 0  ) {
        document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
      } else {
        document.querySelector(DOMstrings.percentageLabel).textContent = '---';
      }
    },
    
    displayPercentages: function (percentages) {
      var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);  // returns a nodeList
      
      nodeListForEach(fields, function (current, index) {   // Call back function assigned to the
        if ( percentages[index] > 0 ) {                             // callback parameter
          current.textContent = percentages[index] + '%';
        } else {
          current.textContent = '---';
        }
      });
    },
    
    displayMonth: function () {
      var now, month, months, year;
      
      now = new Date();  // Returns today's date.   var christmas = new Date(2020, 11, 25);
  
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
                'November', 'December'];
      
      month = now.getMonth();           // zero based
      year = now.getFullYear();         // zero based
      
      document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
      
    },
    
    changedType: function () {
      
      var fields = document.querySelectorAll(               // Remember it returns a nodeList
        DOMstrings.inputType + ',' +
        DOMstrings.inputDescription + ',' +
        DOMstrings.inputValue );
      
      nodeListForEach(fields, function (cur) {
        cur.classList.toggle('red-focus');
      });
      
      document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
      
    },
    
    getDomstrings: function () {      // We are now exposing the DOMstrings to the public by returning the object
      return DOMstrings;
    }
  };
  
}) ();

// The above modules are completely independent modules, known as 'separation of concerns'. It means
// that each part should only be doing one thing independently. The two modules don't know about each other.

/**
=====================================================================================================================
 APPLICATION CONTROLLER
=====================================================================================================================
This module will access the above two modules linking them together by using parameter arguments.
*/
var controller = (function (budgetCtrl, UICtrl) {
  
  var setupEventListeners = function () {
    
    var DOM = UICtrl.getDomstrings ();  // This variable now contains the DOMstrings that we defined in the UIController
    
    // One event listener is waiting for the 'add__btn' to be pressed and the other is waiting for the 'Enter' key to be
    // pressed, both call the same function 'ctrlAddItem'
    document.querySelector (DOM.inputBtn).addEventListener ('click', ctrlAddItem);
    document.addEventListener ('keypress', function (event) {
      // keypress is when any key is pressed, but we want 'Enter'
      // Note: 'event.keyCode' and 'event.which' have now been depreciated.
      // if ( event.keycode === 13 || event.which === 13) as shown in the lecture has not been used. I used key instead.
      if ( event.key === 'Enter' ) {
        ctrlAddItem ();
      }
    });
    // By referencing the 'DOM.container' we are using event bubbling up.
    document.querySelector(DOM.container).addEventListener('click',ctrlDeleteItem);
    
    document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
  };
  
  var updateBudget = function () {
  
    // 1. Calculate the budget.
    budgetCtrl.calculateBudget();
    
    // 2. Return the budget.
    var budget = budgetCtrl.getBudget();
    
    // 3. Display the budget on the UI.
    UICtrl.displayBudget(budget);

  };
  
  var updatePercentages = function () {
    
    // 1. Calculate the percentages
    budgetCtrl.calculatePercentages();
    
    // 2. Read percentages from the Budget Controller
    var percentages = budgetCtrl.getPercentages();
    
    // 3. Update the UI with the new percentages
    UICtrl.displayPercentages(percentages);
  };
  
  var ctrlAddItem = function () {
    var input, newItem;
    
    // 1. Get the field input data.
    input = UIController.getInput ();
    
    if ( input.description !== "" && !isNaN(input.value) && input.value > 0) {

      // 2. Add the item to the budget controller.
      newItem = budgetCtrl.addItem (input.type, input.description, input.value);

      // 3. Add the item to the UI.
      UICtrl.addListItem (newItem, input.type);

      // 4. Clear The fields and set the focus back to the fist input field 'Add description'
      UICtrl.clearFields ();

      // 5. Calculate and update budget
      updateBudget ();
      
      // 6. Calculate and update the percentages
      updatePercentages();
    }

  };
  
  var ctrlDeleteItem = function (event) {      // The word 'event' could be any word
    var itemID, splitID, type, ID;
  
    // Working up from the delete button in the html file, this is called event delegation
    // 'event.target' is where the event was fired. We that traversed the DOM al the way up to the element we are
    // interested in. (Event Delegation)
    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
    
    if ( itemID ) {
      // inc-1 exp-1  as soon as we call one of these methods on a string, javascript automatically puts a wrapper
      // around it converting it from a primitive to an object and this object has access to a lot of string methods.
      // The same can also be done for numbers.
      
      splitID = itemID.split('-');  // Returns an array where the first element is before '-' and the second
                                             // element is after the '-'
      type = splitID[0];
      ID = parseInt( splitID[1]);            // Convert the string to an integer
      
      // 1. Delete the item from the data structure.
      budgetCtrl.deleteItem(type, ID);
      
      // 2. Delete the item from the UI
      UICtrl.deleteListItem(itemID);
      
      // 3. Update and show the new budget
      updateBudget();
  
      // 4. Calculate and update the percentages
      updatePercentages();
      
    }
    
  };
  
  return {
    init: function () {
      console.log ('Application has started.');
      UICtrl.displayMonth();
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1
      });
      setupEventListeners ();
    }
  };
  
}) (budgetController, UIController);   // Inside this method they will have a different name, this allows us to
                                       // change the method (function) function name without having to modify the
                                       // internals of this IIFE.
/**
 Initializing The Application using the init: method of the APPLICATION CONTROLLER
 This is the only line of code outside of the modules, without this nothing is going to happen.
 */
controller.init ();