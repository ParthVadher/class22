const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world,ground,ball






function setup(){
  createCanvas(400,400)
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,50,50,options);
  World.add(world,ground);
  var opt={
    restitution:1.8,
    friction:0.4,
    density:1

  }
  ball=Bodies.circle(200,200,20,opt)
  World.add(world,ball);
  

  }
  
  function draw(){
  background(240,209,10)
  Engine.update(engine);
  fill("blue")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
  fill("red")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,25,30)
  console.log(ball.position.y)
  }