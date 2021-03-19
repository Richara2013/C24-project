class Ground{


    constructor(x,y,width,height){
        var g={
            isStatic:true
          }
          this.ground=Bodies.rectangle(x,y,width,height,g);
         this.width=width;
         this.height=height;
          World.add(world,this.ground);

}


display(){
    var pos=this.ground.position;
rectMode(CENTER);
fill("pink");
rect(pos.x,pos.y,this.width,this.height);

}

}