const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5,roof;

function preload(){
	
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	roof = new Roof(500,200,450,50);
	bob1 = new Bob(800,550);
	rope1 = new Rope(bob1.body,{x:620,y:200});

	bob2 = new Bob(560,550);
	rope2 = new Rope(bob2.body,{x:560,y:200});

	bob3 = new Bob(500,550);
	rope3 = new Rope(bob3.body,{x:500,y:200});

	bob4 = new Bob(440,550);
	rope4 = new Rope(bob4.body,{x:440,y:200});

	bob5 = new Bob(380,550);
	rope5 = new Rope(bob5.body,{x:380,y:200});



	Engine.run(engine);
  
}


function draw() {
  background(0);


 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 roof.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();


 
}
function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
}



