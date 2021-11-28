class Emitter {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.particles = [];
    this.color = color(255, 0, 0);
  }

  emit(num, vel) {
    for (let i = 0; i < num; i++) {
      this.particles.push(
        new Particle(this.position.x, this.position.y, this.color, vel)
      );
    }
  }

  update() {
    for (let particle of this.particles) {
      particle.update();
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      if (this.particles[i].finished()) {
        this.particles.splice(i, 1);
      }
    }
  }

  show() {
    for (let particle of this.particles) {
      particle.show();
    }
  }
}
