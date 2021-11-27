const emitters = [];

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  for (let emitter of emitters) {
    emitter.emit(2);
    emitter.show();
    emitter.update();
  }
}
