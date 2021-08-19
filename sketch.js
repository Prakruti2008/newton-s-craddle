const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball;
var ball1;
var ball2;
var ball3;
var ball4;
var con,con1;
var con2,con3,con4;
function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	ball=Bodies.circle(400,100,20);
	World.add(world,ball)

	ball1=Bodies.circle(400,100,20);
	World.add(world,ball1)

	ball2=Bodies.circle(400,100,20);
	World.add(world,ball2)

	ball3=Bodies.circle(400,100,20);
	World.add(world,ball3)

	ball4=Bodies.circle(400,100,20);
	World.add(world,ball4)

	con = Matter.Constraint.create({
		pointA:{x:300,y:100},
		bodyB:ball,
		length:200,
		stiffness:0.01
	  });
	  World.add(world,con);
    con1 =Matter.Constraint.create({
		pointA:{x:340,y:100},
   		bodyB:ball1,
		length:230,
		stiffness:0.01
})
	World.add(world,con1);
	con2 =Matter.Constraint.create({
		pointA:{x:380,y:100},
		bodyB:ball2,
	 	length:260,
	 	stiffness:0.01
})
 World.add(world,con2);
 
    con3 =Matter.Constraint.create({
	 	pointA:{x:420,y:100},
	 	bodyB:ball3,
	  	length:290,
	  	stiffness:1
})
World.add(world,con3);
      
	con4 =Matter.Constraint.create({
		pointA:{x:460,y:100},
		bodyB:ball4,
		length:320,
	 	stiffness:1
})
World.add(world,con4);
    	
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("blue");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
 
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.x,20)
  ellipse(ball1.position.x,ball1.position.x,20)
  ellipse(ball2.position.x,ball2.position.x,20)
  ellipse(ball3.position.x,ball3.position.x,20)
  ellipse(ball4.position.x,ball4.position.x,20)
   
  push();
  strokeWeight(2);
  stroke(225);
   fill("black")
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(con1.pointA.x,con1.pointA.y,ball1.position.x,ball1.position.y);
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y);
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y);
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode==RIGHT_ARROW){
	Matter.Body.applyforce(ball,{x:0,Y:0},{x:0.05,y:0})
}
}