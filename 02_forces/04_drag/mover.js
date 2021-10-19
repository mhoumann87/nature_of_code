/*
 * To calculate the drag force (we use a fluid force in this example) we need
 * The opposite to direction by an arbitrary number (* -num)
 * rho, the density of the element the mover is moving through, wind is light and water is   denser and create more "resistance" (constant)
 * Surface area (A) an arrow head = small area vs. a box = large area (constant)
 * Coefficient to drag, maps to the relative strength to the drag it self (constant)
 * The velocity squared
 * The unit vector direction
 *
 * We just use -1 * a constant that contains all constants * velocity² * unit vector
 *
 */

class Mover {
  constructor(x, y, m) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.mass = m;
    this.radius = sqrt(this.mass) * 10;
  }

  drag(c) {
    // Direction of Drag
    let drag = this.velocity.copy();
    // Make drag a unit vector
    drag.normalize();
    // Reverse the direction
    drag.mult(-1);
    // Square the velocity
    let speedSq = this.velocity.magSq();
    // Set the force
    drag.setMag(c * speedSq);
    // Add drag to the movers
    this.applyForce(drag);
  }

  applyForce(force) {
    const f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  edges() {
    if (this.position.y >= height - this.radius) {
      this.position.y = height - this.radius;
      this.velocity.y *= -1;
    }

    if (this.position.x >= width - this.radius) {
      this.position.x = width - this.radius;
      this.velocity.x *= -1;
    } else if (this.position.x <= this.radius) {
      this.position.x = this.radius;
      this.velocity.x *= -1;
    }
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    this.acceleration.set(0, 0);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);

    ellipse(this.position.x, this.position.y, 2 * this.radius);
  }
}
