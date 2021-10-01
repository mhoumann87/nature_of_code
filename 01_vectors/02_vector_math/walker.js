class Walker {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(1, -1);
  }

  update() {
    // use the p5js vector function add() to add position and velocity
    this.position.add(this.velocity);
  }

  show() {
    stroke(255);
    strokeWeight(2);

    // point(this.position.x, this.position.y);

    ellipse(this.position.x, this.position.y, 10, 10);
  }
}
