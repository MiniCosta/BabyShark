/*
Equipe: Paulo Costa Braga - 1A (Líder) 
Etapas 1, 2, 3, 4, 5, 6, 7, 8 ,9 e 10.
*/
var size = 400;
var tela = 0; var telaselecionada = 2; 
var telaselecionadaf = 2;
var x = 200; var y = 350; var x0 = []; var y0 = [];
var xm = []; var ym = []; var xd = []; var yd = []; 
var numzigs = 3; var nummelhorias = 1; var numdebuffs = 1; 
var raiosharko = 36; var raiozig = 30;
var podecolidir = true; var tempoinv = 0;
var vidas = 5; var pontos = 0; var dificuldade = "Fácil";
var velocidade = 5; var velsharko = 2; var velbernie = 5;
var hmax = 1000; var hmin = 900; var tirox = 200; 
var tiroy = 350; var Disparo = false;
var sharko; var zig; var bernie; var marina;
var logo; var fundodomar; var zigmorto; var zigvitorioso;
var marinaperfil,sharkoperfil,zigperfil,bernieperfil;
var beachball; var splash = []; var imgsplash; 
var contFrame = 1; var paraFrame = 0; 

function preload() {
marina = loadImage('marina.png');
bernie = loadImage('bernie.png');
sharko = loadImage('sharko.png');
zig = loadImage('zig.png');
logo = loadImage('logo.jpg');
fundodomar = loadImage('fundodomar.jpg');
sharkoperfil = loadImage('sharkoperfil.png');
zigperfil = loadImage('zigperfil.png');
marinaperfil = loadImage('marinaperfil.png');
bernieperfil = loadImage('bernieperfil.png');
zigmorto = loadImage('zigmorto.png');
zigvitorioso = loadImage('zigvitorioso.jpg');
beachball = loadImage('beachball.png');
 for(j=1;j<=2;j++) {
   splash[j] = loadImage('splash'+j+'.png');
 } 
}

function setup() {
  createCanvas(size,size);

  for (i=0;i<numzigs;i++) {
    y0[i] = -random(hmin,hmax);
     
    x0[i] = random(raiozig,size-raiozig);
     
  }
  for (i=0;i<nummelhorias;i++) {
    ym[i] = -random(3000,4000);
    
    xm[i] = random(50,350);
     
  }
   for (i=0;i<numdebuffs;i++) {
    yd[i] = -random(2000,4000);
    
    xd[i] = random(50,350);
     
  }
  
}


