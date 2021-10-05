class Mover {
  constructor(x, y, m) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.mass = m;
    // To see the difference between the movers, we can ude the area
    // of the circle to display the difference in "weight". To calculate the
    // area we can take the square root of the mass and use that as r. This will be very small, so we multiply it with an arbitrary value
    this.r = sqrt(this.mass) * 10;
    // Now the "bounce" will be different, but that is because they "land" at different times.
  }

  edges() {
    if (this.position.y >= height - this.r) {
      this.position.y = height - this.r;
      this.velocity.y *= -1;
    }

    if (this.position.x >= width - this.r) {
      this.position.x = width - this.r;
      this.velocity.x *= -1;
    } else if (this.position.x <= this.r) {
      this.position.x = this.r;
      this.velocity.x *= -1;
    }
  }

  applyForce(force) {
    const f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
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

    ellipse(this.position.x, this.position.y, 2 * this.r);
  }
}
