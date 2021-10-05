let moverA, moverB;

function setup() {
  createCanvas(400, 400);

  moverA = new Mover(100, height * 0.5, 2);
  moverB = new Mover(300, height * 0.5, 4);
}

function draw() {
  background(0);

  // Gravity pulling object straight down
  const gravity = createVector(0, 0.2);
  // The gravitational acceleration is based on the weight of the object,
  // so we have to add the "weight" of the object based on it's mass
  const weightA = p5.Vector.mult(gravity, moverA.mass);
  const weightB = p5.Vector.mult(gravity, moverB.mass);

  moverA.applyForce(weightA);
  moverB.applyForce(weightB);

  // Gravity gives the two objects the same speed falling, but the wind
  // interacts with the differently, the "heavier" one needs more force
  // to affect it

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