function draw() {
  
//INÍCIO
if(tela===0) {
  background(255);
  imageMode(CENTER);
  image(logo,200,100);
  stroke('red');
  strokeWeight(1);
  
  if(telaselecionada==2) { 
   rect(40,265,95,50);}
  else {
   rect(217,265,150,50);}
  
  if(keyIsDown(ENTER)) {
   tela=telaselecionada;} 
  
  if(keyIsDown(RIGHT_ARROW)) {
   telaselecionada = 1;}
  
  if(keyIsDown(LEFT_ARROW)) {
   telaselecionada = 2;}
  
  noStroke();
  textSize(30);
  text('Jogar',47,300);
  text('Instruções',222,300);
  textSize(15);
  text('Selecione com ENTER',120,380);
  
}
//INSTRUÇÕES
if(tela==1) {
  background(0,150,250);
  imageMode(CENTER);
  image(sharkoperfil,70,50);
  image(zigperfil,330,50); 
  image(marinaperfil,70,320);
  image(bernieperfil,330,320);
  var linhas = '   Você jogará com o personagem Sharko, o tubarão fofo/raivoso \n que é apaixonado pela sereia Marina. Atire no Zig, seu inimigo \n mortal, para vencer o jogo. Encoste na Marina para ganhar velo- \n cidade e evite o Bernie (o caramujo, capanga do Zig) se não qui- \n ser ficar lento. Atire no CTRL. Mova-se com as setas. Atinja 60 \n pontos para  ganhar!  \n                                    Para jogar clique Espaço.';
  textSize(14);
  textLeading(20);
  textFont('Georgia');
  text(linhas,0,130);
  stroke('red');
  strokeWeight(1);
  rect(145,280,110,40);
  noStroke();
  textSize(30);
  text('JOGAR',150,310);
  if(keyIsDown(32)) {
      tela=2}   
  }
    
//JOGO
if(tela==2) {
  background(255);
  image(fundodomar,200,200);
  imageMode(CENTER);
  textSize(20);
  text('Vidas: '+ vidas,20,20);
  text('Pontos: '+ pontos,200,20);
  text('Dificuldade: '+ dificuldade,200,40);
  text('Velocidade: ' + velsharko,20,40);
  
  //SHARKO
  imageMode(CENTER);
  image(sharko,x+4.5,y);
  
  //CONTROLE 
  if (keyIsDown(LEFT_ARROW)) {
    x -= velsharko;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += velsharko;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= velsharko;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += velsharko;
  }

  if (x>=size-raiosharko) {
    x = size-raiosharko;
  }
  
  if (x<=raiosharko) {
    x = raiosharko;
  }
  
  if (y>=size-raiosharko) {
    y = size-raiosharko;
  }
    
  if (y<=raiosharko){
    y = raiosharko;
  }
  
  if (keyIsDown(CONTROL) && Disparo == false) {
    tirox = x;
    tiroy = y;
    Disparo = true;
  }
  
  //ZIG
  for (i=0;i<numzigs;i++) { 
  imageMode(CENTER);
  image(zig,x0[i],y0[i]);
  y0[i]=y0[i]+velocidade;
    
   if(y0[i]>size+raiozig) {
   y0[i] = -random(hmin,hmax);
     
   x0[i] = random(raiozig,size-raiozig);  
   }
  }
  
  //MELHORIAS
  for (i=0;i<nummelhorias;i++) {
  imageMode(CENTER);
  image(marina,xm[i],ym[i]);
  ym[i] = ym[i] + 4;
  if(ym[i]>size+35) {
    ym[i] = -random(2000,3000);
    
    xm[i] = random(50,350); 
  }
  if(dist(x,y,xm[i],ym[i]) < raiosharko + 35) {
    velsharko++;
    xm[i] = random(50,350);
    
    ym[i]= random(2000,4000);
    
   }
  }
  
  //DEBUFF  
  for (i=0;i<numdebuffs;i++) {
  imageMode(CENTER);
  image(bernie,xd[i],yd[i]);
  yd[i] = yd[i] + velbernie;
  if(yd[i]>size+35) {
    yd[i] = -random(2000,4000);
    
    xd[i] = random(50,350);    
  }
  if(dist(x,y,xd[i],yd[i]) < raiosharko + 35) {
    velsharko = velsharko - 1;
    if(velsharko<=0) {
      velsharko = 1;}
    xd[i] = random(50,350);
    
    yd[i]= random(2000,4000); 
   }
  }
  
  //DISPARO
  if(Disparo) {
  imageMode(CENTER)
  image(beachball,tirox,tiroy);
  tiroy = tiroy - 10;
    imgsplash = splash[contFrame];
    image(imgsplash,x,y-40); 
    imageMode(CENTER);
    paraFrame++;
    if(paraFrame>30){
     contFrame++;
     paraFrame = 0;}
    if(contFrame > 2){
     contFrame = 1;}
  if(tiroy < 0) {
    Disparo = false;}
  }
    
  //COLISÃO DISPARO-ZIG
  for (i=0;i<numzigs;i++) { 
  if (dist(tirox,tiroy,x0[i],y0[i]) < raiozig + 5) {
    pontos = pontos + 1;
    if(pontos>=60) {
    tela = 4;}
    tirox = 0;
    tiroy = 0;
      
    x0[i] = random(raiozig,size-raiozig);
  
    y0[i] = -random(hmin,hmax);
   }
  }  

  //COLISÃO ZIG-SHARKO
  for (i=0;i<numzigs;i++) { 
  if (dist(x,y,x0[i],y0[i]) < raiosharko+raiozig && podecolidir) {
     podecolidir = false;
     x = 200;
     y = 350;
     vidas= vidas - 1;
     if(vidas<=0) {
     tela = 3;}
   
     x0[i] = random(raiozig,size-raiozig);
      
     y0[i] = -random(hmin,hmax);  
    }
   }
  
  if(!podecolidir) {
    tempoinv++;
  }
  
  if(tempoinv==50) {
     podecolidir = true;
     tempoinv = 0;
  }
  
  //LvL 1
  if(pontos>=0 && pontos<10) {
    dificuldade = "Fácil";
    velocidade = 5;
    hmax = 1000;
    hmin = 900;
    velbernie = 5;
  }
  //LvL 2
  if(pontos>=10 && pontos<20) {
    dificuldade = "Médio";
    velocidade = 6;
    hmax = 900;
    hmin = 800;
    velbernie = 6;
  }
  
  //LvL 3
  if(pontos>=20 && pontos<30) {
    dificuldade = "Difícil";
    velocidade = 6.5;
    hmax = 800;
    hmin = 700; 
  }
  
  //LvL 4
  if(pontos>=30 && pontos<40) {
    dificuldade = "Extrema";
    velocidade = 7;
    hmax = 700;
    hmin = 600;     
  }
  
  //LvL 5 
  if(pontos>=40 && pontos<50) {
    dificuldade = "Ultimate";
    velocidade = 8;
    hmax = 600;
    hmin = 550;
  }
  
  //LvL 6
  if(pontos>=50) {
    dificuldade = "???";
    velocidade = 9;
    hamx = 550;
    hmin = 500;
    velbernie = 7
  }
 }
  
//DERROTA
if(tela==3) {  
  vidas = 5;
  pontos = 0;
  dificuldade = 'Fácil';
  velsharko = 3;
  podecolidir = false;
  x = 200;
  y = 350;
 
  background(255) 
  image(zigvitorioso,200,112.5)
  textSize(50)
  text('Fim de Jogo',65,285)
  stroke('red')
  if(telaselecionadaf ==2) {  
  rect(30,320,200,40)
  }
  else{
  rect(275,320,72,40)
  }
  if(keyIsDown(SHIFT)) {
     tela=telaselecionadaf;
  } 
  if(keyIsDown(RIGHT_ARROW)) {
    telaselecionadaf = 0
  }
  if(keyIsDown(LEFT_ARROW)) {
    telaselecionadaf = 2
  }
  textSize(25)
  noStroke();
  text('Jogar novamente',33,350);
  text('Menu',280,350); 
  textSize(15)
  text('Selecione com SHIFT',120,395)
  }
  
//VITÓRIA
  if(tela==4) {
  vidas = 5;
  pontos = 0;
  dificuldade = 'Fácil';
  velsharko = 3;
  podecolidir = false;
  x = 200;
  y = 350;
  
  background(255);
  image(zigmorto,195,120)
  textSize(50);
  text('VITÓRIA',100,300);
  stroke('red');
  
  if(telaselecionadaf ==2) {  
  rect(30,320,200,40);
  }
  else{
  rect(275,320,72,40);
  }
  if(keyIsDown(SHIFT)) {
     tela=telaselecionadaf;
  } 
  if(keyIsDown(RIGHT_ARROW)) {
    telaselecionadaf = 0;
  }
  if(keyIsDown(LEFT_ARROW)) {
    telaselecionadaf = 2;
  }
  textSize(25);
  noStroke();
  text('Jogar novamente',33,350);
  text('Menu',280,350); 
  textSize(15);
  text('Selecione com SHIFT',120,395);
  }
  
}
