var database;
var prota, protaIdleAn,protaRunAn, protaAtk1, protaAtk2, protaAtk3, protaAtk1An, protaAtk2An, protaAtk3An;
var trees, fences;
var background;
var monsters;
var house_Img, house, house2, house3;
var invisibleWall1,invisibleWall2,invisibleWall3,invisibleWall4
var key, keyAn;
var invisibleDoor, invisibleDoorReturn;
var houseFloor, houseFloorImg, houseWall1, houseWall2, houseWall3, houseWall4;
var wallTemp1, wallTemp2
var wall1, wall2, wall3, wall4;
var enemie;

function preload() {
  house_Img=loadImage("house1.png");
  houseFloorImg=loadImage("scenarioSprites/woodenFloor.png");

  protaRunAn=loadAnimation("protaAns/protaRun1.png","protaAns/protaRun2.png","protaAns/protaRun3.png","protaAns/protaRun4.png","protaAns/protaRun5.png","protaAns/protaRun6.png");
  protaIdleAn=loadAnimation("protaAns/protaIdle1.png","protaAns/protaIdle2.png","protaAns/protaIdle3.png");
  protaAtk1An=loadAnimation("protaAtkAns/protaAtk1.png","protaAtkAns/protaAtk2.png","protaAtkAns/protaAtk3.png","protaAtkAns/protaAtk4.png","protaAtkAns/protaAtk5.png","protaAtkAns/protaAtk6.png","protaAtkAns/protaAtk7.png","protaAtkAns/protaAtk8.png");
  //protaAtk1An.looping=false;
  protaAtk2An=loadAnimation("protaAtkAns/protaSAt1.png","protaAtkAns/protaSAt2.png","protaAtkAns/protaSAt3.png");
  //protaAtk2An.looping=false;
  protaAtk3An=loadAnimation("protaAtkAns/protaTAt1.png","protaAtkAns/protaTAt2.png","protaAtkAns/protaTAt3.png","protaAtkAns/protaTAt4.png","protaAtkAns/protaTAt5.png","protaAtkAns/protaTAt6.png");
  //protaAtk3An.looping=false;

  keyAn=loadAnimation();

}

function setup() {
  createCanvas(1600, 1600);
  //Map limits
  invisibleWall1=createSprite(800,0,1600,20);
  invisibleWall1.visible=false;  

  invisibleWall2=createSprite(0,800,20,1600);
  invisibleWall2.visible=false;

  invisibleWall3=createSprite(1600,800,20,16000);
  invisibleWall3.visible=false;

  invisibleWall4=createSprite(800,1600,1600,20);
  invisibleWall4.visible=false;

  wallTemp1=createSprite(800,800,5,1600);
  wallTemp2=createSprite(800,800,1600,5);

  //Senario one (village)
  house=new House(house_Img, 10, 50);
  house2=new House(house_Img, 110, 50);
  house3=new House(house_Img, 210, 50);

  invisibleDoor=createSprite(210,90,20,20);
  invisibleDoor.visible=false;

  //House interior
  houseFloor= new Floor(houseFloorImg, 0.2, 400, 1200, wall1,wall2,wall3,wall4);
  //houseWall1=createSprites();
  //houseWall2=createSprites();
  //houseWall3=createSprites();
  //houseWall4=createSprites();
  //Protagonist creation
  prota = createSprite(400, 400, 10, 10);
  prota.shapeColor = "blue";
  prota.addAnimation("Idle", protaIdleAn);
  prota.addAnimation("run", protaRunAn);
  prota.addAnimation("Atk1", protaAtk1An);
  prota.addAnimation("Atk2", protaAtk2An);
  prota.addAnimation("Atk3", protaAtk3An);

  enemie= new Enemie(300,300,2,3);

  //camera.x=prota.x;
  //camera.y=prota.y;
}

function draw() {
  background(rgb(160,179,70));


  prota.collide(invisibleWall1);
  prota.collide(invisibleWall2);
  prota.collide(invisibleWall3);
  prota.collide(invisibleWall4);
  prota.collide(invisibleDoor);


  if (keyIsDown(87)) {
    prota.position.y = prota.position.y - 7
    console.log("tecla");
    
  };
  if (keyIsDown(83)) {
    prota.position.y = prota.position.y + 7
    console.log("tecla");

  };
  if (keyIsDown(68)) {
    prota.position.x = prota.position.x + 7
    console.log("tecla");
  }
  if (keyIsDown(65)) {
    prota.position.x = prota.position.x - 7
    console.log("tecla");
  };

  if(mousePressed){
    console.log("x: "+mouseX+" y: "+mouseY);
  };
  
  //Protagonist interactions
  if(prota.collide(invisibleDoor)){
    prota.x=400;
    prota.y=1200;
    camera.x=400
    camera.y=1200
    camera.zoom=4
  };

  //camera.position.x=400
  //camera.position.y=400
  enemie.follow()
  drawSprites();
}

function mousePressed(){
}

function keyPressed(){
  if(keyCode===87||keyCode===83||keyCode===68||keyCode===65){
    prota.changeAnimation("run", protaRunAn);
  }
  if(keyCode===38){
    console.log(protaAtk1An.playing)
    if(protaAtk1An.playing===false){
      prota.changeAnimation("Atk1", protaAtk1An);
    }
    //setTimeout(()=>{
      //prota.changeAnimation("Idle", protaIdleAn);
  //},0800);

  }
  if(keyCode===37){
    prota.changeAnimation("Atk2", protaAtk2An);
    //setTimeout(()=>{
      //prota.changeAnimation("Idle", protaIdleAn);
  //},0800);
  }
  if(keyCode===39){
    prota.changeAnimation("Atk3", protaAtk3An);
    //setTimeout(()=>{
      //prota.changeAnimation("Idle", protaIdleAn);
  //},0800);
  }
}
function keyReleased(){
  prota.changeAnimation("Idle", protaIdleAn);
}