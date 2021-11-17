var ninja , ninjaRunning , ninjaAttack1 , ninjaAttack2 ;
var bg ,bgImg ;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var enemy3 , enemy1 , enemy2;
var enemy1Img , enemy2Img , enemy3Img;
var enemy1Group , enemy2Group , enemy3Group ;

function preload(){

}

function setup() {
  createCanvas(1250,610);
  ninja = createSprite(150, 400, 50, 50);
  ninja.scale = 0.5
image(ninja_loadImg,50,50)
ninja_createImg.position(50,900)
 // bg = createSprite(625,305,1250,610)
 // bg.addImage("bg",bgImg)


  ninja.addImage("ninjaAttact1",ninjaAttack1);
}

function draw() {
  background("white");  

  // condition
  if(gameState === PLAY){

    gameOver.visible = false;
    restart.visible = false;
    
    ground.velocityX = -(4 + 3* score/100)
    //scoring
    score = score + Math.round(getFrameRate()/60);
    
    if(score>0 && score%100 === 0){
       checkPointSound.play() 
    }
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    //jump when the space key is pressed
    if(keyDown("space")&& trex.y >= 100) {
        trex.velocityY = -12;
        jumpSound.play();
    }
    
    //add gravity
    trex.velocityY = trex.velocityY + 0.8
  
    //spawn the clouds
    spawnClouds();
  
    //spawn obstacles on the ground
    spawnObstacles();
    
    if(obstaclesGroup.isTouching(trex)){
        //trex.velocityY = -12;
        jumpSound.play();
        gameState = END;
        dieSound.play()
      
    }
  }
   else if (gameState === END) {
      gameOver.visible = true;
      restart.visible = true;
     
     //change the trex animation
      trex.changeAnimation("collided", trex_collided);
    
     
     
      ground.velocityX = 0;
      trex.velocityY = 0
      
     
      //set lifetime of the game objects so that they are never destroyed
    obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);
     
     obstaclesGroup.setVelocityXEach(0);
     cloudsGroup.setVelocityXEach(0);    
   }


  Spenemy1();
  Spenemy2();
  Spenemy3();
  drawSprites();
}

function Spenemy1(){

if (frameCount%60 === 0){
 var enemy1 = createSprite(600,300,80,80)

 image(enemy1_loadImg,50,50)
 enemy1_createImg.position(50,900)

  //enemy1.addImage(enemy1Img)
  enemy1.velocityX = -5;
  enemy1.lifetime = 300
  enemy1Group.add(enemy1)
}

}

function Spenemy2(){

  if (frameCount%30 === 0){
   var enemy2 = createSprite(600,300,80,80)

   image(enemy2_loadImg,50,50)
   enemy2_createImg.position(100,600)

   // enemy2.addImage(enemy2Img)
    enemy2.visible = false
    enemy2.velocityX = -5;
    enemy2.lifetime = 300
    enemy2Group.add(enemy2)
  }
  
  }

function Spenemy3(){

  if (frameCount%50 === 0){
   var enemy3 = createSprite(600,300,80,80)

   image(enemy3_loadImg,100,50)
   enemy3_createImg.position(120,600)

    //enemy3Group.addImage(enemy3Img)
    enemy3.velocityX = -5;
    enemy3.lifetime = 300
    enemy3Group.add(enemy3)
  }
  
  }

  