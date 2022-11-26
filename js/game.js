class Game{
  constructor(context) {
    this.ctx = context;
    this.user = new Player(500,400,70,70);
    this.cats = [];
    this.dogs = [];
    this.points = 0;
    this.generateInterval = null;
  }

  _generateCats() {
  }

  _generateDogs() {
  }

  _assignControls() {
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.user.moveLeft();
          break;
        case 'ArrowRight':
          this.user.moveRight();
          break;
        case 'ArrowTop':
          this.user.moveTop();
          break;
        case 'ArrowBottom':
          this.user.moveBottom();
          break;
        default:
          break;
      }
    });
  }

  _gameOver() {
    clearInterval(this.generateInterval);
    const losePage = document.getElementById('lose-page');
    losePage.style = "display: flex";
    const canvas = document.getElementById('canvas');
    canvas.style = "display: none";
  }

  _update() {
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this._update();
    this._generateCats();
    this._generateDogs();
  }
}
