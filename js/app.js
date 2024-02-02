var phrases1 = ['dog', 'cat', 'teacher', 'elephant', 'turkey'];
var phrases2 = ['ate', 'danced with', 'saw', "doesn't like", 'kissed'];
var phrases3 = ['funny', 'scary', 'goofy', 'slimy', 'fat'];
var phrases4 = ['goat', 'monkey', 'fish', 'cow', 'frog'];
var phrases5 = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass'];

function generateWord(array, buttonId) {
	var word = getRandomElement(array);
	document.getElementById(buttonId).innerText = word;
}

function speakNow() {
	var word1 = document.getElementById('button1').innerText;
	var word2 = document.getElementById('button2').innerText;
	var word3 = document.getElementById('button3').innerText;
	var word4 = document.getElementById('button4').innerText;
	var word5 = document.getElementById('button5').innerText;

	speakWord(word1);
	speakWord(word2);
	speakWord(word3);
	speakWord(word4);
	speakWord(word5);
}

function speakWord(word) {
	var synth = window.speechSynthesis;
	var utterThis = new SpeechSynthesisUtterance(word);
	synth.speak(utterThis);
}

function getRandomElement(array) {
	var randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}