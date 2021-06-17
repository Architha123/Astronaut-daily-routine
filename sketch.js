var bgImage,bg;
var sleepImage;
var brushImage;
var astronaut;
var gym;
var drink;
var move;
var fly;


function preload(){
bgImage = loadImage("iss.png")
sleepImage = loadImage("sleep.png");
brushImage = loadAnimation("brush.png");
gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
drink = loadAnimation("drink1.png","drink2.png");
bath = loadAnimation("bath1.png","bath2.png");
movei  = loadAnimation("eat1.png","eat2.png");
fly  = loadAnimation("move.png")
}


function setup() {
  createCanvas(800,400);
  createSprite(600,600, 200,200);
  bg=createSprite(300,200,100,100);
  bg.addImage(bgImage);
  bg.scale = 0.1;

  astronaut = createSprite(300,250);
  astronaut.addImage(sleepImage);
  astronaut.scale = 0.06;
 
  
  
}

function draw() {
  background(255,255,255);  
  if(keyDown("up")){
    astronaut.addAnimation("brushing",brushImage);
    astronaut.changeAnimation("brushing")
    
  }
  if(keyDown("down")){
    astronaut.addAnimation("gyming",gym)
    astronaut.changeAnimation("gyming");  
  }

  if(keyDown("right")){
    astronaut.addAnimation("drinking",drink);
    astronaut.changeAnimation("drinking");
  }

  if(keyDown("left")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
  }
  
  if(keyDown("m")){
    astronaut.addAnimation("moving",movei);
    astronaut.changeAnimation("moving");
  }
  if(keyDown("enter")){
    astronaut.addAnimation("flying",fly);
    astronaut.changeAnimation("flying")
  }

  drawSprites();
}