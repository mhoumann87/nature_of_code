class Mover {
  constructor(x, y, m) {
    this.position = createVector(x, y);
    this.velocity = p5.Vector.random2D();
    this.acceleration = createVector(0, 0);
    this.mass = m;
    this.radius = sqrt(this.mass) * 2;

    // Setup variables for the angular motion
    this.angle = 0;
    this.angelVelocity = 0;
    this.angleAcceleration = 0;
  }

  applyForce(force) {
    const f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    this.angleAcceleration = this.acceleration.y / 50.0;

    this.angelVelocity += this.angleAcceleration;
    this.angle += this.angelVelocity;

    this.acceleration.set(0, 0);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    push();
    translate(this.position.x, this.position.y);
    rotate(this.angle);
    line(0, 0, this.radius, 0);
    ellipse(0, 0, this.radius * 2);
    pop();
  }
}
