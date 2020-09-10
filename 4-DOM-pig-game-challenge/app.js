/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score.
  After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;   // Variables defined here are in the Global scope

initGame();

// Used to change the values on the Web Page  We call this a setter because it sets a value
// document.querySelector('#current-' + activePlayer).textContent = 'dice'; // textContent can only be text
// document.querySelector('#current-' + activePlayer).innerHTML='<em>' + dice + '</em>';  // innerHTML same as above.

// We call this a getter because it just gets a value
// var x = document.querySelector('#score-0').textContent;   // Read only
// console.log(x);

// Hide the dice at the beginning by using a css property.   '.dice' is the class in the css file
document.querySelector('.dice').style.display = 'none';  // ALWAYS use querySelector for classes

// Set the elements to zero using the getElementByID method rather than the querySelector
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

/*
The execution stack has to be empty before the Event Listener does any processing.
All events in JavaScript are put into the message queue and they sit there waiting to be processed.
Once the execution stack is empty the next event will get processed by the eventListener and since it is a function
it will be placed onto the execution stack.
The click event will be the clickHandler function which is placed onto the execution context stack

 */

// Event Handler For the mouse even 'click', button is 'btn-roll'.
// After the event type 'click' you the select the function you want to call.

// function btn() {  // This is called a callback function because it's being call by another function ie addEventListener
//   // Do something here
// }
// btn();
// document.querySelector('.btn-roll').addEventListener('click',btn () {
// or:

document.querySelector('.btn-roll').addEventListener('click',function () {
  // We are writing our  function here instead of calling an external function, this is known as an 'anonymous function'
  // REMEMBER THE SCOPE CHAIN
  // When someone clicks the button:
  
      if (gamePlaying) {
        
        // 1. Random Number
            var dice = Math.floor(Math.random() * 6 ) + 1;  // Random number between 1 and 6 (floor gives the integer value)
        
        // 2. Display the result
            var diceDOM = document.querySelector('.dice')
            diceDOM.style.display = 'block';            // Un-hides the dice image
            diceDOM.src = 'dice-' + dice + '.png';      // gets the correct image for the number rolled.
        
        // 3. Update the round score Only IF the rolled number was not a 1
            if ( dice !== 1) {            // Using the difference operator rather than greater than, no type coercion.
                  // Add score
                  roundScore += dice;
                  // the # is only for the query selector
                  document.querySelector('#current-' + activePlayer).textContent = roundScore;
            } else {
                  // Next Player
                  nextPlayer();
            }
      }
});

document.querySelector('.btn-hold').addEventListener('click',function () {
      if (gamePlaying) {
            // Add current store to the players global score
            scores[activePlayer] += roundScore;
            
            // Update UI
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            
            // Check if the player won the game
            if (scores[activePlayer] >= 100) {
                document.querySelector ('#name-' + activePlayer).textContent = 'Winner!';
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                gamePlaying = false;
            } else {
                // Next Player
                nextPlayer ();
            }
      }
});

document.querySelector('.btn-new').addEventListener('click', initGame );
// If we specified 'initGame()' the function would be immediately called but we don't want that hence just 'initGame',
// by doing it this way we are telling the eventListener to call the 'initGame' function when the button is clicked.

function nextPlayer() {
      // Next Player
      activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
      roundScore = 0;
      
      document.getElementById('current-0').textContent = '0';
      document.getElementById('current-1').textContent = '0';
      
      // document.querySelector('.player-0-panel').classList.remove('active');
      // document.querySelector('.player-1-panel').classList.add('active');
      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');
      
      document.querySelector('.dice').style.display = 'none';
};

function initGame() {
      scores = [0,0];
      roundScore = 0;
      activePlayer = 0;
      gamePlaying = true;
      // Hide the dice at the beginning by using a css property.   '.dice' is the class in the css file
      document.querySelector('.dice').style.display = 'none';  // ALWAYS use querySelector for classes

      // Set the elements to zero using the getElementByID method rather than the querySelector
      document.getElementById('score-0').textContent = '0';
      document.getElementById('score-1').textContent = '0';
      document.getElementById('current-0').textContent = '0';
      document.getElementById('current-1').textContent = '0';
      document.getElementById('name-0').textContent = 'Player 1';
      document.getElementById('name-1').textContent = 'Player 2';
      // Note: it doesn't matter if the class is not there the statement will be ignored
      document.querySelector('.player-0-panel').classList.remove('winner');
      document.querySelector('.player-1-panel').classList.remove('winner');
      document.querySelector('.player-1-panel').classList.remove('active');
      document.querySelector('.player-0-panel').classList.remove('active');
      document.querySelector('.player-0-panel').classList.add('active');

};
