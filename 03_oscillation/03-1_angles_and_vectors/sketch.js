const movers = [];
let attractor;

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < 10; i++) {
    const x = random(width);
    const y = random(height);
    const m = random(50, 150);

    movers[i] = new Mover(x, y, m);
  }

  attractor = new Attractor(width * 0.5, height * 0.5, 100);
}

function draw() {
  background(0);

  for (let mover of movers) {
    mover.update();
    mover.show();

    attractor.attract(mover);
  }

  if (mouseIsPressed) {
    attractor.pos.x = mouseX;
    attractor.pos.y = mouseY;
  }

  attractor.show();
}
