const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const min = 1;
const max = 50;
const numberToGuess = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Guess the number between ${min} and ${max}`);

const askQuestion = () => {
    rl.question('Enter your guess: ', (answer) => {
        const guess = parseInt(answer, 10);

        if (isNaN(guess)) {
            console.log('Please enter a valid number.');
        } else if (guess < numberToGuess) {
            console.log('Too low!');
        } else if (guess > numberToGuess) {
            console.log('Too high!');
        } else {
            console.log('Congratulations! You guessed the number.');
            rl.close();
            return;
        }

        askQuestion();
    });
};

askQuestion();