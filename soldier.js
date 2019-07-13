class Soldier {
    constructor(initialX) {
        this.x = initialX;
    }

    // movingDistance() {
    //     this.Distance = this.level
    // }
    // moveSolider() {
    //     position = this.Distancex + position;
    // }

    move() {
        this.x = this.x + 1;
    }

    draw() {
        let canvas = document.getElementById("myCanvas");
        let ctx = canvas.getContext("2d");

        ctx.beginPath()
        //沿用寬度及色彩設定
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#000000"
        ctx.fillStyle = "#13f1c3"

        ctx.rect(this.x, 700, 50, 80);
        ctx.fill()
        ctx.stroke()
    }
}