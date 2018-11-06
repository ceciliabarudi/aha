'use strict';

function Player(canvasElement) {
	this.canvasElement = canvasElement;
	this.ctx = this.canvasElement.getContext('2d');
	this.size = 20;
	this.x = 80;
	this.y = 520;
	this.directionY = 0;
	this.directionX = 0;
	this.speed = 5;
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
	// conditions that player is at border and also going a certain
	// direction avoid it from bouncing and getting stuck
	if (this.x >= this.canvasElement.width - this.size && this.directionX === 1 ) {
		this.setDirectionX(0);
	} else if (this.x - this.size <= 0 && this.directionX === -1 ) {
		this.setDirectionX(0);
	} else if (this.y >= this.canvasElement.height - this.size && this.directionY === 1) {
		this.setDirectionY(0);
	} else if (this.y - this.size <= 0 && this.directionY === -1 ) {
		this.setDirectionY(0);
	};
};

Player.prototype.checkCollisionWithIdea = function(idea) {
	var distanceX = this.x - idea.x;
	var distanceY = this.y - idea.y;
	var distanceBetween = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
	var collision = distanceBetween < this.size + idea.size;
	return collision;
};

Player.prototype.returnScoreOnCollision = function() {
	//sends this info to checkAllCollisions in game.js
	if (this.checkCollisionWithIdea) {
		return this.score;
	}
};
