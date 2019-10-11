
/*Equipe: 
 * Paulo Costa Braga (Subturma  1A)
*/

var x = 200;
var y = 350;

function setup() {
  createCanvas(400, 400);
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
   
  square(160,10,80);
}
