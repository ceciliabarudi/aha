'use strict';

function Animation(canvasElement, x, y, spriteSrc, itemSize) {
	this.canvasElement = canvasElement;
	this.ctx = this.canvasElement.getContext('2d');
	this.spriteSheet = new Image();
	this.spriteSheet.src = spriteSrc;
	this.frameCount = 8;
	this.frameIndex = 0;
	this.frameSpeed = 2; // chose random value, no idea what it does yet
	this.x = x;
	this.y = y;
	this.size = 50;
};

Animation.prototype.frameIndexCounter = function() {
    if (this.frameIndex < this.frameCount-1) {
      this.frameIndex ++;
    } else {
      this.frameIndex = 0;
    }
}

Animation.prototype.drawAnimation = function() {
	this.frameIndexCounter();
	this.ctx.drawImage(
    this.spriteSheet,
    this.frameIndex * 100,
    0,
    100,
    100,
    this.x,
    this.y,
		this.size,
		this.size,
  )
};

// Animation.prototype.drawShittyIdea = function() {

// };

// Animation.prototype.drawGoodIdea = function() {

// };