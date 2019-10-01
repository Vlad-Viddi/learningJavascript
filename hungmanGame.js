var pickWord = function (array) {
	return array[Math.floor(Math.random() * array.length)];
};

var setupAnswerArray = function (array) {
	var answer = [];
	for (var i = 0; i < array.length; i++) {
		answer[i] = " __ ";
} return answer;
};

var showPlayerProgress = function (answerArray) {
	alert(answerArray.join(" "));
};

var getGuesses = function() {
	return prompt("Guess a letter, or click Cancel to stop playing.");
};

var updateGameStatus = function(guess, word, answerArray) {
	var appearances = 0;

	for (var j = 0; j < word.length; j++) {
		if (word[j] === guess && answerArray[j] === " __ ") {
			answerArray[j] = guess;
			appearances++;
		}
	} return appearances;
};

var showAnswerAndCongratulatePlayer = function(answerArray) {
	showPlayerProgress(answerArray);
	alert("Goog job! The answer was " + word);
};

var showAnswerAndGoodluck = function(answerArray) {
	showPlayerProgress(answerArray);
	alert("Googluck next time! The answer was " + word);
};



var words = ["javascript", "monkey", "amazing", "pancake", "holiday", "america", "library", "plant", "motherland", "hospital", "maternity", "independence", "africa", "village", "teacher", "velocity", "ukraine"]; 
var word = pickWord(words);
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
var guesses = 10;

while (remainingLetters > 0 && guesses > 0) {
	showPlayerProgress(answerArray);
	alert("You have " + guesses + " guesses");
	guesses--;
	var guess = getGuesses();
	if (guess === null) {
		break;
	} else if (guess.length !== 1) {
		alert("Please enter a single letter.");
	} else {
		guess = guess.toLowerCase();
		var correctGuesses = updateGameStatus(guess, word, answerArray);
		remainingLetters -= correctGuesses;
		if (correctGuesses > 0) {
			guesses += 1;
		};
		
	};
};

if (guesses >0) {
	showAnswerAndCongratulatePlayer(answerArray);
} else {
	showAnswerAndGoodluck(answerArray);
};
