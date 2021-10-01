// Random walker with vectors and classes

// variable to hold a walker

function setup() {
  createCanvas(400, 400);

  walker = new Walker(width * 0.5, height * 0.5);

  background(51);
}

function draw() {
  walker.update();
  walker.show();
}
