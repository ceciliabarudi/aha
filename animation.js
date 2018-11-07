'use strict';

function Animation(canvasElement) {
	this.canvasElement = canvasElement;
	this.ctx = this.canvasElement.getContext('2d');
	this.spriteSheet = new Image();
	this.spriteSheet.src;
	this.frameCount = 8;
	this.frameIndex = 0;
	this.frameSpeed = 2; // chose random value, no idea what it does yet
};

Animation.prototype.drawPlayer = function() {
	this.spriteSheet.src = './visuals/playerright.png';
	
};

Animation.prototype.drawShittyIdea = function() {

};

Animation.prototype.drawGoodIdea = function() {

};