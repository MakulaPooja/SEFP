var array = ['అ','ఆ','ఇ','ఈ','ఉ','ఊ','ఋ','ఎ','ఏ','ఐ','ఒ','ఓ','ఔ','అం','అః'];
var arr = [];
var points=0;
var d= ['అఆఇఈఉఊఋఎఏఐఒఓఔఅంఅః'];
var random1, random2, random3, random4, random5;
var randomArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

console.log(array);
//sets array variables to random numbers
function CreateLottoValues() {


  for (var i=0; i<randomArray.length; i++) {
	

	console.log("hello");
	var random_index = Math.floor(Math.random() * array.length);
		randomArray[i] = array[random_index];
	
  
}
}

function isNew(index){

	if(arr.indexOf(index) != -1)
{
return false;
}
else
return true;

}

//create table
function UpdateTable() {
	var random = document.getElementById('result');
  CreateLottoValues();
  for (var i=0; i<randomArray.length; i++) {
    tmp = 'cell'+(i+1);
    document.getElementById(tmp).innerHTML = randomArray[i]; 
    document.getElementById(tmp).value = randomArray[i]; 
    console.log(document.getElementById(tmp).value);
    random.innerHTML="";
  }
}
var word = "";


function haha(objButton) 
{
	
	var random = document.getElementById('result');
	random.innerHTML += objButton.value;

	word = word+ objButton.value;
	console.log(word);

}

function Check(){

		if (d.indexOf(word) > -1){
				points += 5;
				document.getElementById('result1').innerHTML = 'You collected ' + points + ' points.';
	}

		else{
			document.getElementById('result1').innerHTML = 'Word not found';
		}
}
