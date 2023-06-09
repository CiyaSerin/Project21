
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
let wall1,wall2,wall3;
let ball;

function preload()
{
	
}

function setup() {
	createCanvas(600, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options= {
		isStactic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,100,20,ball_options);
 	World.add(world,ball);

	wall1 = new Wall(200,390,600,20);
	wall2 = new Wall(width/2,670,width,20);
	wall3 = new Wall(1100,600,20,120);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ellipse(ball.position.x,ball.position.y,40)
  wall1.display();
  wall2.display();
  wall3.display();

  
 
}



