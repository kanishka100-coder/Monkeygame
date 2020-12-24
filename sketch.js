
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground,invisibleground
var survivalTime=0;
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
createCanvas(600,400);

  
  ground=createSprite(300,370,600,15);
  ground.velocityX=-5;
  ground.x=ground.width/2;
  
  invisibleground=createSprite(300,385,600,15);
  invisibleground.visible=false;
  
  monkey=createSprite(100,300);
  monkey.addAnimation("monkeyanimation",monkey_running); 
  monkey.scale=0.2;
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();

}


function draw() {
  
  background("white");
  
if(keyDown("space")){
  monkey.velocityY=-12;
  
}
  survivalTime=Math.round(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 200,50);
  

  if(ground.x<ground.width/2){
    ground.x=ground.width/2;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(invisibleground);
  
  food();
  obstaclespawn();
  
drawSprites();
  
}

function food(){

  
  if(frameCount%80==0){
  
      banana=createSprite(600,10);
      banana.y=random(120,200)
      banana.addImage(bananaImage);
      banana.scale=0.15;
      banana.velocityX=-5
      banana.lifetime=150;
      FoodGroup.add(banana);
  
  }
}

function obstaclespawn(){
  
  
  if(frameCount%300==0){
   
     obstacle=createSprite(500,385,10,10);
     obstacle.addImage(obstaceImage);
     obstacle.scale=0.3
     obstacle.velocityX=-5;
     obstacle.collide(invisibleground); 
     obstacleGroup.add(obstacle);
    
 }
  
}






