/*
Equipe: Paulo Costa Braga - 1A (Líder) 
Etapas 1, 2, 3, 4, 5, 6, 7 e 8.
*/
var x = 200;
var y = 350;
var xm = [];
var ym = [];
var x0 = [];
var y0 = [];
var numzigs = 3;
var nummelhorias = 1;
var raiosharko = 40;
var raiozig = 20;
var podecolidir = true;
var tempoinv = 0;
var tempoboost = 0;
var vidas = 5;
var pontos = 0;
var dificuldade = 1;
var velocidade = 5;
var velshark = 5;
var hmax = 1200;
var hmin = 1000;
var tirox = 0;
var tiroy = 0;
var Disparo = false;
var imgsharko;

//function preload() 
  //imgsharko = loadImage('babyshark01.png');


function setup() {
  createCanvas(400,400);
  for (i=0;i<numzigs;i++) {
    y0[i] = -random(hmin,hmax);
     console.log(y0[i]);
   x0[i] = random(raiozig,400-raiozig);
     console.log(x0[i])
  }
  for (i=0;i<nummelhorias;i++) {
    ym[i] = -random(3000,5000);
    console.log(ym[i]);
    xm[i] = random(50,350);
    console.log(xm[i]); 
  }
}

function draw() {
  background(220);
  fill(0,0,200);
  textSize(20);
  text('Vidas: '+ vidas,20,20)
  text('Pontos: '+ pontos,150,20);
  text('Dificuldade: '+ dificuldade,270,20);
  text('Velocidade: ' + velshark,20,40);
  
 //SHARKO
  ellipse(x,y,2*raiosharko,2*raiosharko);
  //imageMode(CENTER);
  //image(imgsharko,x,y);
  
 //CONTROLE 
  if (keyIsDown(LEFT_ARROW)) {
    x -= velshark;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += velshark;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= velshark;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += velshark;
  }
  if (keyIsDown(CONTROL) && Disparo == false) {
    tirox = x;
    tiroy = y;
    Disparo = true;
  }
  
  //ZIG
  fill('#222222')
  for (i=0;i<numzigs;i++) { 
  ellipse(x0[i],y0[i],2*raiozig,2*raiozig)
  y0[i]=y0[i]+velocidade;
   if(y0[i]>400+raiozig) {
   y0[i] = -random(hmin,hmax);
     console.log(y0[i]);
   x0[i] = random(raiozig,400-raiozig);
     console.log(x0[i])
   }
  }
  
  //MELHORIAS
  fill('white');
  noStroke();
  for (i=0;i<nummelhorias;i++) {
  ellipse(xm[i],ym[i],30,30);
   ym[i] = ym[i] + 4;
  if(ym[i]>400+raiozig/2) {
    ym[i] = -random(3000,5000);
    console.log(ym[i]);
    xm[i] = random(50,350);
    console.log(xm[i]);
  }
  if(dist(x,y,xm[i],ym[i]) < raiosharko + 15) {
    velshark++;
    xm[i] = random(50,350);
    console.log(xm[i]);
    ym[i]= random(3000,5000);
    console.log(ym[i]);
   }
  }
  
  //DISPARO
  fill('#222222')
  if(Disparo) {
   ellipse(tirox,tiroy,5,5);
    tiroy = tiroy - 15;
    if(tiroy < 0) {
    Disparo = false}
  //COLISÃO DISPARO-ZIG
    for (i=0;i<numzigs;i++) { 
    if (dist(tirox,tiroy,x0[i],y0[i]) < raiozig + 5) {
    pontos = pontos + 5
    tirox = 0;
    tiroy = 0;
    x0[i] = random(raiozig,400-raiozig);
      console.log(x0[i])
    y0[i] = -random(hmin,hmax);
      console.log(y0[i]);
      }
    }  
  }
  
  //COLISÃO ZIG-SHARKO
  for (i=0;i<numzigs;i++) { 
   if (dist(x,y,x0[i],y0[i]) < raiosharko + raiozig && podecolidir) {
     podecolidir = false;
     x = 200;
     y = 350;
     vidas= vidas - 1;
    }
   }
  if(!podecolidir) {
    tempoinv++
  
    if(tempoinv==50) {
     podecolidir = true;
     tempoinv = 0;
    }
  }

  //LvL 2
  if(pontos>=10 && pontos<20) {
    dificuldade = 2;
    velocidade = 5.5;
    hmax = 1000;
    hmin = 900;
  }
  
  //LvL 3
  if(pontos>=20 && pontos<30) {
    dificuldade = 3;
    velocidade = 6;
    hmax = 900;
    hmin = 800; 
  }
  
  //LvL 4
  if(pontos>=30 && pontos<40) {
    dificuldade = 4;
    velocidade = 6.5;
    hmax = 800;
    hmin = 700; 
  }
  
  //LvL 5 
  if(pontos>=40 && pontos<50) {
    dificuldade = 5;
    velocidade = 7;
    hmax = 700;
    hmin = 600;
  }
  
  //LvL 6
  if(pontos>=50) {
    dificuldade = 6;
    velocidade = 7.5;
    hamx = 600;
    hmin = 500;
  }
    
}
