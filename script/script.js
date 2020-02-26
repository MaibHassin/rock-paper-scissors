

// function playerPlay() {
//     let playerMove = prompt('Please write your move (rock, paper or scissors)');
//     return playerMove.toLowerCase();
// }

// 

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


function computerPlay() {
    let computerMove = Math.ceil(Math.random() * 3);

    return (computerMove == 1)? 'rock':
           (computerMove == 2)? 'paper':
           'scissors';
}

document.querySelectorAll('.player__move').forEach(press => press.onclick = (e) => game(e.target.name, computerPlay()));

function game(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
    humanMove(playerSelection);
    computerMove(computerSelection);
}

function humanMove(move) {
    const humanScoreList = document.querySelector('.human__scores');
    let imgAddress;

    if(move == 'rock') {
        imgAddress = '../images/icons8-hand-rock-100.png';
    } else if(move == 'paper') {
        imgAddress = '../images/icons8-hand-100.png';
    } else {
        imgAddress = '../images/icons8-hand-scissors-100.png';
    }

    humanScoreList.appendChild(updateScore(imgAddress, '#1e90ff', '#1e2dff', 'You Won', 'green', 1, 'row'));
}

function computerMove(move) {
    const computerScoreList = document.querySelector('.computer__scores');
    let imgAddress;

    if(move == 'rock') {
        imgAddress = '../images/icons8-rock-100.png';
    } else if(move == 'paper') {
        imgAddress = '../images/icons8-paper-100.png';
    } else {
        imgAddress = '../images/icons8-scissors-100.png';
    }

    computerScoreList.appendChild(updateScore(imgAddress, '#ff651e', '#ff1e1e', 'You Won', 'green', 1, 'row-reverse'));
}


function updateScore(imgAddress, ImgBgColor, imgBdColor, result, resultColor, score, flexDirection) {

    // score list item container
    const listItemContainer = document.createElement('div');

    // container items
    const listItemContainer__image = document.createElement('img');
    const listItemContainer__result = document.createElement('p');
    const listItemContainer__score = document.createElement('p');
    
    // content
        //container
    listItemContainer.style.padding = '3px';
    listItemContainer.style.display = 'flex';
    listItemContainer.style.flexDirection = flexDirection;
    listItemContainer.style.justifyContent = 'space-around';
    listItemContainer.style.alignItems = 'center';
        // image
    listItemContainer__image.src = imgAddress;
    listItemContainer__image.style.height = '30px';
    listItemContainer__image.style.width = '30px';
    listItemContainer__image.style.backgroundColor = ImgBgColor;
    listItemContainer__image.style.border = `2px solid ${imgBdColor}`;
        // result
    listItemContainer__result.textContent = result;
    listItemContainer__result.style.color = resultColor;
    listItemContainer__result.style.fontWeight = 'bold';
        // score
    listItemContainer__score.textContent = score;

    // append inside container
    listItemContainer.appendChild(listItemContainer__image);
    listItemContainer.appendChild(listItemContainer__result);
    listItemContainer.appendChild(listItemContainer__score);


    return listItemContainer;
}