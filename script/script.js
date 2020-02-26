function computerPlay() {
    let computerMove = Math.ceil(Math.random() * 3);

    return (computerMove == 1)? 'rock':
           (computerMove == 2)? 'paper':
           'scissors';
}

function playRound(computerSelection, playerSelection) {
        // return 1: player wins
        // return 0: draw
        // return -1: computer wins
        
        switch(playerSelection) {
            case 'rock':
                switch(computerSelection) {
                    case 'rock':
                        return [0, computerSelection, playerSelection];
                        break;
                    case 'paper':
                        return [-1, computerSelection, playerSelection];
                        break;
                    case 'scissors':
                        return [1, computerSelection, playerSelection];
                        break;
                }
                break;
            case 'paper':
                switch(computerSelection) {
                    case 'rock':
                        return [1, computerSelection, playerSelection];
                        break;
                    case 'paper':
                        return [0, computerSelection, playerSelection];
                        break;
                    case 'scissors':
                        return [-1, computerSelection, playerSelection];
                        break;
                }
                break;
            case 'scissors':
                switch(computerSelection) {
                    case 'rock':
                        return [-1, computerSelection, playerSelection];
                        break;
                    case 'paper':
                        return [1, computerSelection, playerSelection];
                        break;
                    case 'scissors':
                        return [0, computerSelection, playerSelection];
                        break;
                }
                break;
            default:
                return [0, computerSelection, playerSelection];
        }
    }

document.querySelectorAll('.player__move').forEach(press => press.onclick = (e) => game(e.target.name, computerPlay()));


function game(playerSelection, computerSelection) {
    let results = playRound(computerSelection, playerSelection)
    humanMove(playerSelection, results[0]);
    computerMove(computerSelection, results[0]);
    console.log(results);
    
}

let humanScore = 0;
let computerScore = 0;
function humanMove(move, result) {
    
    const humanScoreList = document.querySelector('.human__scores');
    let imgAddress;
    let resultText;
    let resultTextColor;
    
    if(move == 'rock') {
        imgAddress = '../images/icons8-hand-rock-100.png';
    } else if(move == 'paper') {
        imgAddress = '../images/icons8-hand-100.png';
    } else {
        imgAddress = '../images/icons8-hand-scissors-100.png';
    }

    if(result == 1) {
        resultText = 'You Win!';
        resultTextColor = 'green';
        humanScore++;
    } else if(result == -1) {
        resultText = 'You Loose!';
        resultTextColor = 'red';
    } else {
        resultText = 'Draw';
        resultTextColor = 'white';
    }

    
    humanScoreList.appendChild(updateScore(imgAddress, '#1e90ff', '#1e2dff', resultText, resultTextColor, humanScore, 'row'));

    if(humanScore == 5) {
        alert('You won');
    } else if(computerScore == 5) {
        alert('You Lost');
    }
}

function computerMove(move, result) {

    const computerScoreList = document.querySelector('.computer__scores');
    let imgAddress;
    let resultText;
    let resultTextColor;

    if(move == 'rock') {
        imgAddress = '../images/icons8-rock-100.png';
    } else if(move == 'paper') {
        imgAddress = '../images/icons8-paper-100.png';
    } else {
        imgAddress = '../images/icons8-scissors-100.png';
    }

    if(result == 1) {
        resultText = 'Computer Lost';
        resultTextColor = 'red';
    } else if(result == -1) {
        resultText = 'Computer Won';
        resultTextColor = 'green';
        computerScore++;
    } else {
        resultText = 'Draw';
        resultTextColor = 'white';
    }

    computerScoreList.appendChild(updateScore(imgAddress, '#ff651e', '#ff1e1e', resultText, resultTextColor, computerScore, 'row-reverse'));

    if(humanScore == 5) {
        alert('You won');
    } else if(computerScore == 5) {
        alert('You Lost');
    }
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