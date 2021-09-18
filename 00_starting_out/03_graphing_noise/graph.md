# Graphing Perlin Noise

Our graph is made of a linier for loop, that set a x point for every pixel of the width of the canvas.

The y value is determined by perlin noise.

The noise() gives a "set" value, and don't change before the sketch i reloaded.

We can get a "smoother" graph if we use a smaller xoff, and a more "spiky" graph if xoff is higher.
