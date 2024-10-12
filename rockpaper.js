          let userChoice;
          let compChoice;
          let result;
          

          function rockCondition(){
            if(compChoice === userChoice){
                result = 'tie'
              }

              else if (compChoice === 'paper'){
                result = 'You lose';
              }

              else if (compChoice === 'scissors'){
                result = 'You win';
              }
          }

          function paperCondition(){
            if(compChoice === userChoice){
                  result = 'tie'
                }

                else if (compChoice === 'rock'){
                  result = 'You win';
                }

                else if (compChoice === 'scissors'){
                  result = 'You win';
                }
          }

          function scissorsCondition(){
            if(compChoice === userChoice){
                  result = 'tie'
                }

                else if (compChoice === 'paper'){
                  result = 'You win';
                }

                else if (compChoice === 'rock'){
                  result = 'You lose';
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


            alert(`You picked ${userChoice}. Computer picked ${compChoice}. ${result}`);
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
