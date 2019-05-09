var diam1=0

function setup() {
  createCanvas(500,500);
  
}

function draw() {
  background("#003366");
  fill("#add8e6");
  stroke("#ffff00");
  ellipse(mouseX,mouseY,20,20);
  strokeWeight(5);
  ellipse(50,100,20,20);
  fill("#ff0000");
  ellipse(200,200,20,20);
  textSize(20);
  textFont("Georgia");
  textStyle(ITALIC);
  textAlign(CENTER);
  text("wassup",40,40);
    
}