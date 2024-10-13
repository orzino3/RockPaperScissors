          let userChoice;
          let compChoice;
          let result;
          
          let score = {
            wins: 0,
            loses: 0,
            tie: 0
          };
          

          function rockCondition(){
            if(compChoice === userChoice){
                result = 'tie'
                score.tie++;
              }

              else if (compChoice === 'paper'){
                result = 'You lose';
                score.loses++;
              }

              else if (compChoice === 'scissors'){
                result = 'You win';
                score.wins++;
              }
          }

          function paperCondition(){
            if(compChoice === userChoice){
                  result = 'tie'
                  score.tie++;
                }

                else if (compChoice === 'rock'){
                  result = 'You win';
                  score.wins++;
                }

                else if (compChoice === 'scissors'){
                  result = 'You lose';
                  score.loses++;
                }
          }

          function scissorsCondition(){
            if(compChoice === userChoice){
                  result = 'tie'
                  score.tie++;
                }

                else if (compChoice === 'paper'){
                  result = 'You win';
                  score.wins++;
                }

                else if (compChoice === 'rock'){
                  result = 'You lose';
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


            alert(`You picked ${userChoice}. Computer picked ${compChoice}. ${result}
Wins: ${score.wins}. Loses: ${score.loses}. Ties: ${score.tie}`);
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

          function resetScore(){
            score.loses = 0;
            score.wins = 0;
            score.tie = 0;
          }
