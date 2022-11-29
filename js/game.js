class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.user1 = new Player(500, 1, 200, 200);
    // this.cats = [];
    // this.dogs = [];
    this.points = 0;
    // this.generateInterval = null;
  }

  _drawUser() {
    this.ctx.drawImage(this.user1.image, this.user1.x, this.user1.y, this.user1.width, this.user1.height);
  }

  _clean() {
    this.ctx.clearRect(0, 0, 1200, 800);
  }

  _update() {
    this._clean();
    this._drawUser();
    window.requestAnimationFrame(() => this._update());
  }

  _generateCats() {
    this.generateInterval = setInterval(() => {
      const newCat = new Cat();
      // newCat._assignImage();
    }, 1000)
  }

  // _generateDogs() {
  //   this.generateInterval = setInterval(() => {
  //     const newDog = new Dog();
  //     newDog._assignImage();
  //   }, 1000)
  // }

  // _assignControls() {
  //   // Controles del teclado
  //   document.addEventListener('keydown', (event) => {
  //     switch (event.code) {
  //       case 'ArrowLeft':
  //         this.user.moveLeft();
  //         break;
  //       case 'ArrowRight':
  //         this.user.moveRight();
  //         break;
  //       case 'ArrowTop':
  //         this.user.moveTop();
  //         break;
  //       case 'ArrowBottom':
  //         this.user.moveBottom();
  //         break;
  //       default:
  //         break;
  //     }
  //   });
  // }

  // _gameOver() {
  //   clearInterval(this.generateInterval);
  //   const losePage = document.getElementById('lose-page');
  //   losePage.style = "display: flex";
  //   const canvas = document.getElementById('canvas');
  //   canvas.style = "display: none";
  // }

  start() {
    // this._assignControls();
    this._update();
    // this._generateCats();
    // this._generateDogs();
  }
}
