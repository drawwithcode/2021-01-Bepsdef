function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background("black");

  slider = createSlider(10, 500, 0);
  slider.position(20, 50);
  slider.style("width", "170px");
}

function draw() {
  noStroke();
  fill("white");
  textSize(16);
  text("drag it until you make it", 25, 40);

  push();
  translate(width / 2, height / 2);
  stroke(mouseX, mouseX, 255);
  noFill();
  rotate(frameCount / 4);
  line(0, 0, slider.value(), 10);
  pop();


  push();
  rotate(frameCount / 2);
  translate(width / 2, height / 2);
  stroke("black");
  line(-2000, 0, 2000, 0);
  rotate(45);
  line(0, -2000, 0, 2000);
  pop();

  push();
  stroke("white");
  translate(width / 2, height / 2);
  line(-2000, 0, 2000, 0);
  line(0, -2000, 0, 2000);
  pop();
}
function doubleClicked() {
  randomcolor = random(0, 255);
  background(randomcolor);
}
