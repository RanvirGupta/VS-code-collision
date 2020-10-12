var fixedRect, movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,50,100);
  fixedRect.shapeColor = 'green';
  fixedRect.debug = true;
  movingRect = createSprite(400,200,100,50);
  movingRect.shapeColor = 'green';
  movingRect.debug = true;
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
     && fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2
     && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
     &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor = 'red';
    fixedRect.shapeColor = 'red';
  }else {
    movingRect.shapeColor = 'cyan';
    fixedRect.shapeColor = 'cyan';
  }
  drawSprites();
}