class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.user = new Player(500, 1, 200, 200);
    this.cats = [];
    this.dogs = [];
    this.points = 0;
    this.generateInterval = null;
  }

  _generateCats() {
    this.generateInterval = setInterval(() => {
      const newCat = new Cat();
      newCat._assignImageRight();
      newCat._moveRight();
      this.cats.push(newCat);
    }, 3000)
  }

  _generateCatsLeft() {
    this.generateInterval = setInterval(() => {
      const newCat = new CatDer();
      newCat._assignImageLeft();
      newCat._moveLeft();
      this.cats.push(newCat);
    }, 3000)
  }

  //   _generateDogs() {
  //   this.generateInterval = setInterval(() => {
  //     const newDog = new Dog();
  //     newDog._assignImage();
  //     newDog._fallUp();
  //   }, 1000)
  // }

  _drawCats() {
    this.cats.forEach((elem) => {
      // this.ctx.beginPath()
      // this.ctx.fillStyle = "black";
      // this.ctx.arc(elem.x, elem.y, elem.width, 0, 2 * Math.PI);
      // this.ctx.fill();
      // this.ctx.closePath()
      this.ctx.drawImage(elem.image, elem.x, elem.y, elem.width, elem.height);
    })
  }

  // _drawDogs() {
  //   this.dogs.forEach((elem) => {
  //     this.ctx.drawImage(elem.image, elem.x, elem.y, elem.width, elem.height);
  //   })
  // }

  _drawUser() {
    this.ctx.drawImage(this.user.image, this.user.x, this.user.y, this.user.width, this.user.height);
  }

  _clean() {
    this.ctx.clearRect(0, 0, 1200, 800);
  }

  _update() {
    this._clean();
    this._drawUser();
    this._drawCats();
    // this._drawDogs();
    window.requestAnimationFrame(() => this._update());
  }

  _assignControls() {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.user.moveLeft();
          break;
        case 'ArrowRight':
          this.user.moveRight();
          break;
        case 'ArrowUp':
          this.user.moveUp();
          break;
        case 'ArrowDown':
          this.user.moveDown();
          break;
        default:
          break;
      }
    });
  }

  // _gameOver() {
  //   clearInterval(this.generateInterval);
  //   const losePage = document.getElementById('lose-page');
  //   losePage.style = "display: flex";
  //   const canvas = document.getElementById('canvas');
  //   canvas.style = "display: none";
  // }

  start() {
    this._assignControls();
    this._update();
    this._generateCats();
    this._generateCatsLeft();
    // this._generateDogs();
  }
}
