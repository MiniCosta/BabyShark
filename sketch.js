var x = 200;
var y = 350;
var x0 = 160;
var y0 = 10;
var tirox = 0;
var tiroy = 0;
var Disparo = false;
 
function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);
  ellipse(x,y,80,80);
  
  if (keyIsDown(LEFT_ARROW)) {
    x -= 2;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 2;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 2;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 2;
  }
  if (keyIsDown(CONTROL) && Disparo == false) {
    tirox = x;
    tiroy = y;
    Disparo = true;
  }
  if(Disparo) {
   ellipse(tirox,tiroy,5,5);
    tiroy = tiroy - 10;
    if(tiroy < 0) {
    Disparo = false}
  }
  square(x0,y0,80)
  y0=y0+5;
   if(y0>800) {
   y0 = -random(1300);
   }
  
}