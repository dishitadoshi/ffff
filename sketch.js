
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var object1,object2,object3,object4,object5;
var roof;
var rope1,rope2,rope3,rop4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,200,500,50);
	
	object1 = new Bob(400,450,100);
	object2 = new Bob(500,450,100);
	object3 = new Bob(600,450,100);
	object4 = new Bob(200,450,100);
	object5 = new Bob(300,450,100);
	rope1 = new Rope(object1.body,roof.body,0,0);
	rope2 = new Rope(object2.body,roof.body,100,0);
	rope3 = new Rope(object3.body,roof.body,200,0);
	rope4 = new Rope(object4.body,roof.body,-200,0);
	rope5 = new Rope(object5.body,roof.body,-100,0);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  
  drawSprites();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  object1.display();
  object2.display();
  object3.display();
  object4.display();
  object5.display();
  keyPressed() 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		
	   Matter.Body.applyForce(object3.body,object3.body.position,{x:300,y:-250},PI/2);
	   
	 }
   }
   
