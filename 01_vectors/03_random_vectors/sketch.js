function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  //background(0);
  // "Move" 0, 0  from left top corner to center
  translate(width * 0.5, height * 0.5);

  // If we use random values for x and y, we get a square as a result,
  // because both the direction and the magnitude are random,
  // let v = createVector(random(-100, 100), random(-100, 100));

  // The vector unit are a vector with the length of 1 in any direction by default,
  // we use that when we don't care about magnitude and concentrate on direction.
  // There are a built in function in p5js that let us create a random unit vector
  v = p5.Vector.random2D();
  // This give us a tiny circle in the middle of the screen, and we can't actually see
  // anything because the length are 1px. We can use the mult() multiply function in p5
  // and we can also make it random, by using the random function.
  v.mult(random(0, 100));

  strokeWeight(4);
  // last number is the alfa value
  stroke(255, 50);

  line(0, 0, v.x, v.y);
}
