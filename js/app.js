var button = document.getElementById('oneButton');
var textName = document.getElementById('name');
var themeSong = new Audio('assets/sound/theme.wav');
var audio1 = new Audio('assets/sound/battlecry1.wav');
var audio2 = new Audio('assets/sound/battlecry2.wav');
var audio3 = new Audio('assets/sound/battlecry3.wav');
var img1 = document.getElementById('devmon1');
var img2 = document.getElementById('devmon2');
var img3 = document.getElementById('devmon3');

let container = document.getElementById('wrapperThing');
let x;
let y;
var arrayThing = [];
var arrayThingRed = [];
var arrayThingBlue = [];
var cord = document.getElementById("cord");

console.log(textName.innerHTML)

img1.onclick = function(){
	img1.style.height = "100%";
	img1.style.width = "100%";
	img2.style.height = "80%";
	img2.style.width = "80%";
	img3.style.height = "80%";
	img3.style.width = "80%";
	audio1.play();
	textName.innerHTML = "Chikorita";
	console.log(textName.innerHTML)
}

img2.onclick = function(){
	img1.style.height = "80%";
	img1.style.width = "80%";
	img2.style.height = "100%";
	img2.style.width = "100%";
	img3.style.height = "80%";
	img3.style.width = "80%";
	audio2.play();
	textName.innerHTML = "Cyndaquil";
	console.log(textName.innerHTML)
}

img3.onclick = function(){
	img1.style.height = "80%";
	img1.style.width = "80%";
	img2.style.height = "80%";
	img2.style.width = "80%";
	img3.style.height = "100%";
	img3.style.width = "100%";
	audio3.play();
	textName.innerHTML = "Totodile";
	console.log(textName.innerHTML)
}

button.onclick = function(){
	if (textName.innerHTML == "Chikorita") {
		img1.src = "assets/chikorita.png";
	}
	if (textName.innerHTML == "Cyndaquil") {
		img2.src = "assets/cyndaquil.png";
	}
	if (textName.innerHTML == "Totodile") {
		img3.src = "assets/totodile.png";
	}
	themeSong.play();
}

document.addEventListener('mousemove', function(){
	x = event.clientX;
	y = event.clientY;
	cord.innerHTML = 'x' + x + ' y' + y;
})

let interval = setInterval(create, 100);

function create(){
	if (x < 300 || x > 800 && y > 255 || x < 261 && x > 175 || y < 119) {
		let randomNumber = Math.floor(Math.random() * 40 + 10);
		let newDiv = document.createElement('div');
		newDiv.className += ' divClass';
		newDiv.style.height = randomNumber + 'px';
		newDiv.style.width = randomNumber + 'px';
		newDiv.style.backgroundColor = '#ddfec9';
		newDiv.style.position = 'absolute';
		newDiv.style.left = x + 'px';
		newDiv.style.top = y + 'px';
		container.appendChild(newDiv);
		arrayThing.push(newDiv);
		let classId = document.getElementsByClassName('divClass');
		if (arrayThing.length >= 13) {
			classId[0].parentNode.removeChild(classId[0]);
		}
	}

	if (x < 300 || x > 800 && y > 255 || x < 261 && x > 175 || y < 119) {
		let randomNumber = Math.floor(Math.random() * 40 + 10);
		let newDivRed = document.createElement('div');
		newDivRed.className += ' divClassRed';
		newDivRed.style.height = randomNumber + 'px';
		newDivRed.style.width = randomNumber + 'px';
		newDivRed.style.backgroundColor = '#fec9c9';
		newDivRed.style.position = 'absolute';
		newDivRed.style.left = x + 'px';
		newDivRed.style.top = y + 'px';
		container.appendChild(newDivRed);
		arrayThingRed.push(newDivRed);
		let classIdRed = document.getElementsByClassName('divClassRed');
		if (arrayThingRed.length >= 13) {
			classIdRed[0].parentNode.removeChild(classIdRed[0]);
		}
	}

	if (x < 300 || x > 800 && y > 255 || x < 261 && x > 175 || y < 119) {
		let randomNumber = Math.floor(Math.random() * 40 + 10);
		let newDivBlue = document.createElement('div');
		newDivBlue.className += ' divClassBlue';
		newDivBlue.style.height = randomNumber + 'px';
		newDivBlue.style.width = randomNumber + 'px';
		newDivBlue.style.backgroundColor = '#c9f6fe';
		newDivBlue.style.position = 'absolute';
		newDivBlue.style.left = x + 'px';
		newDivBlue.style.top = y + 'px';
		container.appendChild(newDivBlue);
		arrayThingBlue.push(newDivBlue);
		let classId = document.getElementsByClassName('divClassBlue');
		if (arrayThingBlue.length >= 13) {
			classId[0].parentNode.removeChild(classId[0]);
		}
		console.log(arrayThingBlue);
	}		
}