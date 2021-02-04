class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");

    this.trajectory =[];
  }

  display() {
  //  this.body.position.x = mouseX;
  //  this.body.position.y = mouseY;
    super.display();

    if(this.body.velocity.x >0 && this.body.position.x >200){

    var position = [this.body.position.x , this.body.position.y ] //x and y value of the value

    this.trajectory.push(position); //[x1,y1], [x2, y2],[x3,y3]
    }
  
    for(var i=0; i < this.trajectory.length;  i++) {  
   
      image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1]);

    }

  }

}