//var x = 70;
var soldierList;

function Initiail() {
    soldierList = new Array();
    run();
}

function myFun() {
    let soldier = new Soldier(70);
    soldier.draw();

    soldierList.push(soldier);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function clearCanvas() {
    var cxt = document.getElementById("myCanvas").getContext("2d");
    cxt.clearRect(0, 0, 1200, 800);

    // let canvas = document.getElementById("myCanvas");
    // canvas.width = canvas.width;
}

function processData() {
    for (let index = 0; index < soldierList.length; index++) {
        soldierList[index].move();
    }
}

function updateView() {
    clearCanvas();

    for (let index = 0; index < soldierList.length; index++) {
        soldierList[index].draw();
    }
}

function run() {
    // drawCell(circleX, circleY, circleR);
    // checkLimitAndRun(circleX, circleY, circleR, xSpeed, ySpeed);
    processData();
    updateView();

    setTimeout(run, 100);
}

Initiail();
