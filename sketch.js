
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

var world, engine, canvas;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;
var mConstraint;

function preload()
{
	
}

function setup() {
	canvas=createCanvas(windowWidth,windowHeight);
	engine = Engine.create();
	world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  }
  mConstraint = MouseConstraint.create(engine,options);
  World.add(world, mConstraint);

	//Creating the Bodies .
	pendulum1 = new pendulum(500,500,"red");
	pendulum2 = new pendulum(550,500,"blue");
	pendulum3 = new pendulum(600,500,"lime");
	pendulum4 = new pendulum(650,500,"yellow");
	pendulum5 = new pendulum(700,500,"purple");
	sling1 = new sling(pendulum1.body,{x:500,y:450});
	sling2 = new sling(pendulum2.body,{x:550,y:450});
	sling3 = new sling(pendulum3.body,{x:600,y:450});
	sling4 = new sling(pendulum4.body,{x:650,y:450});
	sling5 = new sling(pendulum5.body,{x:700,y:450});

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  drawSprites();

 
}

function mouseDragged() 
{
  Matter.Body.setPosition( pendulum1.body,{ x: mouseX, y: mouseY});
}













