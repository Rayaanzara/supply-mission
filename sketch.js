function setup() {
  createCanvas(1600,400);

bulletSpeed = random(222,321);
bulletWeight = random(30,52);
thickness = random(22,83);
 
bullet = createSprite(400,200,20,10);
bullet.shapeColor = "white";
bullet.velocityX = bulletSpeed; 

wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = color(80,80,80) 

}


var thickness,wall;
var bulletSpeed,bulletWeight,bullet;
var thickness;

function draw() {
  background("yellow");  

  if(hasCollided(bullet,wall)){
   bullet.velocityX = 0;
    var damage = 0.5*bulletWeight*bulletSpeed*bulletSpeed/thickness*thickness*thickness

 if(damage > 10){
   wall.shapeColor = "red";
 }


if(damage<10){
  wall.shapeColor = "green";
}
}
  
 drawSprites();
}


function hasCollided(ibullet,iwall){

bulletRightEdge = ibullet.x + ibullet.width;
wallLeftEdge = iwall.x;
if(bulletRightEdge >= wallLeftEdge){
  return true
}
  return false
}















