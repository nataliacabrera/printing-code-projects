var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1200,
  debug: false

});


var radioPuntas = 300;
// make a var to make different shapes based on las puntas que tenga
var puntas = 100;
var anguloPuntas = -180/puntas;
var poly = r.polygon (r.width/2, r.height/2 - 100);

for (var i = 0; i < puntas; i++){

  var x = Math.cos(Rune.radians(i*anguloPuntas))*radioPuntas;
  var y = Math.sin(Rune.radians(i*anguloPuntas))*radioPuntas;
  poly.lineTo(x,y + Rune.random(400)); 
  poly.fill(0);


}

var wave = r.path(0, 200)
var waveNum = 200
var waveAng =  90/waveNum
var waveSize = 1000
var ranNum = Rune.random(400);
var ranNumb = Rune.random(400);

  for (var j = 0; j < waveNum; j++){

  var x = Math.cos(Rune.radians(j*waveAng))*waveSize;
  var y = Math.sin(Rune.radians(j*waveAng))*waveSize;
  wave.moveTo(x,y)
  wave.curveTo(x, y, x + ranNum, y - ranNum+ 10, x + ranNum, y + ranNum/2, x - ranNum/10, y - ranNum/10, x - ranNumb, y + ranNumb ); 

  wave.fill(0);
  
}





r.draw();
