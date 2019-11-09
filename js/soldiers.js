/** Class ahhhhhhhhhhhhhhhhhh. */
class Soldiers {
    /**
     * @param  {} initial_x
     * @param  {} initial_y
     */
    constructor(initial_x, initial_y) {
        this.x = initial_x;
        this.y = initial_y;
        this.speed_x = 1;
        this.speed_y = 0;
        this.width = 100;
        this.height = 200;
        // this.attack_type = 'none';
    }

    /**
     * Get the x value.
     * @return {number} The x value.
     */
    move() {
        this.x = this.x + this.speed_x;
        this.y = this.y + this.speed_y;
    }
    /**
     * 
     * @param {*} ctx 
     */
    draw(ctx) {

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
/** @function
* @name move */
function test(){}

var soldier = new Soldiers(100, 100);
