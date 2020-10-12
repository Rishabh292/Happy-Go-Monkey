var bananaImage, obstacleImage; 
var background;
var obstacleGroup;
var score = 0;
var bananaGroup;

function preload(){
  backgroundImg = loadImage("jungle.jpg");
  playerImg = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png", "Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png", "Monkey_10.png");
  
}

function setup() {
  createCanvas(400, 400);
  
  backround = createSprite(200,200,400,400);
  backround.addImage("jungle", backgroundImg);
  backround.x = backround.width/2;
  backround.velocityX = -3;
  
  player = createSprite(100,300,50,50);
  player.addAnimation("Monkey", playerImg);
  
  ground.visibility = false;
}

function draw() {
  background(220);
  
  text("Score: " + score, 300,50);
  
  if(backround.x < 0){
    backround.x = backround.width/2;
  }
  
  if(bananaGroup.isTouching(player)){
    score = score + 2;
    bananaGroup.destroyEach();
  }
  
  if(obstacleGroup.isTouching(player)){
    player.scale = 0.2;
  }
  
  text("Score:" + score, 350, 50);
  
  switch(score){
    case 10:player.scale = 0.12;
      break;
    case 20:player.scale = 0.17;
      break;
    case 30:player.scale = 0.22;
      break;
    case 40:player.scale = 0.27;
      break;
    default: break;
  }
    
  spawnBananas();
}  
  function spawnObstacles(){
  if(World.frameCount % 300 === 0) {
    var obstacle = createSprite(400,325,10,40);
    obstacle.velocityX = -4;
    obstacle.setAnimation("Stone");
    obstacle.scale = 0.12;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
}

function spawnBananas(){
  if(World.frameCount % 80 === 0){
    var banana = createSprite(300,100,30,30);
    banana.y = randomNumber(120,150);
    banana.setAnimation("Banana");
    banana.scale = 0.06;
    banana.velocityX = -4;
    banana.lifetime = 100;
    bananaGroup.add(banana);
  }
}
  
  function spawnObstacles(){
  if(World.frameCount % 300 === 0) {
    var obstacle = createSprite(400,325,10,40);
    obstacle.velocityX = -4;
    obstacle.setAnimation("Stone");
    obstacle.scale = 0.12;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
}