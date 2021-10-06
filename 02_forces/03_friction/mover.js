/*
 * Friction force are calculated with these elements
 *   -1: the friction works in the other direction of the velocity (scalar)
 *   mu: coefficient of friction (scalar) the strength of friction force based on what    material it is, here we decide, but this is also used in real life
 *   N: the Normal force (scalar) the magnitude of the force between the two surfaces "rubbing" together, the stronger normal force, the stronger the friction
 *   v: velocity unit vector, the "speed" of the friction, whemn multiplied with -1 it is working against the objects velocity
 */
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

  friction(mu) {
    // First we check to see how far the object is from the bottom
    const diff = height - (this.position.y + this.r);
    // If the difference in less than 1 px, we will apply the friction force
    if (diff < 1) {
      // * console.log('friction');

      // First we make a "copy" of the velocity vector
      let friction = this.velocity.copy();
      // Then we normalize is and make a unit vector
      friction.normalize();
      // And we reverse the direction
      friction.mult(-1);

      // Calculate the normal force based on mass
      const normal = this.mass;
      // Set the magnitude based on mu and normal
      friction.setMag(mu * normal);

      // And finally add the friction to the object
      this.applyForce(friction);
    }
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
