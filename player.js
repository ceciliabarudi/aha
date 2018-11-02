'use strict';

function Player(canvasElement) {
	this.canvasElement = canvasElement;
	this.ctx = this.canvasElement.getContext('2d');
	this.size = 20;
	this.x = 80;
	this.y = 520;
	this.directionY = 0;
	this.directionX = 0;
	this.speed = 4;
	this.score = 0;
};

Player.prototype.draw = function() {
	this.ctx.fillStyle = 'blue';
	this.ctx.beginPath();
	this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
	this.ctx.fill();
	this.ctx.closePath();
};

Player.prototype.update = function() {
	this.checkCollisionWithBorder();
	this.x += this.speed * this.directionX; 
	this.y += this.speed * this.directionY;
};

Player.prototype.setDirectionY = function(direction) {
	this.directionY = direction;
};

Player.prototype.setDirectionX = function(direction) {
	this.directionX = direction;
};

Player.prototype.checkCollisionWithBorder = function() {
	if (this.x > this.canvasElement.width - this.size) {
		this.setDirectionX(-1);
	} else if (this.x - this.size < 0 ) {
		this.setDirectionX(1);
	};
};
Player.prototype.checkCollisionWithIdea = function() {

};
Player.prototype.checkScore = function() {

};
Player.prototype.updateScore = function() {

};
