let inc = 0.01;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(51);
  noiseDetail(8, 0.2);

  loadPixels();

  let xoff = 0;

  for (let x = 0; x < width; x++) {
    let yoff = 0;
    for (let y = 0; y < height; y++) {
      let i = (x + y * width) * 4;

      const r = noise(xoff, yoff) * 255;

      pixels[i + 0] = r; // red
      pixels[i + 1] = r; // green
      pixels[i + 2] = r; // blue
      pixels[i + 3] = 255; // alpha

      yoff += inc;
    }
    xoff += inc;
  }

  updatePixels();
}
