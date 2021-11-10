/*
 * A simple mover object, but a triangle instead of a circle, that i why I have
 * changed the name from mover to vehicle, and the radius to length.
 *
 * Instead of calculating the angle from the velocity, we here calculate
 * the velocity from the angle, using the P5 Vector function fromAngle()
 */

class Vehicle {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.mass = m;
    this.length = sqrt(this.mass) * 2;

    this.angle = 0;
  }

  edges() {
    if (this.pos.y >= height - this.length) {
      this.pos.y = height - this.length;
      this.velocity.y *= -1;
    } else if (this.pos.y <= this.length) {
      this.pos.y = this.length;
      this.velocity.y *= -1;
    }

    if (this.pos.x >= width - this.length) {
      this.pos.x = width - this.length;
      this.velocity.x *= -1;
    } else if (this.pos.x <= this.length) {
      this.pos.x = this.length;
      this.velocity.x *= -1;
    }
  }

  update() {
    this.velocity = p5.Vector.fromAngle(this.angle);

    this.pos.add(this.velocity);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);

    push();
    translate(this.pos.x, this.pos.y);
    this.angle = this.velocity.heading();
    rotate(this.angle);
    triangle(
      -this.length,
      -this.length / 2,
      -this.length,
      this.length / 2,
      this.length,
      0
    );
    pop();
  }
}
