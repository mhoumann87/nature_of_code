function setup() {
  createCanvas(400, 400);
  // background(0);
}

function draw() {
  let pos = createVector(width * 0.5, height * 0.5);
  let mouse = createVector(mouseX, mouseY);

  let v = p5.Vector.sub(mouse, pos);

  // We can use the mag() function to get the magnitude of the vector,
  // and if we divide our vector with the magnitude, we get a vector
  // that is normalized, a magnitude of 1
  // * let m = v.mag();
  // * v.div(m);

  // THe normalize() function makes all this math for us
  // * v.normalize();
  // To get a result we can see, we can use the mult() function
  // * v.mult(50);

  // But we can make it even simpler, if we want to normalize the
  // vector and multiply it with 50. we can just do this
  v.setMag(50);

  background(0);
  translate(width * 0.5, height * 0.5);
  stroke(255);
  strokeWeight(4);

  line(0, 0, v.x, v.y);
}
