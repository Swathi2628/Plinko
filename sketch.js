const Engine = Matter.Engine
 const World = Matter.World
  const Events = Matter.Events
   const Bodies = Matter.Bodies;

var particles= []
var plinko= []
var division= []
var divisionheight= 300
var ground

function setup() {
  createCanvas(800,800);
  engine=Engine.create()
  world=engine.world
  for(var k=0;k<=width;k=k+80)
  {division.push(new Division(k,height-divisionheight/2,10,divisionheight))}
  for (var j=75;j<=width;j=j+50)
  {plinko.push(new Plinko(j,75))}
  for (var j=50;j<=width;j=j+50)
  {plinko.push(new Plinko(j,175))}
  for (var j=75;j<=width;j=j+50)
  {plinko.push(new Plinko(j,275))}
  for (var j=50;j<=width;j=j+50)
  {plinko.push(new Plinko(j,375))}
  ground=new Ground(400,800,800,20)
}

function draw() {
  background(0);  
 Engine.update(engine)
 for(var i=0;i<plinko.length;i++)
 {plinko[i].display()}
 for(var j=0;j<division.length;i++)
 {division[j].display()}

 if(frameCount%60===0){
   particles.push(new Particles(random(width/2-30,width/2+30),10,10))
   
 }
 for(var i=0;i<particles.length;i++)
 {particles[i].display()}
 ground.display()
}