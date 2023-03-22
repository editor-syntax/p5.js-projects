let stick;
let gravity;

function setup() {
  createCanvas(600, 400);
  stick = new Stick(50, 50);
  gravity = createVector(0, 0.2);
}

function draw() {
  background(240);

  stick.applyForce(gravity);
  stick.update();
  stick.bounce();
  stick.display();
}

class Stick {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.width = 100;
    this.height = 10;
    this.bounceFactor = 0.9;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  bounce() {
    if (this.pos.y + this.height / 2 > height) {
      this.vel.y *= -this.bounceFactor;
      this.pos.y = height - this.height / 2;
    }
  }

  display() {
    rectMode(CENTER);
    fill(50);
    rect(this.pos.x, this.pos.y, this.width, this.height);
  }
}
