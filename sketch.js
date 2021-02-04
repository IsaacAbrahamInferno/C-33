const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,pf;
var Constraintlog;
var score =0;


var gameState = "Onsling";

function preload() {
    getBackgroundImage();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    bird = new Bird(100,100);
    Constraintlog = new Log(230,180,180,PI/2);
    slingshot1= new slingshot(bird.body,{x:200,y:50});
    ground = new Ground(600,height,1200,20);
    pf = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

   
   


    }


function draw(){
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    text("score"+score,1000,100);
   // console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    pf.display();
    slingshot1.display();

}



function mouseDragged(){
   // if(gameState = "launched"){
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
    // }
}

function mouseReleased(){
    gameState = "launched";
    slingshot1.fly();

}

function keyPressed() {
    if(keyCode ===32){
    bird.trajectory=[]; 
   Matter.Body.setPosition(bird.body,{x:200,y:50})
    slingshot1.attach(bird.body);
    }
} 
    

//async await
async function getBackgroundImage(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
var json1 = await response.json();

var hour = 20//json1.datetime.slice(11,13); //11th includes 13th exclues      //      2021-02-02T14:11:23.950700+05:30
if (hour>=06 && hour<=19){
    bg = "sprites/bg.png"
}
else bg="sprites/bg2.jpg"

backgroundImg = loadImage(bg);
}
