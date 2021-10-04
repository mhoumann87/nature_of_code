let moverA, moverB;

function setup() {
  createCanvas(400, 400);

  moverA = new Mover(100, height * 0.5);
  moverB = new Mover(300, height * 0.5);
}

function draw() {
  background(0);

  // Gravity pulling object straight down
  const gravity = createVector(0, 0.2);
  moverA.applyForce(gravity);
  moverB.applyForce(gravity);

  // Wind, when added are pushing object to right
  if (mouseIsPressed) {
    const wind = createVector(0.1, 0);
    moverA.applyForce(wind);
    moverB.applyForce(wind);
  }

  moverA.update();
  moverB.update();
  moverA.edges();
  moverB.edges();
  moverA.show();
  moverB.show();
}
