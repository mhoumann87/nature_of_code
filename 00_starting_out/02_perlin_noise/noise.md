# Perlin Noise

The same sketch as the random, but here we use the noise() function, mapped to values between 0 and the width of the canvas.

Since the noise() function works "over time", we also need to make a changing number, so we can get movement, we use the xoff variable for this.

The larger xoff is the more the movement resembles pure random, but concentrated around the center of the canvas, because that is where Perlin Noise place values.
