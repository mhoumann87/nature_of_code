class Walker {
  constructor(x, y) {
    this.position = createVector(x, y);
  }

  update() {
    this.position.x = this.position.x + random(-1, 1);
    this.position.y = this.position.y + random(-1, 1);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    point(this.position.x, this.position.y);
  }
}
