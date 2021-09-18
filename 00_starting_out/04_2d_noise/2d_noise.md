# 2D Perlin Noise

We are working with the P5js pixel array ([watch a video here](https://www.youtube.com/watch?v=nMUMZ5YRxHI)).

To get to every pixel in the array, we use a nested for loop (for every x goto every y), but there are 4 values for every pixel (red, green, blue, alpha), so we have to multiply with 4 to get every single pixel.

So to get to every pixel, we add x and y and multiply that with the width of the canvas, and to get to the pixel, we multiply that with 4.

```
for (let x = 0; x < width; x++) {
  for (let y = 0; y < height; y++) {
    // To get to the pixel we use this equation
    let index = (x + y * width) * 4
  }
}

```

If wi color the pixels with a random r, g, b color, we get something that looks like the static, seen on old tube tvs between stations.

How ever if we use a single noise value, with a incrementing xoff, we get "streks" up and down the canvas. The pixels are getting a noise value close to what is above them, but they "don't know" about what is to their left and right.

We need a yoff to make them "aware" of that, but we need the xoff to be inside the loop, because they should reset every time we get to the end of the line.

So every time we have a x value, we fill in every y value, and then shift to the next x.

Again the higher we make the increment the closer we get to pure randomness.
