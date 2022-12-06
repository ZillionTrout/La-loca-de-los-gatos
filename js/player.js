class Player {
    constructor(x, y, width, height) {
    this.image = userImages[0];
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    }

    moveRight() {
    this.x = this.x + 15;
    this.image = userImages[0];
    }

    moveLeft() {
        this.x = this.x - 15;
        this.image = userImages[1];
    }

    moveUp(){
        this.y = this.y - 15;
    }

    moveDown(){
        this.y = this.y + 15;
    }
}

