/*
 * The spaceship from the old asteroid game
 *
 * Turn Left: Left Arrow
 * Turn Right: Right Arrow
 * Thrust: z
 */

let ship;

function setup() {
  createCanvas(640, 360);
  ship = new Spaceship();
}

function draw() {
  background(0);

  // update location
  ship.update();
  // Wrap edges
  ship.wrapEdges();
  // draw ship
  ship.display();

  // turn or thrust the ship depending on what key is pressed
  // 90 is the key code for 'z' or 'Z'
  if (keyIsDown(LEFT_ARROW)) {
    ship.turn(-0.03);
  } else if (keyIsDown(RIGHT_ARROW)) {
    ship.turn(0.03);
  } else if (keyIsDown(90)) {
    ship.thrust();
  }
}
