class Dog {
    constructor() {
        this.x = Math.floor(Math.random() * 1200);
        this.y = 820;
        this.width = 100;
        this.height = 100;
        this.image = null;
        this.fallInterval3 = undefined;
    }

    _fallUp() {
        this.fallInterval3 = setInterval (() => {
            if (this.y < -100) {
                clearInterval(this.fallInterval3);
            }
        this.y = this.y -1;
        }, 10)
    }

    _assignImage() {
        this.image = dogsImages[Math.floor(Math.random() * dogsImages.length)];
    }
}