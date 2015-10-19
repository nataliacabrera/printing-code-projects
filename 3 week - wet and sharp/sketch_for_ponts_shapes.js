var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});


var radio = 100;
// make a var to make different shapes based on las puntas que tenga
var puntas = 5;
var angulo = 360/puntas;
var poly = r.polygon (r.width/2, r.height/2);

for (var i = 0; i < puntas; i++){

  var x = Math.cos(Rune.radians(i*angulo))*radio;
  var y = Math.sin(Rune.radians(i*angulo))*radio;
  poly.lineTo(x,y);


}

r.draw();
