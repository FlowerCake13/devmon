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
	if (x > 269 && y > 255 || x < 261 && x > 175 || y < 119) {
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
	
		console.log(arrayThing);
	}
}