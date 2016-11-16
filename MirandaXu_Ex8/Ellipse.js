function Ellipse(x, y){
  this.x = x;
  this.y = y;
  this.d = 25;
  
  this.display = function(c){
    stroke(255);
    strokeWeight(1);
    fill(c);
    ellipse(this.x, this.y, this.d, this.d);
  }
}