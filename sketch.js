var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;
var feed, lastFed;
var database
var positition

//create feed and lastFed variable here


function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodS=database.ref('Food');
  foodS.on("value",readPosition,showError);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=
  createButton("Feed Dog");
  feed.position(900,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  foodObj.display();

  
  var food_stock_val = foodObj.getFoodStock();
  if(food_stock_val <= 0){
   foodObj.updateFoodStock(food_stock_val *0);
  }else{
   foodObj.updateFoodStock(food_stock_val -1)
  }
  //write code to read fedtime value from the database 
  
 
  //write code to display text lastFed time here
text("Last Feed:")

  drawSprites();
}

//function to read food Stock
function readPosition(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}

function showError(){
  console.log("Error in writing to the database");
}

function lastFeed(){
  if(lastFed>=12){

  }else if(LastFed==0){
    text("Last Fed: 12 AM", 350,30);
  }else{

  }
}

function updateFoodStock(){
  database.ref("/").update()

}

function feedDog(){
  dog.addImage(happyDog);
  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  database.ref("/").update({
    Food:foodObj.getFoodStock(),
    FeedTime: hour()
  })
}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}

