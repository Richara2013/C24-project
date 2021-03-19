class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.8,
            friction:0.3,
            density:1.0
          }
         this.bodies=Bodies.circle(x,y,radius/2,options);// determining the shape of the body
         this.radius=radius/2;
          World.add(world,this.bodies);// adding the body to the world
    }


    display(){
        var pos=this.bodies.position;
        var angle=this.bodies.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius);
        pop();
    }
}