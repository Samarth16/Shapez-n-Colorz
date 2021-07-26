
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var player;
var wall1 , wall2 , wall3 ;
var box1 , box2 , box3 , box4;
var bob1;


function setup() {
	createCanvas(800, 1000);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("gray");

  //player = new Player(40,30,50);

  player = createSprite(40,30,10,50);


  divider1 = new Wall(185,180,30,10);

  
  wall1 = new Wall(90,150,20,300);
  wall2 = new Wall(90,650,20,450);

  
  wall3 = new Wall(270,140,20,140);

  
  wall4 = new Wall(350,515,20,310);
  wall5 = new Wall(310,680,100,20);

  
  wall6 = new Wall(460,410,20,1000);

  
  wall7 = new Wall(510,400,110,20);
  wall8 = new Wall(510,700,110,20); 


  wall9 = new Wall(750,700,100,20);
  wall10 = new Wall(700,800,280,20);


  
  box1 = new Box(264,30,168,80);
  box2 = new Box(220,320,80,80);
  box3 = new Box(220,510,80,80);
  box4 = new Box(220,840,80,340);

  
  box5 = new Box(300,240,80,80);

  
  box6 = new Box(510,90,80,180);

  box7 = new Box(595,560,80,80);

  box8 = new Box(760,460,80,80);


  //Door 1()
  door1T = new Door(90,320,10,50);
  door1B = new Door(90,400,10,50);

  //Door 2()
  door2T = new Door(90,900,10,50);
  door2B = new Door(90,980,10,50);

  //Door 3()
  door3T = new Door(185,90,10,50);
  door3B = new Door(185,160,10,50);

  //Door 4()
  door4T = new Door(185,200,10,50);
  door4B = new Door(185,270,10,50);

  //Door 5()
  door5T = new Door(185,380,10,50);
  door5B = new Door(185,450,10,50);

  //Door 6()
  door6T = new Door(185,575,10,50);
  door6B = new Door(185,645,10,50);

  //Door 7()
  door7T = new Door(340,355,40,10);
  door7B = new Door(280,355,40,10);

  //Door 8()
  door8T = new Door(428,65,40,10);
  door8B = new Door(370,65,40,10);

  //Door 9()
  door9T = new Door(428,355,40,10);
  door9B = new Door(370,355,40,10);

  //Door 10()
  door10T = new Door(460,930,10,40);
  door10B = new Door(460,985,10,40);

  //Door 11()
  door11T = new Door(700,85,50,10);
  door11B = new Door(780,85,50,10);

  //Door 12()
  door12T = new Door(680,15,10,30);
  door12B = new Door(680,70,10,40);
  
  //Door 13()
  door13T = new Door(560,320,10,40);
  door13B = new Door(560,375,10,40);

  //Door 14()
  door14T = new Door(485,300,30,10);
  door14B = new Door(545,300,40,10);

  //Door 15()
  door15T = new Door(560,615,10,40);
  door15B = new Door(560,680,10,40);

  //Door 16()
  door16T = new Door(670,595,80,10);
  door16B = new Door(770,595,80,10);
  
  //Door 17()
  door17T = new Door(705,720,10,30);
  door17B = new Door(705,780,10,40);

  //Door 18()
  door18T = new Door(565,835,10,90);
  door18B = new Door(565,970,10,100);

  







  

  
  drawSprites();
 
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();

  door1T.display();
  door1B.display();
  door2T.display();
  door2B.display();
  door3T.display();
  door3B.display();
  door4T.display();
  door4B.display();
  door5T.display();
  door5B.display();
  door6T.display();
  door6B.display();
  door7T.display();
  door7B.display();
  door8T.display();
  door8B.display();
  door9T.display();
  door9B.display();
  door10T.display();
  door10B.display();
  door11T.display();
  door11B.display();
  door12T.display();
  door12B.display();
  door13T.display();
  door13B.display();  
  door14T.display();
  door14B.display();
  door15T.display();
  door15B.display();
  door16T.display();
  door16B.display();
  door17T.display();
  door17B.display();
  door18T.display();
  door18B.display();

  player.display();

  divider1.display();

  mouseDragged();

}


function mouseDragged() {
 // Matter.Body.setPosition(player.body, { x: mouseX, y: mouseY });
}