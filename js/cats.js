class Cat {
    constructor() {
        this.x = Math.floor(Math.random() * -100);
        this.y = Math.floor(Math.random()* 700);
        this.width = 100;
        this.height = 100;
        this.image = null;
        this.fallInterval = undefined;
        // this.collisionSound = new sound('/Sound/mixkit-sweet-kitty-meow-93.wav');
    }

    _moveRight() {
    this.fallInterval = setInterval(() => {
        if (this.x > 1300) {
            clearInterval(this.fallInterval);
        }
    this.x = this.x + 1;
    }, 10)
}

    _assignImageRight() {
        this.image = catsImages[Math.floor(Math.random()*catsImages.length)]
    }
}

class CatDer {
    constructor() {
        this.x = 1300;
        this.y = Math.floor(Math.random()* 700);
        this.width = 100;
        this.height = 100;
        this.image = null;
        this.fallIntervall1 = undefined;
    }

    _moveLeft() {
    this.fallIntervall1 = setInterval(() => {
        if (this.x > -100) {
            clearInterval(this.fallInterval);
        }
    this.x = this.x - 1;
    }, 10)
}

    _assignImageLeft() {
        this.image = catsImages2[Math.floor(Math.random()*catsImages2.length)]
    }
}