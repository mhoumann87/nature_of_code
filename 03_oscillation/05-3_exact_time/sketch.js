let angle = 0;
let angleV = 0;

let saveTime = 0;
const period = 1000;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  translate(width / 2, height / 3);
  fill(252, 238, 33);

  //noLoop();

  angle = (TWO_PI * (millis() % period)) / period;
  //console.log(angle);

  const r = map(sin(angle), -1, 1, 0, height / 3);
  circle(0, 0, r * 2);

  fill(255);
  textFont('Courier');
  textSize(64);
  textAlign(CENTER, CENTER);

  const seconds = floor(millis() / 1000);
  const sec = floor(seconds % 60);
  const min = floor(seconds / 60);

  text(`${nf(min, 2)}:${nf(sec, 2)}`, 0, height / 2);
}
