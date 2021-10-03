/*
 * Random Walker based on Lévy flight
 * https://en.wikipedia.org/wiki/L%C3%A9vy_flight
 *
 */

class Mover {
  constructor(x, y) {
    this.position = createVector(x, y);
    // We need a vector that are a copy of the "old" position
    this.previous = this.position.copy();
  }

  update() {
    // Make a random vector and use it to move
    const step = p5.Vector.random2D();
    // p5.Vector.random2D() gives you a unit vector, a normalized vector,
    // with a magnitude (length) of 1, we can multiply this magnitude with
    // the mult() function
    // * step.mult(5);
    // To imitate an object 'looking' for food, we will have it making small steps,
    // but sometimes make a big leap, to get to a new area to look for food.

    // First we pick a random number between 0 & 100
    const r = random(100);
    // Then we take a big leap if the random number is under 1, gives us a 1%
    // chance to take a big leap
    if (r < 1) {
      // we make the step length a random length
      step.mult(random(25, 100));
    } else {
      // In other cases we want the step to be 2, so we use the setMag() to so that
      step.setMag(2);
    }
    this.position.add(step);
  }

  show() {
    stroke(255, 100);
    strokeWeight(2);

    // When we are using larger steps, we need to draw a line
    // between the new position and the old position
    // point(this.position.x, this.position.y);
    line(this.position.x, this.position.y, this.previous.x, this.previous.y);
    // We have to update previous with the new position, and instead of making a new
    // vector every time we use the set() function to over write the old one
    this.previous.set(this.position);
  }
}
