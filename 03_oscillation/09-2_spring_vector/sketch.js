let bob, anchor, velocity, gravity;
const k = 0.01;
const restLength = 200;

function setup() {
  createCanvas(600, 400);
  bob = createVector(350, 0);
  anchor = createVector(300, 0);
  velocity = createVector(0, 0);
  gravity = createVector(0, 0.1);
}

function draw() {
  background(112, 50, 125);
  strokeWeight(4);
  stroke(255);

  line(anchor.x, anchor.y, bob.x, bob.y);

  fill(45, 197, 244);

  circle(anchor.x, anchor.y, 32);
  circle(bob.x, bob.y, 64);

  if (mouseIsPressed) {
    bob.x = mouseX;
    bob.y = mouseY;
    velocity.set(0, 0);
  }

  const force = p5.Vector.sub(bob, anchor);
  const x = force.mag() - restLength;
  force.normalize();
  force.mult(-1 * k * x);

  velocity.add(force);
  velocity.add(gravity);
  bob.add(velocity);
  velocity.mult(0.99);
}
