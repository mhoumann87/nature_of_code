let walker;

function setup() {
  createCanvas(400, 400);
  // background(51);

  walker = new Walker(width * 0.5, height * 0.5);
}

function draw() {
  background(51);

  walker.update();
  walker.show();
}
