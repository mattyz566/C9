var box;

function setup() {
  createCanvas(400,400);
box = createSprite(200,200,120,120)  ;
}

function draw() 
{
  background(30); 

  if(keyDown(RIGHT_ARROW)) {
    box.position.x=box.position.x+10;
  }
  if(keyDown(LEFT_ARROW)) {
    box.position.x=box.position.x-10;
  }
  if(keyDown(UP_ARROW)) {
    box.position.y=box.position.y-10;
  }
  if(keyDown(DOWN_ARROW)) {
    box.position.y=box.position.y+10;
  }
  
  drawSprites()

}




