/*
Equipe: Paulo Costa Braga - 1A (Líder) 
Etapas 1, 2, 3, 4, 5 e 6.
*/
var x = 200;
var y = 350;
var x0 = 300;
var y0 = 10;
var raiosharko = 40;
var raiozig = 20;
var podecolidir = true;
var tempoinv = 0;
var vidas = 5;
var pontos = 0;
var dificuldade = 1;
var velocidade = 5;
var hmax = 1200;
var hmin = 1000;
var tirox = 0;
var tiroy = 0;
var Disparo = false;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(220);
  fill(0,0,200);
  textSize(20);
  text('Vidas: '+ vidas,5,20)
  text('Pontos: '+ pontos,150,20);
  text('Dificuldade: '+ dificuldade,280,20);
  
 //SHARKO
  ellipse(x,y,2*raiosharko,2*raiosharko);
  
 //CONTROLE 
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
  if (keyIsDown(CONTROL) && Disparo == false) {
    tirox = x;
    tiroy = y;
    Disparo = true;
  }
 //DISPARO
  if(Disparo) {
   ellipse(tirox,tiroy,5,5);
    tiroy = tiroy - 10;
    if(tiroy < 0) {
    Disparo = false}
 //COLISÃO DISPARO-ZIG
    if (dist(tirox,tiroy,x0,y0) < raiozig + 5) {
    pontos = pontos + 5
    tirox = 0;
    tiroy = 0;
    x0 = random(raiozig,400-raiozig);
      //console.log(x0)
    y0 = -random(hmin,hmax);
      //console.log(y0);
    }
  }
  //ZIG
  ellipse(x0,y0,2*raiozig,2*raiozig)
  y0=y0+velocidade;
   if(y0>400+raiozig) {
   y0 = -random(hmin,hmax);
     console.log(y0);
   x0 = random(raiozig,400-raiozig);
     console.log(x0)
   }
  //COLISÃO ZIG-SHARKO
   if (dist(x,y,x0,y0) < raiosharko + raiozig && podecolidir) {
     podecolidir = false;
     x = 200;
     y = 350;
     vidas= vidas - 1;
   }
  if(!podecolidir) {
    tempoinv++
  
    if(tempoinv==50) {
     podecolidir = true;
     tempoinv = 0;
    }
  }
}
