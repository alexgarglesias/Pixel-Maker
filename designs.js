

// Set the date we're counting down to
var countDownDate = new Date("Feb 14, 2018 18:28:50").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
  let gameOver = document.createElement('h1')

  gameOver.textContent = "holaaaa"

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
        document.body.innerHTML = "GAME OVER";
  }
}, 1000);




const form = document.getElementById('sizePicker')

let inputH = document.getElementById('inputHeight')

let inputW = document.getElementById('inputWeight')

let tbody = document.getElementById('tbody')

form.addEventListener('click',makeGrid)


	function makeGrid(event) {

event.preventDefault()

for (let i=0; i<inputH.value; i++){

  let hz= document.createElement('tr')

  tbody.appendChild(hz)
 
for (let z=0; z<inputW.value; z++){
  
let hj= document.createElement('td')

hz.appendChild(hj)
}
}
}

let colorPicker = document.getElementById('colorPicker')

colorPicker.addEventListener("input", applyColor)

let cell = document.getElementsByTagName('td')



	function applyColor(){

for (let y= 0; y<cell.length; y++){

	cell[y].addEventListener('mouseover', colorIt)


}
}
	function colorIt(e){
e.target.style.backgroundColor = colorPicker.value;

e.target.addEventListener('mouseover', removeIt)

}	

function removeIt(e){
e.target.remove()

	

}











