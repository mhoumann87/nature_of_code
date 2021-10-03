let mover;

function setup() {
  createCanvas(400, 400);

  mover = new Mover(width * 0.5, height * 0.5);
}

function draw() {
  background(0);

  mover.update();
  mover.show();
}
