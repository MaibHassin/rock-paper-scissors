function computerPlay() {
    let computerGuess = Math.ceil(Math.random() * 30);

    return (computerGuess >= 1 && computerGuess <= 10)? 'rock':
           (computerGuess >= 10 && computerGuess <= 20)? 'paper':
           'scissors';
}

console.log(computerPlay());