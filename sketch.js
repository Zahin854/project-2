var main, mainImage
var monster, monsterImage,monster2
var coins, coinsImage
var points
var block
var backgroundImg,ground
var PLAY=1
var END=0
var gameState= PLAY;


function preload(){
mainImage= loadImage("images/Main.png")
coinsImage= loadImage("images/Coin.png")
monster1Image= loadImage("images/Monster.png")
monster2Image= loadImage("images/Monster2.png")
backgroundImg= loadImage("images/bg1.jpg")
}

function setup() {
  
  createCanvas(displayWidth -270,displayHeight-30);
  bg= createSprite(displayWidth/2-170,displayHeight/2-80)
  bg.addImage(backgroundImg)
  bg.scale=2.75
  bg.velocityX=-5
  ground= createSprite(displayWidth/2,displayHeight-40,displayWidth*5,20)
  //ground.addImage(back)
 //ground.velocityX=-2
 main= createSprite(ground.x-240,ground.y-60,1,1)
 main.addImage("main1",mainImage)
 main.scale=0.1
 monsterGroup= new Group 
 coinGroup= new Group 
}

function draw() {
 background(" blue");  
 if (bg.x < 0){
  bg.x = 480;
}
 if(ground.x<0){
 ground.x=ground.width/2
 }
 text("Gold: "+ points, 500,50);
 
 if(gameState === PLAY){
   ground.velocityX = -4;
  
   
   if (ground.x < 0){
     ground.x = ground.width/2;
   }
   console.log(bg.width)
  
//    if(keyDown("space")&& main.y >=100) {
//        main.velocityY = -13;
//    }
   
//    main.velocityY = main.velocityY + 0.8
   spawnCoins();
   spawnMonsters();

//    if(coinGroup.isTouching(main.x)){
//     points =points +5
// }
   if(monsterGroup.isTouching(main.x)){
     //  gameState = END;
   }
 }
  else if (gameState === END) {
     ground.velocityX = 0;
    monsterGroup.setLifetimeEach(-1)
    monsterGroup.setVelocityXEach(0);
    coinGroup.setVelocityXEach(0); 
    coinGroup.setLifetimeEach(-1)
    main.velocityY=0
    if(mouseIsPressed){
      gameState=PLAY
      main.x=main.x+100
    }
  }
 
  drawSprites();
}

function spawnMonsters(){
  if (frameCount%60==0){
    var monster = createSprite( displayWidth-170, displayHeight-100  , 30, 30);
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: monster.addImage(monster1Image);
              break;
      case 2: monster.addImage(monster2Image);
              break;
              default:break;
            }
            monster .velocityX = -6;      
            monster.scale = 0.05;
            monster.lifetime = 1000;
            monsterGroup.add(monster);
  }
 }
 
 function spawnCoins() {
    if (frameCount%100==0) {
      coins = createSprite( displayWidth-170 ,600  , 30, 30);
      coins.y = Math.round(random(200, displayHeight-150));
    coins.addImage(coinsImage);
      coins.scale = 0.1;
      coins.velocityX = -5;
      coins.lifetime =1000;
      coinGroup.add(coins);
     }
 }