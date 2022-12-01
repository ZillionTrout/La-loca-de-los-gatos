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
        // this.image = './img/userizq.png';
    }

    moveUp(){
        this.y = this.y - 15;
    }

    moveDown(){
        this.y = this.y + 15;
    }
}

