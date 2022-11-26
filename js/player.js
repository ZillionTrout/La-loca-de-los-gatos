class Player {
    constructor(x, y, width, height) {
    this.image = user;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    }

    moveRight() {
    this.x = this.x + 15;
    if (this.x > 1000) {
        this.x = 0 - this.width;
        }
    }

    moveLeft() {
        this.x = this.x - 15;
        if (this.x + this.width < 0) {
        this.x = 1000;
        }
    }

    moveTop(){
        this.y = this.y + 15;
        if (this.y + this.height <0) {
            this.y = 1000;
        }
    }

    moveBottom(){
        this.y = this.y - 15;
        if (this.y + this.height >0) {
            this.y = 1000;
        }
    }
}