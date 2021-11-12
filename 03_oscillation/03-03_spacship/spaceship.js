/*
 * Spaceship from the old game asteroids
 */

class Spaceship {
  constructor() {
    // Made up damping to slow down ship
    this.damping = 0.995;
    this.topSpeed = 6;
    // size
    this.r = 16;
    // all our regular motion stuff
    this.location = new createVector(width * 0.5, height * 0.5);
    this.velocity = new createVector(0, 0);
    this.acceleration = new createVector(0, 0);
    // boolean to show if trust is on or off
    this.thrusting = false;
    // variable for heading
    this.heading = 0;
  }

  // standard euler integration
  update() {
    this.velocity.add(this.acceleration);
    this.velocity.mult(this.damping);
    this.velocity.limit(this.topSpeed);
    this.location.add(this.velocity);
    // reset acceleration, normally .set(0, 0);
    this.acceleration.mult(0);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  // turn changes angle
  turn(a) {
    this.heading += a;
  }

  // apply trust force
  thrust() {
    // offset the angle since we drew the ship velocity
    const angle = this.heading - PI / 2;
    // polar to cartesian for force vector
    const force = new createVector(cos(angle), sin(angle));
    force.mult(0.1);
    this.applyForce(force);
    // to draw booster
    this.thrusting = true;
  }

  // The ship "fly" through walls from right to left, top to bottom
  wrapEdges() {
    const buffer = this.r * 2;
    if (this.location.x > width + buffer) this.location.x = -buffer;
    else if (this.location.x < -buffer) this.location.x = width + buffer;

    if (this.location.y > height + buffer) this.location.y = -buffer;
    else if (this.location.y < -buffer) this.location.y = height + buffer;
  }

  // draw the ship
  display() {
    stroke(255);
    strokeWeight(2);

    push();
    rectMode(CENTER);
    translate(this.location.x, this.location.y + this.r);
    rotate(this.heading);

    fill(127);
    if (this.thrusting) fill(255, 0, 0);

    // booster rockets
    rect(-this.r / 2, this.r, this.r / 3, this.r / 2);
    rect(this.r / 2, this.r, this.r / 3, this.r / 2);

    fill(127);
    // a triangle
    beginShape();
    vertex(-this.r, this.r);
    vertex(0, -this.r);
    vertex(this.r, this.r);
    endShape();

    pop();

    this.thrusting = false;
  }
}
