class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.user = new Player(500, 1, 200, 200);
    this.cats = [];
    this.dogs = [];
    this.points = 0;
    this.generateInterval = null;
    this.collisionSound = new sound('./Sound/meow.mp3');
    this.collisionSound2 = new sound('./Sound/ladrido.mp3');
    this.musicBase = new sound('./Sound/music.mp3');
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

    _generateDogs() {
    this.generateInterval = setInterval(() => {
      const newDog = new Dog();
      newDog._assignImage();
      newDog._fallUp();
      this.dogs.push(newDog);
    }, 3000)
  }

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

  _drawDogs() {
    this.dogs.forEach((elem) => {
      this.ctx.drawImage(elem.image, elem.x, elem.y, elem.width, elem.height);
    })
  }

  _drawUser() {
    this.ctx.drawImage(this.user.image, this.user.x, this.user.y, this.user.width, this.user.height);
  }

  _clean() {
    this.ctx.clearRect(0, 0, 1200, 800);
  }

  _checkCollisionsCat() {
    this.cats.forEach((cats) => {  
          if ((this.user.x >= this.cats.x && this.user.x <= cats.x + cats.width ||
            this.user.x + this.user.width >= this.cats.x && this.user.x + this.user.width <= cats.x + cats.width ||
            cats.x >= this.user.x && cats.x <= this.user.x + this.user.width) &&
            (this.user.y >= this.cats.y && this.user.y <= cats.y + cats.width ||
              this.user.y + this.user.width >= this.cats.y && this.user.y + this.user.width <= cats.y + cats.width ||
              cats.y >= this.user.y && cats.y <= this.user.y + this.user.width)){
              this.points ++;            
              let index = this.cats.indexOf(cats);
              this.cats.splice(index, 1);
              this.collisionSound.play();
            }
            if (this.points > 9){
              this._gameOver();
              this.collisionSound.stop();
              this.collisionSound2.stop();
            }
        })
      }

  _checkCollisionsDog() {
    this.dogs.forEach((dogs) => {  
          if ((this.user.x >= this.dogs.x && this.user.x <= dogs.x + dogs.width ||
            this.user.x + this.user.width >= dogs.x && this.user.x + this.user.width <= dogs.x + dogs.width ||
            dogs.x >= this.user.x && dogs.x <= this.user.x + this.user.width) &&
            (this.user.y >= this.dogs.y && this.user.y <= dogs.y + dogs.width ||
              this.user.y + this.user.width >= this.cats.y && this.user.y + this.user.width <= dogs.y + dogs.width ||
              dogs.y >= this.user.y && dogs.y <= this.user.y + this.user.width)){
              this.points --;
              let index = this.dogs.indexOf(dogs);
              this.dogs.splice(index, 1);
              this.collisionSound2.play();
            }
            if (this.points < 0){
              this._gameOverLose();
              this.collisionSound.stop();
              this.collisionSound2.stop();
            }
        }); 
      }
  
  _writeScore() {
    this.ctx.fillStyle = "white";
    this.ctx.font = "25px Verdana";
    this.ctx.fillText(`Kittens: ${this.points}`, 1050, 750);
  }

  _update() {
    this._clean();
    this._drawCats();
    this._drawDogs();
    this._drawUser();
    this._checkCollisionsCat();
    this._writeScore();
    this._checkCollisionsDog();
    window.requestAnimationFrame(() => this._update());
  };

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
  };

  _gameOver() {
    clearInterval(this.generateInterval);
    const winPage = document.getElementById('win-page');
    winPage.style = "display: flex";
    const canvas = document.getElementById('canvas');
    canvas.style = "display: none";
  }

  _gameOverLose() {
    clearInterval(this.generateInterval);
    const losePage = document.getElementById('lose-page');
    losePage.style = "display: flex";
    const canvas = document.getElementById('canvas');
    canvas.style = "display: none";
  }

  start() {
    this._assignControls();
    this._update();
    this._generateCats();
    this._generateCatsLeft();
    this._generateDogs(); 
    this.musicBase.play();
    }

  }
