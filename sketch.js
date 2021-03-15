const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;


    //ground = new Ground(600,height,1200,20);
 Ground1 = new Ground(390,300,250,10);
 Ground2 = new Ground(700,200,200,10);
   //level one
   block1 = new Box(300,275,30,40);
   //console.log(block1);
   block2 = new Box(330,275,30,40);
   block3 = new Box(360,275,30,40);
   block4 = new Box(390,275,30,40);
   block5 = new Box(420,275,30,40);
   block6 = new Box(450,275,30,40);
   block7 = new Box(480,275,30,40);
   //level two
   block8 = new Box(330,235,30,40);
   block9 = new Box(360,235,30,40)
   block10 = new Box(390,235,30,40);
   block11 = new Box(420,235,30,40);
   block12 = new Box(450,235,30,40);
   //level three
   block13 = new Box(360,195,30,40);
   block14 = new Box(390,195,30,40);
   block15 = new Box(420,195,30,40);
   //top
   block16 = new Box(390,155,30,40);


   //another grond
   block17 = new Box(700,195,30,40);
   block18= new Box(690,170,30,40);
   block19= new Box(690,140,30,40);
   block20 = new Box(730,190,30,40);
 
   
  bird = new Bird(200,200)

    slingshot1 = new SlingShot(bird.body,{x:200,y:100});
}

function draw(){
    background("grey");
    Engine.update(engine);
    strokeWeight(4);
    
    Ground1.display(); 
    Ground2.display()  

block1.display();
block2.display(); 
block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();  
 block17.display();
 block18.display();
 block19.display();
 block20.display();
 
 bird.display();
    
   
    slingshot1.display();    
}
function mouseDragged(){
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
slingshot1.fly()
}