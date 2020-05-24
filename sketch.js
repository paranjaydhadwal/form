var form
var gameState=0;
var q1a,q2a,q3a,q4a;
var array1=[];
var database;
function setup(){
    createCanvas(500,900);
    form = new Form();
    database = firebase.database();

}

function draw(){
    background(255);
    //if(gameState===1){

   
      //  text("Q1",128,74);
    //}
form.display();
}

