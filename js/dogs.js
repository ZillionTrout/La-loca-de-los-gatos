class Dog {
    constructor() {
        this.x = Math.floor(Math.random() * 1000);
        this.y = Math.floor(Math.random()* 500);
        this.width = 100;
        this.height = 100;
        this.image = catsImages;
    }

    _assignImage() {
        this.image = catsImages[Math.floor(Math.random() * catsImages.length)];
    }
}