// function computerPlay() {
//     let computerMove = Math.ceil(Math.random() * 30);

//     return (computerMove >= 1 && computerMove <= 10)? 'rock':
//            (computerMove >= 10 && computerMove <= 20)? 'paper':
//            'scissors';
// }

// function playerPlay() {
//     let playerMove = prompt('Please write your move (rock, paper or scissors)');
//     return playerMove.toLowerCase();
// }

// function playRound(computerSelection, playerSelection) {
//     // return 1: player wins
//     // return 0: draw
//     // return -1: computer wins

//     switch(playerSelection) {
//         case 'rock':
//             switch(computerSelection) {
//                 case 'rock':
//                     return [0, computerSelection, playerSelection];
//                     break;
//                 case 'paper':
//                     return [-1, computerSelection, playerSelection];
//                     break;
//                 case 'scissors':
//                     return [1, computerSelection, playerSelection];
//                     break;
//             }
//             break;
//         case 'paper':
//             switch(computerSelection) {
//                 case 'rock':
//                     return [1, computerSelection, playerSelection];
//                     break;
//                 case 'paper':
//                     return [0, computerSelection, playerSelection];
//                     break;
//                 case 'scissors':
//                     return [-1, computerSelection, playerSelection];
//                     break;
//             }
//             break;
//         case 'scissors':
//             switch(computerSelection) {
//                 case 'rock':
//                     return [-1, computerSelection, playerSelection];
//                     break;
//                 case 'paper':
//                     return [1, computerSelection, playerSelection];
//                     break;
//                 case 'scissors':
//                     return [0, computerSelection, playerSelection];
//                     break;
//             }
//             break;
//         default:
//             return [0, computerSelection, playerSelection];
//     }
// }

// function resultsTable(game_number, match_result, computer_move, player_move, computer_score, player_score) {
//     this.game_number = game_number;
//     this.match_result = match_result;
//     this.computer_move = computer_move;
//     this.player_move = player_move;
//     this.computer_score = computer_score;
//     this.player_score = player_score;
// }

// function game() {
//     let computerScore = 0, playerScore = 0, gameNumber = 0;
//     for (let i = 0; i < 5; i++) {
//         let result = playRound(computerPlay(), playerPlay());
//         if(result[0]>0) {
//             playerScore++; 
//             gameNumber++;
//             var r = new resultsTable(gameNumber, 'Player Won', result[1], result[2], computerScore, playerScore);
//             console.clear();
//             console.table(r);
//         } else if (result[0]<0) {
//             computerScore++;
//             gameNumber++;
//             var r = new resultsTable(gameNumber, 'Computer Won', result[1], result[2], computerScore, playerScore);
//             console.clear();
//             console.table(r);
//         } else {
//             gameNumber++;
//             var r = new resultsTable(gameNumber, 'Draw', result[1], result[2], computerScore, playerScore);
//             console.clear();
//             console.table(r);
//         }
//     }
//     if(playerScore > computerScore) {
//         console.log(`%c You WON!`, 'color: green');
//     } else if(computerScore > playerScore) {
//         console.log(`%c You LOOSE!`, 'color: red');
//     } else {
//         console.log('TIE!');
//     }
// }

// game();

