let pendulum;

function setup() {
  createCanvas(640, 300);

  pendulum = new Pendulum(width * 0.5, 0, 175);
}

function draw() {
  background(0);
  pendulum.update();
  pendulum.show();
}
