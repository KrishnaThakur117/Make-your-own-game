const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var redball, evilbox;
var movinglog1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  evilbox = new Box(200,100,60,60);
  redball = new RedBall(300,100,60,60);
  movinglog1 = new Log(400,100,100,20);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  evilbox.display();
  redball.display();
  movinglog1.display();
  drawSprites();
}