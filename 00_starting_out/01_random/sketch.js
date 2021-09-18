let x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);

  let x = random(width);

  ellipse(x, 200, 24, 24);
}