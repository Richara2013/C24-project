class DUSTbin{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.8,
            friction:0.3,
            density:1.0
          }
         this.bodies=Bodies.rectangle(x,y,width,height,options);// determining the shape of the body
         this.width=width;
         this.height=height;
          World.add(world,this.bodies);// adding the body to the world
    }


    display(){
        var pos=this.bodies.position;
        var angle=this.bodies.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
    }
}