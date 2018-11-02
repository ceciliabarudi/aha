'use strict';
//debugger;

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
	/*this.player = new Player(this.canvasElement);
	this.ideas.push = (new Idea(this.canvasElement));
	this.handleKeyPress = function(event) {
			if (event.key === 'ArrowUp') {

			} else if (event.key === 'ArrowDown') {

			} else if(event.key === 'ArrowLeft') {

			} else if (event.key === 'ArrowRight') {

			}
	}.bind(this);*/
	
	var timeoutID = setTimeout(function(){
		this.gameIsOver = true;
	}.bind(this), 2000);

	var loop = function() {
		if (!this.gameIsOver) {
			requestAnimationFrame(loop);
		} else {
			this.finishGame();
		}
	}.bind(this);

	loop();
}

Game.prototype.drawAll = function() {

};

Game.prototype.clearAll = function() {
	//clear canvas
	//filter ideas not on canvas from array
};

Game.prototype.updateAll = function() {

};

Game.prototype.checkAllCollisions = function() {

};

Game.prototype.gameIsOverCallback = function(callback) {
	this.gameOverCallback = callback;
};

Game.prototype.finishGame = function() {
	this.gameOverCallback();
};