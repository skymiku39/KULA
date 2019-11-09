var canvasHeight = document.getElementById("myCanvas").height;
var canvasWidth = document.getElementById("myCanvas").width;

/** @type {Soldiers} */
 var solder;

function Initiail() {
    solder = new Soldiers(200,200);
    run();
}

function clearCanvas() {
    var cxt = document.getElementById("myCanvas").getContext("2d");
    cxt.clearRect(0, 0, canvasWidth, canvasHeight);
}


function updateView() {
    clearCanvas();
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    solder.draw(ctx);

}

function processData() {
    solder.move();
}

function run() {
    processData();
    updateView();
    setTimeout(run, 10);
}

Initiail();