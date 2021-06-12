//Create variables here




var dog, happyDog; 
var database;
var  foodS, foodStock;

function preload()
{
	//load images here
  happyDog = loadImage("images/happydog(1).png")
  dog1=loadImage("images/Dog(1).png")
}

function setup() {
  database = firebase.database()
  createCanvas(500,500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dog1)
dog.scale=0.2;
   foodStock=database.ref('food')
  foodStock.on("value",readStock)
	
  
}


function draw() {  
  background(46,137,89);

if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
  
}
  drawSprites();
  //add styles here
textSize(20);
fill("white");
text("Note:press UP_ARROW key to feed drago milk",40,400)
text("food Remaining"+foodS,100,100)
}



function readStock(data){

  foodS=data.val();
}
 function writeStock(x){
   database.ref('/').update({
     food:x
  })
     
 }

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
x=x-1;
    }
 database.ref('/').update({
    food:x
 })
  
}
