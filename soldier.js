class Soldier {
    constructor(initialX, initialY, width, height) {
        this.x = initialX;
        this.y = initialY;
        this.width = width;
        this.height = height;
        this.speed = 1;


    }

    // movingDistance() {
    //     this.Distance = this.level
    // }
    // moveSolider() {
    //     position = this.Distancex + position;
    // }

    move() {
        this.x = this.x + this.speed;
    }

    draw() {
        let canvas = document.getElementById("myCanvas");
        let ctx = canvas.getContext("2d");

        ctx.beginPath()
        //沿用寬度及色彩設定
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#000000"
        ctx.fillStyle = "#13f1c3"

        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill()
        ctx.stroke()
    }
}