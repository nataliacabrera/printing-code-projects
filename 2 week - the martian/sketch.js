var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});


for ( i = 0; i < 15; i++){

r.circle(r.width/2, 0, i*i*i/12)
  .fill(false)
  .stroke(255)

};


r.ellipse(r.width/2, r.height-20, 1000, 200)
 .fill(255)
 .stroke(255);

r.circle(3*r.width/4, r.height-70, 3).fill(0);


r.draw();

r.background(0)