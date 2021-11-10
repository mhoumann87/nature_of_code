let vehicle;

function setup() {
  createCanvas(400, 400);

  vehicle = new Vehicle(100, 200, 40);
}

function draw() {
  background(0);

  if (keyIsDown(LEFT_ARROW)) {
    vehicle.angle -= 0.03;
  } else if (keyIsDown(RIGHT_ARROW)) {
    vehicle.angle += 0.03;
  }

  vehicle.update();
  vehicle.edges();
  vehicle.show();
}
