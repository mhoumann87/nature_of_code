/*
 * This version gives you a 25% chance to move in either direction.
 */

// Setup variables for our coordinates
let x, y;

function setup() {
  createCanvas(400, 400);
  // start in the middle of the canvas
  x = width * 0.5;
  y = height * 0.5;
  // To "keep" the tracks we draw the background only once here in setup
  background(51);
}

function draw() {
  stroke(255);
  strokeWeight(2);

  // draw a point
  point(x, y);

  // Get a random integer between 0 and 4
  const randomNum = floor(random(4));

  // Set the walk based on the random number
  switch (randomNum) {
    case 0:
      x += 1;
      break;
    case 1:
      x -= 1;
      break;
    case 2:
      y += 1;
      break;
    case 3:
      y -= 1;
      break;
  }
}
