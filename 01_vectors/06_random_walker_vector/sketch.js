let mover;

function setup() {
  createCanvas(400, 400);
  background(1);

  mover = new Mover(width * 0.5, height * 0.5);
}

function draw() {
  mover.update();
  mover.show();
}
