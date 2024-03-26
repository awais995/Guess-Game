#!/usr/bin/env node
// Guess Game
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellow("Welcome to the Guess Game"))

// Function defines the entire game logic
async function play_guessgame(){
    // initialize variables
    const maxattempts = 3; 
    let attempts = 0;
    let score = 0;
    
    // Generate a random number between 1 to 10 and store it in a variable
    const random_number = Math.floor(Math.random() * 10) + 1;
 
    // loop through guessess and taking input from player.
    while(attempts < maxattempts) {
    let guess_number = await inquirer.prompt([{
        name: "guess",
        type: "number",
        message: `Please guess a number 1 to 10 (attempts: ${attempts + 1} / ${maxattempts}):`,
        validate: function (input) {
            // Validate if the input is a number between 1 to 10
            const num = parseInt(input);
            if (isNaN(num) || num < 1 || num > 10) {
                return "Please enter a number between 1 and 10";
            }
            return true;
        }
    }]);
        // Checking User Guess 
    if (guess_number.guess === random_number){
        console.log("Congratulation! You guessed the correct");
        score += 10;
        console.log(`Your score is ${score}`);
    } else if (guess_number.guess > random_number){
        console.log("Your guess is too high");
    } else {
        console.log("Your guess is too low.");
    }
        attempts++;
    }
        
        console.log(`Sorry! You have all the ${attempts} attempts. The correct answer was ${random_number}`);
}   
play_guessgame();  // invoke the function