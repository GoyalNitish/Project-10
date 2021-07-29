var ship;
var sea;
function preload(){
seaImage=loadImage('sea.png');
shipImage=loadAnimation('ship-1.png','ship-2.png' ,'ship-3.png' , 'ship-4.png');

}

function setup(){
  createCanvas(600,400);
sea=createSprite(200,180,400,20) 
sea.addImage("sea",seaImage);
sea.x=sea.width/2;
sea.velocityX= -2;

ship=createSprite(200,200,50,50);
ship.addAnimation('mship',shipImage);

}


function draw() {
  background("blue");
 
 if(sea.x<0){
   sea.x=sea.width/2;
 }

drawSprite
  }
