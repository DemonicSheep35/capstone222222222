var climber, climberImage, door, doorImage, ghost, ghostImage, tower, towerImage, climberGroup;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
 function preload() {
  
   towerImage = loadImage("tower.png");
   climberImage = loadImage("climber.png");
   doorImage = loadImage("door.png");
   ghostImage = loadAnimation("ghost-jumping.png","ghost-standing.png");
   
  }

 function setup() {
   createCanvas(600,900);
   background(180);
   
   tower = createSprite(303,450);
   tower.addImage("verytall",towerImage);
   tower.velocityY = 3;
   
   ghost = createSprite(300,450);
   ghost.addAnimation("scary",ghostImage);
   ghost.scale = 0.4;
   
   climberGroup = new Group();
   
   
   
   
   
   
   
 }


  function draw() {
    
    if(tower.y > 600){
      tower.y = 300;
    }
    
    if(gameState === PLAY){
      ghost.velocityY = 7;
      if(keyDown("a")){
      ghost.x = ghost.x - 4;
      }
      if(keyDown("d")){
      ghost.x = ghost.x + 4 ;
      }
      
      if(keyDown("space")){
        ghost.velocityY = -5;
        
      }
      
      if(ghost.isTouching(climberGroup)){
        gameState = END;
        gameOver();
      }
      
      
    }
    
    
    
    door_climber();
    drawSprites();
  }

  function door_climber(){
    
    
    
    if(frameCount % 80===0){
     door = createSprite(100,100,20,60);
     door.addImage("door",doorImage);
     door.velocityY = 6;
     
     door.x = Math.round(random(100,500));
     
     door.lifetime = 200;

     climber = createSprite(100,160,20,60);
     climber.addImage("climb",climberImage);
     climber.velocityY = 6;
     climber.scale = 0.6
     climber.x = door.x;
     
     climber.lifetime = 200;
      
    climberGroup.add(climber);
    }
    
    
    
    
  }
