var wordBank = ["burzum", "emperor", "darkthrone", "immortal", "marduk", "venom", "bathory", "obituary", "dismember", "hellhammer", "suffocation", "entombed", "nile", "gorgoroth", "mayhem", "death", "deicide", "brujeria", "carcass", "deafheaven"]
var word = new Array(); //HOLDS SUBSTRINGS OF LETTERS FROM WORDBANK
var wordLength;
var totLives;
var audio = new Audio('luna.mp3'); //AUDIO FOR WINS/LOSSES
var audios = new Audio('lose.mp3');


//STARTS NEW ROUND. HAD TO SCRUB WINS/LOSSES FROM IT DUE TO BEING A CLOWN
function newRound() {
	document.getElementById(enableKeys()); //RESETS KEY STATE
	document.getElementById('attempts').innerHTML = "Lives Left: " + (totLives = 7);
	var num = (Math.random() * wordBank.length); //MATH FOR WORD SELECTION
	var num = Math.round(num);	//ROUNDING THE RESULT
	word = wordBank[num].split(""); //SPLITS WORD INTO ARRAY OF ITS LETTERS
	wordLength = new Array(word.length); 
	createWord(wordLength);
	document.getElementById("keyboard").reset(); //ANOTHER RESET. LAST BUTTON PRESSED WOULD ALWAYS RETURN TO A DISABLED STATE ON NEW ROUND WITHOUT THIS
};

//SETS INITIAL CONDITIONS AT START OF FRESH GAME / RESETS THE GAME VIA RESET BUTTON. SHOULD BE MUCH DIFFERENT FROM ABOVE FUNCTION
function setCond() {
	document.getElementById(enableKeys());
	document.getElementById('attempts').innerHTML = "Lives Left: " + (totLives = 7);
	document.getElementById('myLives').innerHTML = " ";
	var num = (Math.random() * wordBank.length); 
	var num = Math.round(num);	
	word = wordBank[num].split("");
	wordLength = new Array(word.length);
	createWord(wordLength);
};
//MAIN GAME LOGIC. LETTER VALUE ATTEMPTED BY USER IS INPUTED VIA RADIO BUTTON. ANSWER IS EITHER TRUE OR FALSE TO CONDITIONS EFFECTING GAME
function letter(value) {
	var choice = false;
	for (var i = 0; i < wordBank.length; i++) {
		if (value == word[i]) {
			wordLength[i] = value;
			choice = true;
		}
	}	

	if (choice == true) {
		if (wordLength.join() == word.join() && totLives < 8 && totLives > 0) {
			document.getElementById('myLives').innerHTML = "You Have Vanquished the Weak and Torn the Earth Asunder (You Win!)";
			audio.play();
			newRound();
		}
	}
	
	if (choice == false) {
		totLives--;
		if (totLives == 0) {
			document.getElementById('myLives').innerHTML = "You have been turned into a dessicated pile of bones (You Lose!)";
			disableKeys();
			audios.play();
			
			for (var i = 0; i < word.length; i++) {
				if (wordLength[i] == null) {
					wordLength[i] = word[i];
				}	
			}	
		}
	}
		
	createWord(wordLength);
	document.getElementById('attempts').innerHTML = "Lives Left: " + totLives;
};
//DETERMINES WHETHER RESULT IS A LETTER OR AN UNDERSCORE
function createWord(word) {
	var result="";
	var solution = result;
	for(var i = 0; i < word.length; i++) {
	
		if(word[i] == null) {
			result += "_";
		} else {	
			result += word[i];
		}	
		document.getElementById("answer").innerHTML=result;
	}		
};

//DISABLES OR ENABLES RADIO BUTTONS BASED ON GAME STATE OR LETTERS USED
function disableKeys() {	
	document.getElementById("a").disabled=true;
	document.getElementById("b").disabled=true;
	document.getElementById("c").disabled=true;
	document.getElementById("d").disabled=true;
	document.getElementById("e").disabled=true;
	document.getElementById("f").disabled=true;
	document.getElementById("g").disabled=true;
	document.getElementById("h").disabled=true;
	document.getElementById("i").disabled=true;
	document.getElementById("j").disabled=true;
	document.getElementById("k").disabled=true;
	document.getElementById("l").disabled=true;
	document.getElementById("m").disabled=true;
	document.getElementById("n").disabled=true;
	document.getElementById("o").disabled=true;
	document.getElementById("p").disabled=true;
	document.getElementById("q").disabled=true;
	document.getElementById("r").disabled=true;
	document.getElementById("s").disabled=true;
	document.getElementById("t").disabled=true;
	document.getElementById("u").disabled=true;
	document.getElementById("v").disabled=true;
	document.getElementById("w").disabled=true;
	document.getElementById("x").disabled=true;
	document.getElementById("y").disabled=true;
	document.getElementById("z").disabled=true;	
};

function enableKeys() {	
	document.getElementById("a").disabled=false;
	document.getElementById("b").disabled=false;
	document.getElementById("c").disabled=false;
	document.getElementById("d").disabled=false;
	document.getElementById("e").disabled=false;
	document.getElementById("f").disabled=false;
	document.getElementById("g").disabled=false;
	document.getElementById("h").disabled=false;
	document.getElementById("i").disabled=false;
	document.getElementById("j").disabled=false;
	document.getElementById("k").disabled=false;
	document.getElementById("l").disabled=false;
	document.getElementById("m").disabled=false;
	document.getElementById("n").disabled=false;
	document.getElementById("o").disabled=false;
	document.getElementById("p").disabled=false;
	document.getElementById("q").disabled=false;
	document.getElementById("r").disabled=false;
	document.getElementById("s").disabled=false;
	document.getElementById("t").disabled=false;
	document.getElementById("u").disabled=false;
	document.getElementById("v").disabled=false;
	document.getElementById("w").disabled=false;
	document.getElementById("x").disabled=false;
	document.getElementById("y").disabled=false;
	document.getElementById("z").disabled=false;
}