const penduls = [];
const spacing = 10;
const gravity = -0.25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  const total = floor(height / spacing);

  for (let i = 0; i < total; i++) {
    penduls[i] = new Pendulum(
      width / 2,
      height,
      spacing + i * spacing,
      spacing
    );
  }
}

function draw() {
  background(112, 50, 120, 10);

  for (let pendul of penduls) {
    pendul.update();
    pendul.show();
  }
}
