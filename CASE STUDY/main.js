
// khai bao
let canvas= document.getElementById('gamezone');
let context= canvas.getContext('2d');
let scoreshow=document.getElementById('score');

let ericimg= new Image();
let hinhnen= new Image();
let cottren= new Image();
let cotduoi= new Image();
ericimg.src="bay.png";
hinhnen.src="hinhnen.png";
cottren.src="cottren.png";
cotduoi.src="cotduoi.png";

// input hinh nen
let score=0;
let khoangcachhaicot=300;
let khoangcachdencotduoi;

let eric ={
    x: hinhnen.width/5,
    y: hinhnen.height/2
}
let cot=[];
cot[0]={
    x:canvas.width,
    y:0
}

// input function
function run() {
    context.drawImage(hinhnen, 0, 0);
    context.drawImage(ericimg, eric.x, eric.y);

    for (let i = 0; i < cot.length; i++) {
        khoangcachdencotduoi = cottren.height + khoangcachhaicot;
        context.drawImage(cottren, cot[i].x, cot[i].y);
        context.drawImage(cotduoi, cot[i].x, cot[i].y + khoangcachdencotduoi);
        cot[i].x -= 2;
        if (cot[i].x == canvas.width / 2) {
            cot.push({
                x: canvas.width,
                y: Math.floor(Math.random() * cottren.height) - cottren.height
            })
        }
        if (cot[i].x == 0) cot.splice(0, 1);
        if (cot[i].x == eric.x) score++;
        //end game
        if (eric.y + ericimg.height == canvas.height ||
            eric.x-15 + ericimg.width >= cot[i].x && eric.x <= cot[i].x + cottren.width
            && (eric.y+10 <= cot[i].y + cottren.height ||
                eric.y-15 + ericimg.height >= cot[i].y + khoangcachdencotduoi)
        ) {
            return;
        }
    }
    scoreshow.innerHTML = "score: " + score;
    // cho eric rơi xuống
    eric.y += 1;
    requestAnimationFrame(run);
}
//function click
document.addEventListener("keydown",function(){
    eric.y-=40;
})
run();
