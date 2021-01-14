const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2

function preload(){
    poly = loadImage("polygon.png")
}




function setup(){
    var canvas = createCanvas(1800,500);
    engine = Engine.create();
    world = engine.world;
    polygon = Bodies.circle(1050,200,50,{
        restitution:1,
        density:0.5
    })
    World.add(world,polygon)

    box1 = new Box(200,450,40,40);
    box2 = new Box(240,450,40,40);
    ground = new Ground(900,480,1800,20)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    image(poly,1050,200,50,50);
}