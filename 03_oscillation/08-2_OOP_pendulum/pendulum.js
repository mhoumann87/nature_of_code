class Pendulum {
  constructor(x, y, r) {
    this.origin = createVector(x, y);
    this.position = createVector();
    this.r = r;
    this.angle = PI / 4;

    this.angleVelocity = 0.0;
    this.angleAcceleration = 0.0;
    this.damping = 1; // arbitrary damping "force", does nothing at value 1
    this.ballR = 48.0;
  }

  update() {
    const gravity = 0.4;
    this.angleAcceleration = ((-1 * gravity) / this.r) * sin(this.angle);
    this.angleVelocity += this.angleAcceleration;
    this.angleVelocity *= this.damping;
    this.angle += this.angleVelocity;
  }

  show() {
    this.position.set(this.r * sin(this.angle), this.r * cos(this.angle), 0);
    this.position.add(this.origin);

    stroke(255);
    strokeWeight(2);

    line(this.origin.x, this.origin.y, this.position.x, this.position.y);
    ellipseMode(CENTER);

    fill(127);

    ellipse(this.position.x, this.position.y, this.ballR, this.ballR);
  }
}
