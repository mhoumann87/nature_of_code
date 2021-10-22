class Attractor {
  constructor(x, y, m) {
    this.position = createVector(x, y);
    this.mass = m;
    this.radius = sqrt(this.mass) * 2;
  }

  attract(mover) {
    const force = p5.Vector.sub(this.position, mover.position);
    const distanceSq = constrain(force.magSq(), 100, 1000);
    const G = 5;
    const strength = (G * (this.mass * mover.mass)) / distanceSq;
    force.setMag(strength);
    mover.applyForce(force);
  }

  show() {
    noStroke();
    fill(255, 0, 100);
    ellipse(this.position.x, this.position.y, this.radius * 2);
  }
}
