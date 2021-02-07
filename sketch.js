
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, bin1, Ground1;
var world;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);
	engine = Engine.create();
	world = engine.world;
	paper=new Paper(200,450,40);
	Ground1=new ground(width/2,670,width,20);
	bin1=new Bin(1200,650);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keypressed();
  drawSprites();
 paper.display();
 Ground1.display();
 bin1.display();
}

function keypressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-5});
	}

}