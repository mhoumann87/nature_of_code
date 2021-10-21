/*
 * The computer are using radians to work with trigonometry, using π to calculate the angle.
 * P5JS has constants for π PI. 180° is PI, a full circle is TWO_PI, and 90° is HALF_PI.
 */

// We set a global variable for out angle
let angle = 0;

function setup() {
  createCanvas(400, 400);
  // If you want to use degrees instead of radiance, change it this way
  // angleMode(DEGREES);
  // angleMode is by default radians, this is just for demonstration
  angleMode(RADIANS);
}

function draw() {
  background(146, 83, 161);
  noStroke();
  fill(240, 99, 164);
  // Move the focus point of a rectangle form upper left corner to the middle
  rectMode(CENTER);
  // Move the 0, 0 from top left corner to the middle of the canvas
  translate(200, 200);
  // We use the angle variable to make the rectangle spin
  rotate(angle);
  rect(0, 0, 128, 64);

  // If we use degrees, we make the angle increase by 1 (degree) every time draw is run
  // angle += 1;
  // However when we use radiance, in increment of one will make the rectangle spin very
  // fast, because 1 is 1/6 of the full circle, so it would be spinning a full circle every
  // time draw have run 6 times, so we slow it down a bit
  angle += 0.05;
}
