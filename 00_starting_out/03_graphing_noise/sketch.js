function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  stroke(255);
  noFill();

  let xoff = 0;

  beginShape();
  for (let x = 0; x < innerWidth; x++) {
    // pure random graph
    // let y = random(height);

    let y = noise(xoff) * innerHeight;

    vertex(x, y);

    xoff += 0.01;
  }
  endShape();

  noLoop();
}
