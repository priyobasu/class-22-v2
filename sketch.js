const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var box_options ={
        isStatic: true
    }

  box    = Bodies.rectangle(200,200,50,50,box_options);
    World.add(world,box);

    
   

    
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(box.position.x,box.position.y,50,50);

   
}