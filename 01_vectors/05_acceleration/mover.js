class Mover {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = p5.Vector.random2D();

    // Make the velocity random too
    this.velocity.mult(random(3));

    // Newtons second law Force = Mass * Acceleration
    // Here we just work with acceleration, and are not worried by force and mass
    // Where the velocity is changing the position, acceleration are changing the
    // velocity
    // * this.acceleration = p5.Vector.random2D();
    // Decrease the "power" of the acceleration
    // * this.acceleration.setMag(0.01);
  }

  update() {
    // here we are using the mouse position to calculate the acceleration
    let mouse = createVector(mouseX, mouseY);
    this.acceleration = p5.Vector.sub(mouse, this.position);
    this.acceleration.setMag(1);

    this.velocity.add(this.acceleration);
    // Limit works just like normalize(), constrict the "speed"
    this.velocity.limit(5);

    this.position.add(this.velocity);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.position.x, this.position.y, 25, 25);
  }
}

/* class Mover {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(0.01);

    this.vel.add(this.acc);
    this.vel.limit(5);

    this.pos.add(this.vel);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, 32);
  }
}
 */
