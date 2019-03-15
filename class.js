//Jorge Eduardo Garza Santos #1656765 Persepcion N6
class Pelotas {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.xvel = random(1, 4);
    this.yvel = random(1, 4);
  }

  show() {
    ellipse(this.x, this.y, 20, 20);
    fill(this.r, this.g, this.b);
  }

  mover() {
    this.x = this.x + this.xvel;
    this.y = this.y + this.yvel;
  }

  xrebote() {
    if (this.x < 10 || this.x > width) {
      this.xvel = this.xvel * -1;
    }
  }
  yrebote() {
    if (this.y < 0 || this.y > height) {
      this.yvel = this.yvel * -1;
    }
  }


}
