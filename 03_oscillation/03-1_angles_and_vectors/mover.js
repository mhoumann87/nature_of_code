/*
 * We need to know the angle of the mover, but P%js has a function
 * to calculate that 'vel.heading()'
 */

class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.velocity = p5.Vector.random2D();
    this.velocity.mult(5);
    this.acceleration = createVector(0, 0);
    this.mass = m;
    this.radius = sqrt(this.mass) * 2;

    this.angle = 0;
  }

  applyForce(force) {
    const f = p5.Vector.div(force, this.mass);

    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.pos.add(this.velocity);

    this.acceleration.set(0, 0);
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
      -this.radius,
      -this.radius / 2,
      -this.radius,
      this.radius / 2,
      this.radius,
      0
    );
    pop();
  }
}
