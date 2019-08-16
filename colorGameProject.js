var numSquares = 6;
var colors =generateRandomColor(numSquares);
var squares = document.querySelectorAll(".squares");
var colorDisplay = document.getElementById('colorDisplay');
var pickedColor = pickColor();
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.getElementById('reset');
var easyBtn = document.getElementById('easyBtn');
var hardBtn = document.getElementById('hardBtn');
var modeButtons = document.querySelectorAll('.mode');

init();

function init(){

for(var i=0;i<modeButtons.length;i++)
{  
	modeButtons[i].addEventListener('click',function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
    reset();
	});
}

for(var i=0; i<squares.length;i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener('click',function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = 'Correct!';
            changeColor(clickedColor);
            h1.style.background = clickedColor;
            resetButton.textContent = 'Play Again!!'
		}else{
			messageDisplay.textContent = 'Try Again';
			this.style.backgroundColor = '#232323';
		}
	})
}
}

function reset(){
	colors =generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = 'New Colors';
	messageDisplay.textContent = '';
	for(var i=0;i< squares.length;i++)
	{  if(colors[i]){
		squares[i].style.display = 'block';
	    squares[i].style.backgroundColor = colors[i];
	    } else {
	    	squares[i].style.display = 'none';
	    }
	}
	h1.style.background = "steelblue";
}
// easyBtn.addEventListener('click',function(){
// 	easyBtn.classList.add('selected');
// 	hardBtn.classList.remove('selected');
// 	numSquares = 3;
// 	colors = generateRandomColor(numSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0;i<squares.length;i++){
// 		if(colors[i])
// 		{
// 			squares[i].style.background = colors[i];
// 		}else{
// 			squares[i].style.display = 'none';
// 		}
// 	}
// })
// hardBtn.addEventListener('click',function(){
// 	easyBtn.classList.remove('selected');
// 	hardBtn.classList.add('selected');
// 	numSquares = 6;
// 	colors = generateRandomColor(numSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0;i<squares.length;i++){
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display = 'block';
// 		}
// })



resetButton.addEventListener('click',function(){
reset();
})

colorDisplay.textContent = pickedColor;

function changeColor(color){
	for(var i=0;i< squares.length;i++){
    squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	var arr = [];

	for(var i=0; i<num; i++)
	{
          arr.push(randomColor());
	}
	return arr;
}


function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}