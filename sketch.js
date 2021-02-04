var  m,f
function setup() {

createCanvas(800,400);
  m = createSprite(220, 50, 100, 50);
   f  = createSprite(300,180,20,40);
   m.shapeColor =  "blue"
   f.shapeColor=  "orange"

}


function draw() {
  background("black");  
  drawSprites();
  m.x = mouseX
  m.y = mouseY
  console.log(m.x-f.x)
  if(m.x-f.x <f.width/2+m.width/2  && 
    f.x-m.x < f.width/2+m.width/2  &&
    m.y-f.y < f.height/2+m.height/2  &&
    f.y-m.y < f.height/2+m.height/2 ){ 
    m.shapeColor = "red"

    
  }
  else{m.shapeColor = "blue"}
}

