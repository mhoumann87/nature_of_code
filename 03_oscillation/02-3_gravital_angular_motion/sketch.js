/*
 * Our Gravitational Attraction with some added angular motion
 */

// Global variables for our elements
const movers = [];
let attractor;

function setup() {
  createCanvas(600, 600);

  // Create 10 movers
  for (let i = 0; i < 10; i++) {
    const x = random(width);
    const y = random(height);
    const m = random(50, 150);

    movers[i] = new Mover(x, y, m);
  }

  // Create an attractor in the middle of the screen and give it an
  // arbitrary mass
  attractor = new Attractor(width * 0.5, height * 0.5, 100);
}

function draw() {
  background(0);

  // Draw all the movers and apply force
  for (let mover of movers) {
    mover.update();
    mover.show();
    attractor.attract(mover);
  }

  if (mouseIsPressed) {
    attractor.position.x = mouseX;
    attractor.position.y = mouseY;
  }
  attractor.show();
}
