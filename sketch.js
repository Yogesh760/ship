var ship,background
var shipimg;
function preload(){
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  groundImage = loadImage("sea.png")
}
function setup(){
  createCanvas(400,400);
    //create sprites here
    sea=createSprite(200,200,400,400)
    sea.addImage("sea",groundImage)
    sea.velocityX=-2
    ship= createSprite(180,340,3,30);
    ship.scale =0.09;
    ship.addAnimation("Ship",shipImg)
}
function draw() {
  background("blue");
if(sea.x<0){
  sea.x=width/2
}
  drawSprites()
}
