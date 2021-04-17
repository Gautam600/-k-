

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var divisions=[];
var divisionHeight=300;
var particles=[];
var plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8,plinko9,plimko10,plinko11,plimko12;

function setup() {
  createCanvas(600,800);
  
	engine = Engine.create();
	world = engine.world;
  ground=new Ground(400,800,400,20);
 plinko1=new Plinko(80,100,1);
 plinko2=new Plinko(160,100,1);
 plinko3=new Plinko(240,100,1);
 plinko4=new Plinko(320,100,1);
 plinko5=new Plinko(400,100,1);
 plinko6=new Plinko(480,100,1);
 plinko7=new Plinko(90,300,1);
 plinko8=new Plinko(180,300,1);
 plinko9=new Plinko(270,300,1);
 plinko10=new Plinko(360,300,1);
 plinko11=new Plinko(450,300,1)
for (var k=0; k<=width; k=k+80){
  divisions.push(new Division(k,height- divisionHeight/2,10,divisionHeight));
}
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}
}

function draw() {
  background(2,55,205);  
  for(var k=0; k<divisions.length;k++){
    divisions[k].display();
  }
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }
 plinko1.display();
 plinko4.display();
 plinko2.display();
 plinko3.display();
 plinko5.display();
 plinko6.display();
 plinko7.display();
 plinko8.display();
 plinko9.display();
 plinko10.display();
 plinko11.display();
   ground.display();
  drawSprites();
}