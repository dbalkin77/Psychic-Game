var wins = 0;

var losses = 0;

var guessesLeft = 9;

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
		"u", "v", "w", "x", "y", "z"];

var guessedLetter = [];

var reset = function () {
	this.guessesLeft = 9;
	console.log(this);
	guessedLetter = [];
}

var randSelection = Math.floor( Math.random() * letters.length );

var cletter = letters[randSelection];

console.log(cletter);

document.onkeyup = function(event) {

var userGuess = event.key;

if (userGuess === cletter) {
	wins++;
	reset ();
}

else {
	guessesLeft--;
	guessedLetter.push(userGuess);

}

if (guessesLeft === 0) {
	losses++;
	reset ();
}

document.getElementById('wins').innerHTML = wins;
document.getElementById('losses').innerHTML = losses;
document.getElementById('gleft').innerHTML = guessesLeft;
document.getElementById('guesses').innerHTML = guessedLetter;

}






