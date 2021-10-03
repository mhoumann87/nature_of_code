class Mover {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.r = 16;
  }

  // We make a function that implements Newtons Second Law
  // We skip the Mass part, as we decide mass = 1
  applyForce(force) {
    this.acceleration.add(force);
  }

  edges() {
    // To prevent out mover disappears from canvas, we can make some restraints along
    // the edges of the canvas

    // if the mover gets to the bottom of the canvas we inverse the direction by making
    // velocity negative;
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

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    // Unless we add a force it should be 0
    this.acceleration.set(0, 0);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);

    ellipse(this.position.x, this.position.y, this.r * 2);
  }
}
