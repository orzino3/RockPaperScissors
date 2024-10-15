          let userChoice;
          let compChoice;
          let result;
          
          let score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            loses: 0,
            tie: 0
          };

          updateScore();
         

          function rockCondition(){
            if(compChoice === userChoice){
                result = "It's a tie!"
                score.tie++;
              }

              else if (compChoice === 'paper'){
                result = 'You lose!';
                score.loses++;
              }

              else if (compChoice === 'scissors'){
                result = 'You win!';
                score.wins++;
              }
          }

          function paperCondition(){
            if(compChoice === userChoice){
                  result = "It's a tie!"
                  score.tie++;
                }

                else if (compChoice === 'rock'){
                  result = 'You win!';
                  score.wins++;
                }

                else if (compChoice === 'scissors'){
                  result = 'You lose!';
                  score.loses++;
                }
          }

          function scissorsCondition(){
            if(compChoice === userChoice){
                  result = "It's a tie!"
                  score.tie++;
                }

                else if (compChoice === 'paper'){
                  result = 'You win!';
                  score.wins++;
                }

                else if (compChoice === 'rock'){
                  result = 'You lose!';
                  score.loses++;
                }
          }

          function playGame(playerMove){
              if(playerMove === 'rock'){
              rockCondition();
              }

              else if (playerMove === 'paper'){
              paperCondition();
              }

              else if(playerMove === 'scissors'){
              scissorsCondition();
              }
              
              localStorage.setItem('score', JSON.stringify(score));

              updateScore();
              
              document.querySelector('.js-result').innerHTML = result;

              document.querySelector('.js-moves').innerHTML = `Player: ${playerMove}
              || Computer: ${compChoice}`;

            /*alert(`You picked ${userChoice}. Computer picked ${compChoice}. ${result}
Wins: ${score.wins}. Loses: ${score.loses}. Ties: ${score.tie}`);*/
          }

          function updateScore(){
            document.querySelector('.js-score').innerHTML = `
Wins: ${score.wins}. Loses: ${score.loses}. Ties: ${score.tie}`;
          }

          function updateResult(){
            document.querySelector('.js-result').innerHTML = result;
          }

          function updateMoves(){
            document.querySelector('.js-moves').innerHTML = `You: ${playerMove} - Computer: ${compChoice}`;
          }

          function generateCompMove(){
            const rand = Math.random();

            if(rand >= 0 && rand < 1/3){
            compChoice = 'rock';
          }

          else if(rand >= 1/3 && rand < 2/3){
            compChoice = 'paper';
          }

          else if(rand >= 2/3 && rand <= 1){
            compChoice = 'scissors';
          }
          }

          function cleanResult(){
            document.querySelector('.js-result').innerHTML = '';
            document.querySelector('.js-moves').innerHTML = '';
          }

          function resetScore(){
            score.loses = 0;
            score.wins = 0;
            score.tie = 0;
            updateScore();
            cleanResult();
            
          }
