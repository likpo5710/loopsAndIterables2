// PART 0: Write a function called squareDance() that squares each number in an array.
var squareDance = function(num) {

	var squaredNum = []
	for (var i = 0; i < num.length; i = i + 1) {
		squaredNum.push(num[i] * num[i])
	}
	return squaredNum
}

// PART 1: write a function called nicer(). 
// It should clean up the language in its input sentence. 
// Forbidden words include heck, dang, crappy, and dang.
//
var nicer = function(input) {
	var newInput = input.split(" ");
	var removeForbidden = ""
	for (var i = 0; i < newInput.length; i = i + 1) {
		if (newInput[i] === "heck" || newInput[i] === "dang" || newInput[i] === "crappy" || newInput[i] === "darn") {
			removeForbidden += ""
		} else {
			removeForbidden += newInput[i] + " "
		}
	}		return removeForbidden.trim()
}

// // PART 2: write a function called capitalizeAll(). 
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence. 
var capLetter = function(word) {
var firstLetter = word[0];
var	firstLetter = firstLetter.toUpperCase() + word.substring(1) + " ";
return firstLetter
}

var capitalizeAll = function(sentence) {

	var newSentence = ""
	var capitalizeLetter = sentence.split(" ")
	for (var i = 0; i < capitalizeLetter.length; i = i + 1) {
		newSentence = newSentence + capLetter(capitalizeLetter[i])
	}
	return newSentence.trim()
}




//

// // PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)
// var properSentences = function(sentence) {

var capLetter1 = function(word) {
var firstLetter = word[0];
var	firstLetter = firstLetter.toUpperCase() + word.substring(1);
return firstLetter
}

var properSentences = function(sentence) {

	var newSentence = ""
	var sentenceToArray = sentence.split(". ")
	for (var i = 0; i < sentenceToArray.length; i = i + 1) {
		sentenceToArray[i] = capLetter1(sentenceToArray[i])
        newSentence += sentenceToArray[i] + " "
	}
    var finalSentence = sentenceToArray.join('. ')
	return finalSentence
}

// // PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 
var iPutTheFunIn = function(string) {
	var halfLength = string.length / 2;
	var firstHalf = string.substring(0, halfLength)
	var secondHalf = string.substring(halfLength, string.length)
	var finalWord = firstHalf + 'fun' + secondHalf
	return finalWord
}


// // HARD MODE

// // PART 5: write a function called split(). it should take two inputs: (1) a string and (2) a delimiter

// // obviously, you may not use the native .split() method. your task here is to reverse-engineer .split() and write your own. 


// // PART 6: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

// // visit test.js to see the tests that will be run against your code.


