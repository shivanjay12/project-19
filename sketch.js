var banana,bananaimage,obstacleimage;
var obstacle,obstaclegroup;
var foodGroup,foodimage;
var monkeyimage
var bg;
var player,player_running; 
var score =0;
var obstacle;
var invisibleground;

function preload(){

  backImage = loadImage("jungle.jpg");
  
 player_running=loadAnimation("Monkey_01.png","Monkey_02.png", "Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
                            
                            
 bananaimage = loadImage("banana.png");
  obstacleimage = loadImage("stone.png");

  
 foodgroup = new Group();
  obstaclesGroup = new Group();
  
  
}
function setup() {
  createCanvas(400, 400);
  bg = createSprite(200,200);
  bg.velocityX = -6;
   bg.x = bg.width/2;
  bg.addImage(backImage);
  
  invisibleground = createSprite(400,400,400,10);
  invisibleground.velocityX = -6;
   invisibleground.x = invisibleground.width/2;

 player = createSprite(100,400,20,50);
 player.addAnimation("Running",player_running);
  player.scale=0.1
}

function draw() {
  spawnobstacles();
  spawnfood();
   if (bg.x < 0){
     bg.x =bg.width/2;
   }
  if(invisibleground.x < 0){
    invisibleground.x = invisibleground.width/2;  
  }
   if(foodgroup.isTouching(player)){
     score=score+2;
     foodgroup.destroyEach();
   }
   if(obstaclesGroup.isTouching(player)){
       player.scale=0.12;
   }
  switch(score){   
    case 10: player.scale=0.12;
            break;
       case 20: player.scale=0.14;
            break;
           case 30: player.scale=0.16;
            break;  
             case 40: player.scale=0.18;
            break;
         default: break;
  }
  
  if (keyDown("space")){
    player.velocityY=-12;
  }
     player.velocityY = player.velocityY + 0.8
  
    player.collide(invisibleground);
 invisibleground.visible=false;

  
  drawSprites();
  stroke("white");
  textSize(20);
  text("Score: "+ score,200,50)
}
function spawnfood(){
  if(frameCount%80===0){
    var banana = createSprite(400,200,20,20);
    banana.y = random(180,200);
    banana.addImage(bananaimage);
    banana.scale =0.1;
    banana.velocityX =-5;
    foodgroup.add(banana);
    banana.lifetime=300;

     
  }
}
function spawnobstacles(){
  if(frameCount%300===0){
    var obstacle = createSprite(400,350,10,40);
   
    obstacle.addImage(obstacleimage);
    obstacle.scale =0.2;
    obstacle.velocityX =-6;
    obstaclesGroup.add(obstacle);
    obstacle.lifetime=300;
  }
}
