'use strict';

function Idea(canvasElement) {
	this.canvasElement = canvasElement;
	this.ctx = this.canvasElement.getContext('2d');
	this.size = 13;
	this.x = Math.floor(Math.random() * (this.canvasElement.width*2));
	this.y = -100;
	this.fastestSpeed = 2.3;
	this.slowestSpeed = 2.2;
}

function Shitty(canvasElement, ctx, size, x, y) {
	Idea.call(this, canvasElement, ctx, size, x, y);
	this.points = -30;
	this.color = 'red';
}

Shitty.prototype = Object.create(Idea.prototype);

function Good(canvasElement, ctx, size, x, y) {
	Idea.call(this, canvasElement, ctx, size, x, y);
	this.points = 10;
	this.color = 'green';
}

Good.prototype = Object.create(Idea.prototype);

Idea.prototype.draw = function() {
	this.ctx.fillStyle = this.color;
	this.ctx.beginPath();
	this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
	this.ctx.fill();
	this.ctx.closePath();
};

Idea.prototype.setSpeed = function(fastest, slowest) {
	this.fastestSpeed = fastest;
	this.slowestSpeed = slowest;
}

Idea.prototype.update = function() {
	this.y += Math.floor(Math.random() * this.fastestSpeed) + this.slowestSpeed;
	this.x -= Math.floor(Math.random() * this.fastestSpeed) + this.slowestSpeed;
};

Idea.prototype.isInCanvas = function() {
	return this.y < this.canvasElement.height + this.size;
};