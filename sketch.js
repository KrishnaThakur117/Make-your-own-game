const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var redball, evilbox;
var movinglog1;
var movinglog2, movinglog3;
var movinglog4,movinglog5;
var ground1,ground2,ground3;

function setup() {
  createCanvas(1800,1400);
  engine = Engine.create();
  world = engine.world;


  evilbox = new Box(200,100,60,60);
  redball = new RedBall(300,100,60,60);
  movinglog1 = new Log(400,100,100,20);
  movinglog2 = new Log(550,100,100,20);
  movinglog3 = new Log(700,100,100,20);
  movinglog4 = new Log(850,100,100,20);
  movinglog5 = new Log(1000,100,100,20);
  ground1 = new Ground(400,500,100,80);
  ground2 = new Ground(600,500,100,80);
  ground3 = new Ground(800,500,100,80);
}

function draw() {
  background("lightblue");  
  Engine.update(engine);

  evilbox.display();
  redball.display();
  movinglog1.display();
  movinglog2.display();
  movinglog3.display();
  movinglog4.display();
  movinglog5.display();
  ground1.display();
  ground2.display();
  ground3.display();
  drawSprites();
}