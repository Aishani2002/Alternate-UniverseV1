var Sun,Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune;
var Sunimg,Mercuryimg,Venusimg,Earthimg,Marsimg,Jupiterimg,Saturnimg,Uranusimg,Neptuneimg;

function preload(){
  Sunimg = loadImage("sun.jpg");
  Mercuryimg = loadImage("mercury.jpg");
  Venuimg = loadImage("venus.jpg");
  Earthimg = loadImage ("Earth.jpg");
  Marsimg = loadImage("Mars.jpg");
  Jupiterimg = loadImage("Jupiter.jpg");
  Saturnimg = loadImage("Saturn.jpg");
  Uranusimg = loadImage("uranus.jpg");
  Neptuneimg = loadImage("neptune.jpg");
  }

function setup() {
  createCanvas(800,400);

  Sun = createSprite(400, 200, 50, 50);
  Sun.addimage ("Sun",Sunimg);
  Sun.scale = 0.5;

  Mercury = createSprite(400, 200, 50, 50);
  Mercury.addimage ("Mercury",Mercuryimg);
  Mercury.scale = 0.5;

  Venus = createSprite(400, 200, 50, 50);
  Venus.addimage ("Venus",Venusimg);
  Earth.scale = 0.5;

  Earth = createSprite(400, 200, 50, 50);
  Earth.addimage ("Earth",Earthimg);
  Earth.scale = 0.5;

  Mars = createSprite(400, 200, 50, 50);
  Mars.addimage ("Mars",Marsimg);
  Mars.scale = 0.5;

  Jupiter = createSprite(400, 200, 50, 50);
  Jupiter.addimage ("Jupiter",Jupiterimg);
  Jupiter.scale = 0.5;

  Saturn = createSprite(400, 200, 50, 50);
  Saturn.addimage ("Saturn",Saturnimg);
  Saturn.scale = 0.5;

  Uranus = createSprite(400, 200, 50, 50);
  Uranus.addimage ("Uranus",Uranusimg);
  Uranus.scale = 0.5;

  Neptune = createSprite(400, 200, 50, 50);
  Neptune.addimage ("Neptune",Neptuneimg);
  Neptune.scale = 0.5;

  
}

function draw() {
  background("black"); 

  angleMode(DEGREES);
  translate(width/2,height/2);
  rotate(angle);

  if(Sun.collide(Mercury)){
    Mercury.destroy;
  }

  if(Sun.collide(Venus)){
    Venus.destroy;
  }

  if(Sun.collide(Earth)){
    Earth.destroy;
  }

  if(Sun.collide(Mars)){
    Mars.destroy;
  }

  if(Sun.collide(Jupiter)){
    Jupiter.destroy;
  }

  if(Sun.collide(Saturn)){
    Saturn.destroy;
  }

  if(Sun.collide(Uranus)){
    Uranus.destroy;
  }
  if(Sun.collide(Neptune)){
    Neptune.destroy;
  }

  angle= angle = anglespeed;
  if(frameCount % 1 ===0){
    Sun.scale = Sun.scale + 0.01;
  }

  drawSprites();
}