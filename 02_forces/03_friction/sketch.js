// Make an array for mover objects
let movers = [];
// we make up a coefficient of friction and make it a global variable
const mu = 0.1;

function setup() {
  createCanvas(400, 400);

  // Create 10 movers with random x value and random mass
  for (let i = 0; i < 10; i++) {
    movers[i] = new Mover(random(width), height * 0.5, random(1, 8));
  }
}

function draw() {
  background(0);

  for (let mover of movers) {
    // Gravity is pulling the object straight down
    const gravity = createVector(0, 0.2);
    //The gravitational acceleration is based of the weight of the object,
    // so we have to add the "weight" based on the area of the object
    const weight = p5.Vector.mult(gravity, mover.mass);
    mover.applyForce(weight);

    // Wind is added when we press the mouse button
    if (mouseIsPressed) {
      const wind = createVector(0.1, 0);
      // the wind is pushing the object to the right
      mover.applyForce(wind);
    }

    mover.update();
    mover.edges();
    mover.friction(mu);
    mover.show();
  }
}
