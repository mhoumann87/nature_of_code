class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(5);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass) * 2;

    this.angle = 0;
    this.angleVel = 0;
    this.angleAcc = 0;

    this.emitter = new Emitter(0, 0);
  }

  applyForce(force) {
    const f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    this.emitter.update();
    this.emitter.emit(5, this.vel);
  }

  show() {
    stroke(255);
    strokeWeight(2);

    push();

    translate(this.pos.x, this.pos.y);
    this.angle = this.vel.heading();
    this.emitter.show();

    push();

    rotate(this.angle);
    stroke(255);
    fill(200);
    triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);

    pop();

    pop();
  }
}
