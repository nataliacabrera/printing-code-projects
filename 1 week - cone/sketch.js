var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});



r.ellipse(400, 300, 300, 300)
  .fill(255)
  .stroke(0)

for ( i = 0; i < 6; i++  ){

// i = 0
// i = 1
// i = 2
// i = 3

r.triangle(r.width/3-i*40, r.height/2+i*40,
		   r.width/2, r.height-50, 
		   2*(r.width/3), r.height/2).fill(255).stroke(0)


}


r.rect(r.width/4, 2*(r.height/5), 500, 10 )
  .fill(0)
  .stroke(0)



r.draw();

r.background(0)