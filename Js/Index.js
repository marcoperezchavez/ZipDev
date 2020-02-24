

var question1 = "";

var questions ={
    q1 : "",
    q2 : [],
    q3 : {
        cadena: "",
        isPalindromoMessage: ""
    },
    q4 : {
        sentence: "",
        reverse: ""
    }
}

function goToQ1(){
    q1.style.display = "block";
    q2.style.display = "none"; 
    q3.style.display = "none"; 
    q4.style.display = "none";   
}
function goToQ2(){
    q1.style.display = "none";
    q2.style.display = "block"; 
    q3.style.display = "none"; 
    q4.style.display = "none";   
}
function goToQ3(){
    q1.style.display = "none";
    q2.style.display = "none"; 
    q3.style.display = "block"; 
    q4.style.display = "none";   
}
function goToQ4(){
    q1.style.display = "none";
    q2.style.display = "none"; 
    q3.style.display = "none"; 
    q4.style.display = "block";   
}
function goToQ5(){
    q1.style.display = "none";
    q2.style.display = "none"; 
    q3.style.display = "none"; 
    q4.style.display = "none";  
    q5.style.display = "block";   
    showInformation();
}

function showInformation(){
    document.getElementById('rq1').innerHTML += "<br>" + questions.q1; 
    var arrayq2Values ="";
    for(var i = 0; i < questions.q2.length; i++){
        arrayq2Values += "<br>Value " + (i+1) + ": "+ questions.q2[i];
    }
    document.getElementById('rq2').innerHTML += arrayq2Values;
    document.getElementById('rq3').innerHTML += "<br>" + "sentence= " + questions.q3.cadena + " <br>Result:= " + questions.q3.isPalindromoMessage; 
    document.getElementById('rq4').innerHTML += "<br>" + "sentence= " + questions.q4.sentence + " <br>Reverse:= " + questions.q4.reverse; 
}

function getQuestion1(event) {
    var target = event.target || event.srcElement;
    questions.q1=target.innerHTML;
    //alert(question1);
    var q1= document.getElementById("q1");
    var q2= document.getElementById("q2");
    goToQ2();
}


function getCheckedCheckboxesFor(checkboxName) {
    var checkboxes = document.querySelectorAll('input[name="' + checkboxName + '"]:checked'), values = [];
    Array.prototype.forEach.call(checkboxes, function(el) {
        questions.q2.push(el.value);
    });
    console.log(questions);
    goToQ3();
}

function validatePalindromo(){
    var palindromoValidate = document.getElementById('inputPalindromo').value;
    questions.q3.cadena= palindromoValidate;
    palindromoValidate = palindromoValidate.replace(/[^a-zA-Z 0-9.]+/g,' ');
    palindromoValidate = palindromoValidate.toLowerCase().replace(/ /g, "");
    palindromoValidate = palindromoValidate.toLowerCase().replace(',', '');
    var isValid = getValidatePalindromo(palindromoValidate);
    if(isValid){
        document.getElementById('result').innerHTML = "is palindromo";
        questions.q3.isPalindromoMessage ="is palindromo";
    }else{
        document.getElementById('result').innerHTML = "is not palindromo";
        questions.q3.isPalindromoMessage ="is not palindromo";
    }
    console.log(palindromoValidate);
}
function getValidatePalindromo(palindromo){
    for (var i=0;i<palindromo.length;i++){
		if(palindromo[i]!=palindromo[palindromo.length-i-1]){
			return false;
		}
	}
	return true;
}

function reverseSentence(){
var sentence = document.getElementById('InputS1').value;
questions.q4.sentence=sentence;
var reverseString = "";
for(var i = sentence.length-1; i>=0; i--){
    reverseString += sentence[i];
}
questions.q4.reverse = reverseString;
document.getElementById('InputS2').value = reverseString;
}