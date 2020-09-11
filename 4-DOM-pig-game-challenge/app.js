/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score.
  After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, lastDice;   // Variables defined here are in the Global scope

initGame();

document.querySelector('.dice').style.display = 'none';  // ALWAYS use querySelector for classes

document.querySelector('.btn-roll').addEventListener('click',function () {
 
      if (gamePlaying) {
        
        // 1. Random Number
            var dice1 = Math.floor(Math.random() * 6 ) + 1;  // Random number between 1 and 6 (floor gives the integer value)
            var dice2 = Math.floor(Math.random() * 6 ) + 1;  // Random number between 1 and 6 (floor gives the integer value)
        
        // 2. Display the result
        //     var diceDOM = document.querySelector('.dice')
        //     diceDOM.style.display = 'block';            // Un-hides the dice image
        //     diceDOM.src = 'dice-' + dice + '.png';      // gets the correct image for the number rolled.
        
            document.getElementById('dice-1').style.display = 'block';
            document.getElementById('dice-2').style.display = 'block';
            document.getElementById('dice-1').src= 'dice-' + dice1 + '.png';
            document.getElementById('dice-2').src= 'dice-' + dice2 + '.png';
        // 3. Update the round score Only IF the rolled number was not a 1
            if ( dice1 !== 1 && dice2 !== 1) {
                  // Add score
                  roundScore += dice1 + dice2;
                  // the # is only for the query selector
                  document.querySelector('#current-' + activePlayer).textContent = roundScore;
            } else {
                  // Next Player
                  nextPlayer();
            }
            /*
            if ( dice === 6 && lastDice === 6 ) {
                // Player Loses score
                scores[activePlayer] = 0;
                document.querySelector('#score-' + activePlayer).textContent = '0';
                nextPlayer();
            } else if ( dice !== 1) {
                  // Add score
                  roundScore += dice;
                  // the # is only for the query selector
                  document.querySelector('#current-' + activePlayer).textContent = roundScore;
            } else {
                  // Next Player
                  nextPlayer();
            }
            lastDice = dice;
            */
      }
});

document.querySelector('.btn-hold').addEventListener('click',function () {
      if (gamePlaying) {
            // Add current store to the players global score
            scores[activePlayer] += roundScore;
            
            // Update UI
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            
            var input = document.querySelector('.final-score').value;
            
            
            var winningScore;
            // Undefined, 0, null or "" are coerced to false anything else is coerced to true
            if ( input ) {
               winningScore = input;
            } else  {
               winningScore = 100;
            }
            if (isNaN(winningScore))  {
               winningScore = 100;
            }
            
            // Check if the player won the game
            if (scores[activePlayer] >= winningScore ) {
                document.querySelector ('#name-' + activePlayer).textContent = 'Winner!';
                document.getElementById('dice-1').style.display = 'none'
                document.getElementById('dice-2').style.display = 'none'
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

function nextPlayer() {
      // Next Player
      activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
      roundScore = 0;
      
      document.getElementById('current-0').textContent = '0';
      document.getElementById('current-1').textContent = '0';

      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');
      
      document.getElementById('dice-1').style.display = 'none'
      document.getElementById('dice-2').style.display = 'none'
};

function initGame() {
      scores = [0,0];
      roundScore = 0;
      activePlayer = 0;
      gamePlaying = true;
      
      document.getElementById('dice-1').style.display = 'none'
      document.getElementById('dice-2').style.display = 'none'

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
