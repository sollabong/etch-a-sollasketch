//Select the canvas element

const canvas = document.querySelector('#etch-a-sketch');

// Setup 2d canvas

const ctx = canvas.getContext('2d');

//Setup the shake button

const shake = document.querySelector('.shake');

function clearCanvas(){
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener('animationend', 
    function (){
      canvas.classList.remove('shake');
    },
    { once: true}
  );
}

//Setup canvas for drawing on it

const move = 10;

let width = canvas.width;
let height = canvas.height;

let x = Math.floor(Math.random()*width);
let y = Math.floor(Math.random()*height);
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = move;

// Change line color
function changeColor(color) {
    ctx.strokeStyle = color;
};
ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineTo(x,y);
ctx.stroke();

// Setup draw functions

function draw({key}) {
ctx.beginPath();
ctx.moveTo(x, y);

switch(key) { // looking for direction
    default:
        break;
case 'ArrowUp':
    y -=move;
    break;
case 'ArrowDown':
    y +=move;
    break;
case 'ArrowLeft':
    x -=move;
    break;
case 'ArrowRight':
    x +=move;
    break;
}

ctx.lineTo(x,y);
ctx.stroke();
}

// Setup handlers for keys

function handleKey(e) {

    if(e.key.includes('Arrow')) {
        e.preventDefault();
        draw({key: e.key});
    }
}

// Dpad controls

function up() {
    ctx.beginPath();
    ctx.moveTo(x, y);
    y -= 10; 
    ctx.lineTo(x,y);
    ctx.stroke();
}

function down() {
    ctx.beginPath();
    ctx.moveTo(x, y);
    y += 10; 
    ctx.lineTo(x,y);
    ctx.stroke();
}

function left() {
    ctx.beginPath();
    ctx.moveTo(x, y);
    x -= 10; 
    ctx.lineTo(x,y);
    ctx.stroke();
}

function right() {
    ctx.beginPath();
    ctx.moveTo(x, y);
    x += 10; 
    ctx.lineTo(x,y);
    ctx.stroke();
}
//Listen for keys

window.addEventListener('keydown', handleKey);
shake.addEventListener('click', clearCanvas);

