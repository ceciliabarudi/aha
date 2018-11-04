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
	this.ideas.push(new Good(this.canvasElement));

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

	var loop = function() {
		if (Math.random() > 0.97) {
			this.ideas.push(new Shitty(this.canvasElement));
		};

		if (Math.random() > 0.997) {
			this.ideas.push(new Good(this.canvasElement));
		};

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
	this.ideas.forEach(function(idea) {
    idea.draw();
  });
};

Game.prototype.clearAll = function() {
	this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
	this.ideas = this.ideas.filter(function(idea) {
		return idea.isInCanvas();
	});
};

Game.prototype.updateAll = function() {
	this.player.update();
	this.ideas.forEach(function(idea) {
		idea.update();
	});
};

Game.prototype.checkAllCollisions = function() {
	this.ideas.forEach(function(idea, index) {
		if (this.player.checkCollisionWithIdea(idea)) {
			this.player.score += idea.points;
			this.newScore(this.player.score);
			this.ideas.splice(index, 1);
			
			if (this.player.score === 100 || this.player.score === -60) {
				this.gameIsOver = true;
			}
		};
	}.bind(this));
};

Game.prototype.checkScore = function(callback) {
	this.newScore = callback;
}

Game.prototype.gameIsOverCallback = function(callback) {
	this.gameOverCallback = callback;
};

Game.prototype.finishGame = function() {
	this.gameOverCallback();
};
