//TRIED TO LEAVE SOME GOOD COMMENTS, LEFT THE OBVIOUS THINGS BLANK.

var wordBank = ["burzum", "emperor", "darkthrone", "immortal", "marduk", "venom", "bathory", "obituary", "dismember", "hellhammer", "suffocation", "entombed", "nile", "gorgoroth", "mayhem", "death", "deicide", "brujeria", "carcass", "deafheaven"]
var word = new Array(); //HOLDS SUBSTRINGS OF LETTERS FROM WORD.
var wordLength;
var totAttempt;
var audio = new Audio('luna.mp3'); //AUDIO FOR WINS/LOSSES
var audios = new Audio('lose.mp3') //SHOULD HAVED NAMED THIS ADIOS.


//STARTS NEW ROUND. HAD TO SCRUB WINS/LOSSES FROM IT DUE TO BEING A CLOWN.
function newRound()
{
	document.getElementById(reset()); //RESET
	document.getElementById('attempts').innerHTML = "Lives Left: " + (totAttempt = 7);
	var num = (Math.random() * wordBank.length); //MATH FOR WORD SELECTION.
	var num = Math.round(num);	//ROUNDING THE RESULT.
	word = wordBank[num].split(""); //SPLITS WORD INTO ARRAY OF ITS LETTERS.
	wordLength = new Array(word.length); 
	generateGuess(wordLength);
	document.getElementById("keyboard").reset(); //ANOTHER RESET. LAST BUTTON PRESSED WOULD ALWAYS RETURN TO A DISABLED STATE ON NEW ROUND WITHOUT THIS.
}


//SETS INITIAL CONDITIONS AT START OF FRESH GAME / RESETS THE GAME VIA RESET BUTTON. SHOULD BE MUCH DIFFERENT FROM ABOVE FUNCTION.
function setCond()
{
	document.getElementById(reset());
	document.getElementById('attempts').innerHTML = "Lives Left: " + (totAttempt = 7);
	document.getElementById('myLives').innerHTML = " ";
	var num = (Math.random() * wordBank.length); 
	var num = parseInt(num);	
	word = wordBank[num].split("");
	wordLength = new Array(word.length);
	generateGuess(wordLength);
}

//
function letter(value)
{
	var attempt = false;
	for (var i = 0; i < wordBank.length; i++)
	{
		if (value == word[i])
		{
			wordLength[i] = value;
			attempt = true;
		}
	}	

	if (attempt == true)
	{
		if (wordLength.join() == word.join() && totAttempt < 8 && totAttempt > 0)
		{

			document.getElementById('myLives').innerHTML = "You Have Vanquished the Weak and Torn the Earth Asunder (You Win!)";
			audio.play();
			newRound();
		}
		
	}
	
	if (attempt == false)
	{
		totAttempt--;
		if (totAttempt == 0)
		{
			document.getElementById('myLives').innerHTML = "You have been turned into a dessicated pile of bones (You Lose!)";
			disableKeys();
			audios.play();
			
			for (var i = 0; i < word.length; i++)
			{
				if (wordLength[i] == null)
				{
					wordLength[i] = word[i];
				}	
			}	
		}
	}
	
	
	
	generateGuess(wordLength);
	document.getElementById('attempts').innerHTML = "Attempts Left: " + totAttempt;
}

function generateGuess(word){
	var result="";
	for(var i = 0; i < word.length; i++){
	
		if(word[i] == null){
			result += "_";
		}
		
		else{	
			result += word[i];
		}	
		document.getElementById("answer").innerHTML=result;
	}		
}


//INTEGRATED THIS KEYBOARD WHILE I WAS TRYING TO FIGURE OUT KEY LISTENERS, THEN RAN OUT OF TIME AND COULDN'T GET RID OF IT.
function disableKeys(){	
	document.getElementById("q").disabled=true;
	document.getElementById("w").disabled=true;
	document.getElementById("e").disabled=true;
	document.getElementById("r").disabled=true;
	document.getElementById("t").disabled=true;
	document.getElementById("y").disabled=true;
	document.getElementById("u").disabled=true;
	document.getElementById("i").disabled=true;
	document.getElementById("o").disabled=true;
	document.getElementById("p").disabled=true;
	document.getElementById("a").disabled=true;
	document.getElementById("s").disabled=true;
	document.getElementById("d").disabled=true;
	document.getElementById("f").disabled=true;
	document.getElementById("g").disabled=true;
	document.getElementById("h").disabled=true;
	document.getElementById("j").disabled=true;
	document.getElementById("k").disabled=true;
	document.getElementById("l").disabled=true;
	document.getElementById("z").disabled=true;
	document.getElementById("x").disabled=true;
	document.getElementById("c").disabled=true;
	document.getElementById("v").disabled=true;
	document.getElementById("b").disabled=true;
	document.getElementById("n").disabled=true;
	document.getElementById("m").disabled=true;	
}

function reset(){	
	document.getElementById("q").disabled=false;
	document.getElementById("w").disabled=false;
	document.getElementById("e").disabled=false;
	document.getElementById("r").disabled=false;
	document.getElementById("t").disabled=false;
	document.getElementById("y").disabled=false;
	document.getElementById("u").disabled=false;
	document.getElementById("i").disabled=false;
	document.getElementById("o").disabled=false;
	document.getElementById("p").disabled=false;
	document.getElementById("a").disabled=false;
	document.getElementById("s").disabled=false;
	document.getElementById("d").disabled=false;
	document.getElementById("f").disabled=false;
	document.getElementById("g").disabled=false;
	document.getElementById("h").disabled=false;
	document.getElementById("j").disabled=false;
	document.getElementById("k").disabled=false;
	document.getElementById("l").disabled=false;
	document.getElementById("z").disabled=false;
	document.getElementById("x").disabled=false;
	document.getElementById("c").disabled=false;
	document.getElementById("v").disabled=false;
	document.getElementById("b").disabled=false;
	document.getElementById("n").disabled=false;
	document.getElementById("m").disabled=false;
}