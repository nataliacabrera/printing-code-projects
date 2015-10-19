var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600,
  debug: false

});

r.rect(0,0, r.width, r.height)
.fill(Rune.random(255),Rune.random(255),Rune.random(255))

var myPath = r.path (r.width-200, r.height/2);
var numColors = 40;
var angle = Rune.random(-360,360) / numColors;
var radius = 250;
var backgroundColor = Rune.random(360);


for(var i = 0; i < numColors; i++) {

  var curAngle = i * angle;
  var x = Math.cos(Rune.radians(curAngle)) * radius;
  var y = Math.sin(Rune.radians(curAngle)) * radius;
  myPath.moveTo(0,0)
  myPath.curveTo(x, -y, r.width/8, r.height/2, x-600, y-200, -x, -y)
  .fill(false)
  .stroke('hsv', curAngle, 80, 90);
}




r.draw();
