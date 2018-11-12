'use strict';

function Idea (canvasElement) {
  this.canvasElement = canvasElement;
  this.ctx = this.canvasElement.getContext('2d');
  this.size = 23;
  this.x = Math.floor(Math.random() * (this.canvasElement.width * 2));
  this.y = -100;
  this.fastestSpeed = 2.3;
  this.slowestSpeed = 2.2;
  this.spriteSheet = new Image();
  this.frameCount = 8;
  this.frameIndex = 0;
  this.frameSpeed = 8;
  this.speedCounter = 0;
}

function Shitty (canvasElement, spriteSrc, ctx, size, x, y) {
  Idea.call(this, canvasElement, ctx, size, x, y);
  this.points = -30;
  this.spriteSheet.src = spriteSrc;
  this.color = 'yellow';
}

Shitty.prototype = Object.create(Idea.prototype);

function Good (canvasElement, spriteSrc, ctx, size, x, y) {
  Idea.call(this, canvasElement, ctx, size, x, y);
  this.spriteSheet.src = spriteSrc;
  this.points = 10;
}

Good.prototype = Object.create(Idea.prototype);

Idea.prototype.frameIndexCounter = function () {
  this.speedCounter++;
  if (this.frameSpeed === this.speedCounter) {
    if (this.frameIndex < this.frameCount - 1) {
      this.speedCounter = 0;
      this.frameIndex++;
    } else {
      this.speedCounter = 0;
      this.frameIndex = 0;
    }
  }
};

Idea.prototype.draw = function () {
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  this.ctx.closePath();

  this.frameIndexCounter();
  this.ctx.drawImage(
    this.spriteSheet,
    this.frameIndex * 100,
    0,
    100,
    100,
    this.x - this.size,
    this.y - this.size,
    this.size * 2,
    this.size * 2
  );
};

Idea.prototype.setSpeed = function (fastest, slowest) {
  this.fastestSpeed = fastest;
  this.slowestSpeed = slowest;
};

Idea.prototype.update = function () {
  this.y += Math.floor(Math.random() * this.fastestSpeed) + this.slowestSpeed;
  this.x -= Math.floor(Math.random() * this.fastestSpeed) + this.slowestSpeed;
};

Idea.prototype.isInCanvas = function () {
  return this.y < this.canvasElement.height + this.size;
};
