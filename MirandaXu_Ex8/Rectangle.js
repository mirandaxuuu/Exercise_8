function Rectangle(x, y){
  this.x = x;
  this.y = y;
  this.d = 20;
  
  this.display = function(c){
    stroke(255);
    strokeWeight(1);
    fill(c);
    rect(this.x, this.y, this.d, this.d);
  }
}