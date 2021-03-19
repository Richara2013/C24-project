var d1, d2, d3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);

    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    d1= new DUSTbin(550,390,150,10);
	d2= new DUSTbin(630,370,10,100);
	d3= new DUSTbin(480,370,10,100);

    ground= new Ground(400,height,800,10);

	paper= new Paper(100,10,40);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  d1.display();
  d2.display();
  d3.display();
  paper.display();
  ground.display();
 
}

function keyPressed(){
   if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(paper.bodies, paper.bodies.position,{
		   x:20,
		   y:-20
	   });
   }
}


