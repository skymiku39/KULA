//var x = 70;
var alliesSoldierList;
var enemySoldierList;
var time = 0;
var canvasHeight = document.getElementById("myCanvas").height;
var canvasWidth = document.getElementById("myCanvas").width;



function Initiail() {
    alliesSoldierList = new Array();
    enemySoldierList = new Array();
    run();
}

function alliesSoldier() {
    let soldier = new Soldier(70, 700, 50, 80);
    soldier.draw();

    alliesSoldierList.push(soldier);
}

function rightSoldier() {
    let soldier = new Soldier(1130, 700, 50, 80);
    soldier.speed = -2;
    soldier.draw();

    enemySoldierList.push(soldier);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function clearCanvas() {
    var cxt = document.getElementById("myCanvas").getContext("2d");
    cxt.clearRect(0, 0, canvasWidth, canvasHeight);

    // let canvas = document.getElementById("myCanvas");
    // canvas.width = canvas.width;
}

function processData() {
    var alliesBattleLine = 0
    var enemyBattleLine = canvasWidth
    var battleLine
    //確認友軍最遠預判座標(X+寬+下次移動距離)
    for (let index = 0; index < alliesSoldierList.length; index++) {
        let PredictedPosition = alliesSoldierList[index].speed + alliesSoldierList[index].x + alliesSoldierList[index].width;
        if (PredictedPosition > alliesBattleLine) {
            alliesBattleLine = PredictedPosition;
        }
    }
    //確認敵軍最遠預判座標(X+下次移動距離)
    for (let index = 0; index < enemySoldierList.length; index++) {
        let PredictedPosition = enemySoldierList[index].speed + enemySoldierList[index].x;
        if (PredictedPosition < enemyBattleLine) {
            enemyBattleLine = PredictedPosition;
        }
    }
    //比較雙方戰線位置
    if (enemyBattleLine < alliesBattleLine) {
        //戰線重疊，取中點
        battleLine = (enemyBattleLine + alliesBattleLine) / 2;
    }

    //移動士兵
    for (let index = 0; index < alliesSoldierList.length; index++) {
        alliesSoldierList[index].move();
    }
    for (let index = 0; index < enemySoldierList.length; index++) {
        enemySoldierList[index].move();
    }
    //刪除友軍碰到邊界士兵
    for (let index = 0; index < alliesSoldierList.length; index++) {
        //左邊界_友軍
        if (alliesSoldierList[index].x + alliesSoldierList[index].width < 0) {
            alliesSoldierList.splice(index, 1)
        }
        //右邊界_友軍
        if (alliesSoldierList[index].x + alliesSoldierList[index].width > canvasWidth) {
            alliesSoldierList.splice(index, 1)
        }
    }
    //刪除敵軍碰到邊界士兵
    for (let index = 0; index < enemySoldierList.length; index++) {
        //左邊界_敵軍
        if (enemySoldierList[index].x < 0) {
            enemySoldierList.splice(index, 1)
        }
        //右邊界_敵軍
        if (enemySoldierList[index].x > canvasWidth) {
            enemySoldierList.splice(index, 1)

        }
    }
    //產生敵方士兵
    if (time % 50 == 0) {
        rightSoldier();
    }



}

function updateView() {
    clearCanvas();

    for (let index = 0; index < alliesSoldierList.length; index++) {
        alliesSoldierList[index].draw();
    }
    for (let index = 0; index < enemySoldierList.length; index++) {
        enemySoldierList[index].draw();
    }
}

function run() {
    // drawCell(circleX, circleY, circleR);
    // checkLimitAndRun(circleX, circleY, circleR, xSpeed, ySpeed);
    processData();
    updateView();
    time++;
    setTimeout(run, 10);
}

Initiail();
