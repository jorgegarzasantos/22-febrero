//Jorge Eduardo Garza Santos #1656765 Persepcion N6
var p = [];

function setup() {
  createCanvas(500, 400);
  for (var i = 0; i <= 150; i++) {
    p[i] = new Pelotas();
  }
}

function draw() {
  background(220);
  for (var i = 0; i <= 150; i++) {
    p[i].show();
    p[i].mover();
    p[i].xrebote();
    p[i].yrebote();

  }

}
