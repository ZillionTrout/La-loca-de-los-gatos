class Dog {
    constructor() {
        this.x = Math.floor(Math.random() * 1200);
        this.y = Math.floor(Math.random()* 820);
        this.width = 100;
        this.height = 100;
        this.image = dog1;
        this.fallInterval = undefined;
    }

    _fallUp() {
        this.fallInterval = setInterval (() => {
            if (this.y > -100) {
                clearInterval(this.fallInterval);
            }
            this.y = this.y -1;
        }, 10)
    }

    // _assignImage() {
    //     this.image = dogsImages[Math.floor(Math.random() * dogsImages.length)];
    // }
}