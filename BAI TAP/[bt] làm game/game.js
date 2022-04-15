// khai báo canvas
let canvas = document.getElementById("gamezone");
let context = canvas.getContext("2d");
let scoreshow = document.getElementById("score")
let bayimg = new Image();
//let hinhnen= new Image();
let cantren= new Image();
let canduoi= new Image();
let hinhnen=document.getElementById('aaa')

// input image
bayimg.scr=""
//hinhnen.scr="image/hinhnen.jpeg"
cantren.scr=""
canduoi.scr=""

//input data
let score = 0;
let khoangcachhaican = 140;
let khoangcachdencanduoi;
// create object
let bay= {
    x: hinhnen.width/5,
    y: hinhnen.height/2
}
// create barrier
let can=[];
    can[0]={
        x:canvas.width,
        y:0
    }

// create function
 function run(){
        context.drawImage(hinhnen,0,0);
 }
 run();

