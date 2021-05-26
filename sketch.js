
var ball,trashl,trashr,trashd;
var floore;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
}
function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(800, 700,10,20);
floore=new Ground(400,680,800,20);  
trashr=new Trash(550,620,20,100);
trashl=new Trash(610,660,100,20);
trashd=new Trash(670,620,20,100);	
 ball=new Ball(100,600,10)   
  
    //Create the Bodies Here.
	Engine.run(engine);
	
}

function draw(){
	rectMode(CENTER);
	background("black");
	Engine.update(engine);
	trashr.display();
	trashl.display();
	trashd.display();
	floore.display();
	ball.display();
	
	drawSprites();	
     
} 
   function keyPressed(){
	   if(keyCode===DOWN_ARROW){
       Matter.Body.applyForce(ball.body ,ball.body.position,{x:15,y:-15})
       
	   
	   }
   }

