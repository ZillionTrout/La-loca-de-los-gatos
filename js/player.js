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
    }

    moveLeft() {
        this.x = this.x - 15;
    }

    moveTop(){
        this.y = this.y - 15;
    }

    moveBottom(){
        this.y = this.y + 15;
    }
}
