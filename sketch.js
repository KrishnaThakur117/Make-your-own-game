const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var redball, evilbox;
var movinglog1;
var movinglog2; 
var ground1,ground2,ground3;

function setup() {
  createCanvas(1250,550);
  engine = Engine.create();
  world = engine.world;


  evilbox = new Box(650,200,60,60);
  redball = new RedBall(40,200,60,60);
  movinglog1 = new Log(255,200,100,20);
  movinglog2 = new Log(880,200,100,20);
  ground1 = new Ground(10,400,300,400);
  ground2 = new Ground(625,400,300,400);
  ground3 = new Ground(1240,400,300,400);
}

function draw() {
  background("lightblue");  
  Engine.update(engine);

  evilbox.display();
  redball.display();
  movinglog1.display();
  movinglog2.display();
  ground1.display();
  ground2.display();
  ground3.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(redball.body,{x:40,y:100})
  }
}