const form = document.getElementById('sizePicker')

let inputH = document.getElementById('inputHeight')

let inputW = document.getElementById('inputWeight')

let tbody = document.getElementById('tbody')

inputH.addEventListener('click',makeGrid)


	function makeGrid() {

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

	cell[y].addEventListener('click', colorIt)
}
}


	function colorIt(e){
e.target.style.backgroundColor = colorPicker.value
}








