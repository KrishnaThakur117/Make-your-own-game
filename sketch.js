const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var redball, evilbox;

function setup() {
  createCanvas(800,400);
  evilbox = new box(200,100,60,60);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}