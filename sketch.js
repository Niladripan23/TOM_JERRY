
var canvas,bg;
var together;
var tom, tomImg1,tomImg2,tomImg3;
var jerry, jerryImg1,jerryImg2,jerryImg3;


function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3= loadAnimation("images/cat4.png");
    jerryImg1=loadAnimation("images/mouse1.png");
    jerryImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    tom = createSprite(850,700);
    tom.addAnimation("tom_sleeping",tomImg1);
    tom.scale = 0.1;

    jerry = createSprite(200,650);
    jerry.addAnimation("jerry",jerryImg1)
    jerry.scale = 0.1;


}

function draw() {

    background(bg);

    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (tom.width - jerry.width)/2 ){
        tom.velocityX=0;
        tom.addAnimation("tomImage", tomImg3);
        tom.x =300;
        tom.scale=0.1;
        tom.changeAnimation("tomImage");
        
        jerry.addAnimation("jerryImage", jerryImg3);
        jerry.scale=0.1;
        jerry.changeAnimation("jerryImage");
    }

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("tom_running",tomImg2);
    tom.changeAnimation("tom_running");

        jerry.addAnimation("jerryTeasing",jerryImg2);
        jerry.changeAnimation("jerryTeasing");
        jerry.frameDelay = 25;
      }


}
