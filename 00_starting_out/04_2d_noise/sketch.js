// Value used to increment the off sets
let inc = 0.01;

function setup() {
  createCanvas(200, 200);

  // for this to work on high density screens, use this function
  pixelDensity(1);
}

function draw() {
  background(51);

  let xoff = 0;
  loadPixels();

  for (let x = 0; x < width; x++) {
    let yoff = 0;
    for (let y = 0; y < height; y++) {
      let i = (x + y * width) * 4;

      // use a random value for color
      // gives static like an old tv between stations
      // const r = random(255);

      // We to get noise values and need to off set the between the loops
      const r = noise(xoff, yoff) * 255;
      // color the pixel
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
