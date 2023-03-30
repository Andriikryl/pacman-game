const canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

class Boudary {
  constructor({ position }) {
    this.position = position;
    this.width = 40;
    this.height = 40;
  }

  draw() {
    c.fillStyle = "blue";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const map = [
  ["-", "-", "-", "-", "-", "-"],
  ["-", " ", " ", " ", " ", "-"],
  ["-", " ", " ", " ", " ", "-"],
  ["-", "-", "-", "-", "-", "-"],
];

const boundaries = [];

map.forEach((row) => {
  row.forEach((symbol) => {
    switch (symbol) {
      case "-":
        boundaries.push(new Boudary({ position: { x: 0, y: 0 } }));
        break;
    }
  });
});

boundaries.forEach((boundary) => {
  boundary.draw();
});
