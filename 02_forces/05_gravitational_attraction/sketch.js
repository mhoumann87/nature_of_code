// Array to hold the movers
const movers = [];
// Global variable for the Attractor
let attractor;

function setup() {
  createCanvas(600, 600);

  // Make 10 movers with random position and mass
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let m = random(50, 150);

    movers[i] = new Mover(x, y, m);
  }

  // Create the attractor in the middle of the screen and a mass of a fixed value
  attractor = new Attractor(width * 0.5, height * 0.5, 100);

  //background(0);
}

function draw() {
  background(0);

  // Put the movers on the canvas and let the attractor influence them
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
