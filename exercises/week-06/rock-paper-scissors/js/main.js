/*global $, console */
(function () {
    'use strict';

    var computerScore = 0,
        humanScore = 0;

    /* A function to simulate a computer player
     ** Don't worry about the implementation.  I've commented it just incase you are
     ** interested in the breakdown of how it works */
    function simulateComputerPlayer() {
        /* Generate a random number between 1 & 3
         ** Math is a built in JavaScript library that has utility functions to do math stuff
         ** e.g. Round numbers both up and down, Generate Random Numbers, etc
         ** The next line of code uses these functions by executing
         ** a) Math.random() //Generates a random number between zero and one i.e. it has lots of numbers after the decimial place 0.34156865
         ** b) Math.random() * 2 // Multiplies the random number by 2 with all those digits after the decimal place
         ** c) Math.round(result from the previous two ) //Rounds the number generated to a whole number i.e. gets rid of the decimal part
         ** d) (result of the previous 3) plus 1 - if we didn't do this we would have a random number between 0 and 2
         */
        var randNum = (Math.round(Math.random() * 2)) + 1;

        /* Let 1 equal Rock
         ** Let 2 equal Paper
         ** Let 3 equal Scissors */
        if (randNum === 1) {
            return 'Rock';
        } else if (randNum === 2) {
            return 'Paper';
        } else if (randNum === 3) {
            return 'Scissors';
        }
    }

    /* Just like our pseudocode the other day we determine a winner based on the values input
     ** The emphasis here is on code simplicity not efficiency.  We want to take some simple
     ** rules that we have learned and progressively build stuff up.  This function can be
     ** written much better once we have a handle on what we are doing.
     */
    function determineWinner(humanSelection, computerSelection) {

        if (humanSelection === 'Rock' && computerSelection === 'Scissors') {
            humanScore = humanScore + 1;
            /* Use jQuery to find the results element and update it's html */
            $('#results h4').html('You Win - Rock Beats Scissors');

        } else if (humanSelection === 'Paper' && computerSelection === 'Rock') {
            humanScore = humanScore + 1;
            /* Use jQuery to find the results element and update it's html */
            $('#results h4').html('You Win - Paper Beats Rock');

        } else if (humanSelection === 'Scissors' && computerSelection === 'Paper') {
            humanScore = humanScore + 1;
            /* Use jQuery to find the results element and update it's html */
            $('#results h4').html('You Win - Scissors Beats Paper');
        } else if (computerSelection === 'Rock' && humanSelection === 'Scissors') {
            computerScore = computerScore + 1;
            /* Use jQuery to find the results element and update it's html */
            $('#results h4').html('Computer Wins - Rock Beats Scissors');

        } else if (computerSelection === 'Paper' && humanSelection === 'Rock') {
            computerScore = computerScore + 1;
            /* Use jQuery to find the results element and update it's html */
            $('#results h4').html('Computer Wins - Paper Beats Rock');

        } else if (computerSelection === 'Scissors' && humanSelection === 'Paper') {
            computerScore = computerScore + 1;
            /* Use jQuery to find the results element and update it's html */
            $('#results h4').html('Computer Wins - Scissors Beats Paper');

        } else {
            /* Draw */
            /* Use jQuery to find the results element and update it's html */
            $('#results h4').html('Draw - Play Again - ' + humanSelection + ' Cancels ' + computerSelection);
        }

        console.log('Human score is ', humanScore);

        $('.scoreboard .human-score').text(humanScore);
        $('.scoreboard .computer-score').text(computerScore);

        $('#results').show();
    }

    $('#rock').click(function () {
        /* Here we decalre a variable called computerPlayersDecision that gets the value returned from the function simulateComputerPlayer */
        var computerPlayersDecision = simulateComputerPlayer();

        /* At this point computerPlayersDecision with have the value of either 'Rock', 'Paper' or 'Scissors' */

        /* Write out an information message to the console - useful for debugging purposes but should be removed when site goes live*/
        console.log('Rock Clicked, Computer has chosen', computerPlayersDecision);

        /* Call our determine determineWinner function defined above with the literal value 'Rock' and the value of the computer's decision */
        determineWinner('Rock', computerPlayersDecision);
    });

    $('#paper').click(function () {
        /* Here we decalre a variable called computerPlayersDecision that gets the value returned from the function simulateComputerPlayer */
        var computerPlayersDecision = simulateComputerPlayer();

        /* At this point computerPlayersDecision with have the value of either 'Rock', 'Paper' or 'Scissors' */

        console.log('Paper Clicked, Computer has chosen', computerPlayersDecision);

        /* Call our determine determineWinner function defined above with the literal value 'Paper' and the value of the computer's decision */
        determineWinner('Paper', computerPlayersDecision);
    });

    $('#scissors').click(function () {
        /* Here we decalre a variable called computerPlayersDecision that gets the value returned from the function simulateComputerPlayer */
        var computerPlayersDecision = simulateComputerPlayer();

        /* At this point computerPlayersDecision with have the value of either 'Rock', 'Paper' or 'Scissors' */

        console.log('Scissors Clicked, Computer has chosen', computerPlayersDecision);

        /* Call our determine determineWinner function defined above with the literal value 'Scissors' and the value of the computer's decision */
        determineWinner('Scissors', computerPlayersDecision);
    });
}());