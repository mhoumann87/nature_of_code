let mover;

function setup() {
  createCanvas(400, 400);

  mover = new Mover(width * 0.5, height * 0.5);
}

function draw() {
  background(0);

  // Force pushing our element straight down
  const gravity = createVector(0, 0.2);
  mover.applyForce(gravity);

  // We use the mouse to add "wind" to the element
  if (mouseIsPressed) {
    // A force pushing the element to the right
    const wind = createVector(0.1, 0);
    mover.applyForce(wind);
  }

  mover.update();
  mover.edges();
  mover.show();
}
