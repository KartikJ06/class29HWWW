const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint 

var engine, world; 
var polygon, slingShot; 

function setup(){
    var canvas = createCanvas(1500,700); 
    engine = Engine.create(); 
    world = engine.world;

    ground = new Ground(300,690,3000,10);
    ground2 = new Ground(600,315,200,10); 
    ground3 = new Ground(1000,315,200,10)

    box1 = new Box(530,300,30,40); 
    box2 = new Box(560,300,30,40)
    box3 = new Box(590,300,30,40)
    box4 = new Box(620,300,30,40)
    box5 = new Box(650,300,30,40)

    box6 = new Box(560,195,30,40)
    box7 = new Box(590,195,30,40)
    box8 = new Box(620,195,30,40)

    box9 = new Box(590,155,30,40)

    box10 = new Box(930,300,30,40); 
    box11 = new Box(960,300,30,40); 
    box12 = new Box(990,300,30,40); 
    box13 = new Box(1030,300,30,40); 
    box14 = new Box(1050,300,30,40); 

    box15 = new Box(960,195,30,40); 
    box16 = new Box(990,195,30,40); 
    box17 = new Box(1020,195,30,40); 

    box18 = new Box(990,155,30,40); 

    polygon =  new Polygon(200,50,20,20);    
    slingshot = new Slingshot(polygon.body,{x:200, y:50}); 
}

function draw(){
    background("purple"); 
    Engine.update(engine); 
    strokeWeight(4); 
    ground.display(); 
    ground2.display(); 
    ground3.display(); 

    box1.display(); 
    box2.display(); 
    box3.display(); 
    box4.display(); 
    box5.display(); 
    box6.display(); 
    box7.display(); 
    box8.display(); 
    box9.display(); 
    box10.display(); 
    box11.display(); 
    box12.display(); 
    box13.display(); 
    box14.display(); 
    box15.display(); 
    box16.display();
    box17.display(); 
    box18.display(); 
    polygon.display(); 
    slingshot.display(); 
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x: mouseX,y:mouseY}); 
}

function mouseReleased(){
    slingshot.fly(); 
}