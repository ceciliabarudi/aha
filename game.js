'use strict';

function Game(canvasElement) {
	this.canvasElement = canvasElement;
	this.ctx = this.canvasElement.getContext('2d');
	this.gameIsOver = false;
	this.player = null;
	this.ideas = [];
};

Game.prototype.start = function() {
	this.startLoop();
}

Game.prototype.startLoop = function() {
	this.player = new Player(this.canvasElement);
	//this.ideas.push = (new Idea(this.canvasElement));
	
	this.handleKeyDown = function(event) {
		switch (event.key) {
			case 'ArrowUp':
				this.player.setDirectionY(-1)
				break;
			case 'ArrowDown':
				this.player.setDirectionY(1)
				break;
			case 'ArrowLeft':
				this.player.setDirectionX(-1)
				break;
			case 'ArrowRight':
				this.player.setDirectionX(1)
				break;
		}

	}.bind(this);

	document.addEventListener('keydown', this.handleKeyDown);

	this.handleKeyUp = function(event) {
		this.player.setDirectionY(0)
		this.player.setDirectionX(0)
	}.bind(this);

	document.addEventListener('keyup', this.handleKeyUp);

	var timeoutID = setTimeout(function(){
		this.gameIsOver = true;
	}.bind(this), 20000);

	var loop = function() {
		this.updateAll();
		this.clearAll();
		this.drawAll();
		this.checkAllCollisions();

		if (!this.gameIsOver) {
			requestAnimationFrame(loop);
		} else {
			this.finishGame();
		}
	}.bind(this);

	loop();
}

Game.prototype.drawAll = function() {
	this.player.draw();
	//draw ideas from array with forEach
};

Game.prototype.clearAll = function() {
	this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
	//filter ideas not on canvas from array
};

Game.prototype.updateAll = function() {
	this.player.update();
	//update ideas in array
};

Game.prototype.checkAllCollisions = function() {

};

Game.prototype.gameIsOverCallback = function(callback) {
	this.gameOverCallback = callback;
};

Game.prototype.finishGame = function() {
	this.gameOverCallback();
};
