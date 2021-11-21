class Pendulum {
  constructor(x, y, r, bobR) {
    this.origin = createVector(x, y);
    this.position = createVector();
    this.r = r;
    this.angle = PI / 2;

    this.aVelocity = 0.0;
    this.aAcceleration = 0.0;
    this.damping = 0.999; // Arbitrary value
    this.ballR = bobR;
  }

  update() {
    this.aAcceleration = ((-1 * gravity) / this.r) * sin(this.angle);
    this.aVelocity += this.aAcceleration;
    this.aVelocity *= this.damping;
    this.angle += this.aVelocity;
  }

  show() {
    this.position.set(this.r * sin(this.angle), this.r * cos(this.angle), 0);
    this.position.add(this.origin);

    stroke(252, 238, 33);
    strokeWeight(1);

    line(this.origin.x, this.origin.y, this.position.x, this.position.y);
  }
}
