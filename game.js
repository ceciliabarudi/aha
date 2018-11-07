'use strict';

function Game(canvasElement) {
	this.canvasElement = canvasElement;
	this.ctx = this.canvasElement.getContext('2d');
	this.gameIsOver = false;
	this.timeSpentBrainstorming = 0;
	this.minutes;
	this.seconds;
	this.difficulty = 1;
	this.intervalIdDifficulty = 0;
	this.player = null;
	this.ideas = [];
	this.shittyIdeaRate;
	this.goodIdeaRate;
};

Game.prototype.start = function() {
	this.startLoop();
};

Game.prototype.startLoop = function() {
	this.player = new Player(this.canvasElement);

	this.handleMouseMove = function(event) {
		var relativeX = event.clientX - this.canvasElement.offsetLeft;
		var relativeY = event.clientY - this.canvasElement.offsetTop;
    if (relativeX > 0 && relativeX < this.canvasElement.width) {
        this.player.x = relativeX - this.player.size/2;
		};
		if (relativeY > 0 && relativeY < this.canvasElement.height) {
			this.player.y = relativeY - this.player.size/2;
	};
	}.bind(this);

	document.addEventListener('mousemove', this.handleMouseMove, false);

	// Code for movement using arrows ---------------------------------
	// this.handleKeyDown = function(event) {
	// 	switch (event.key) {
	// 		case 'ArrowUp':
	// 			this.player.setDirectionY(-1)
	// 			break;
	// 		case 'ArrowDown':
	// 			this.player.setDirectionY(1)
	// 			break;
	// 		case 'ArrowLeft':
	// 			this.player.setDirectionX(-1)
	// 			break;
	// 		case 'ArrowRight':
	// 			this.player.setDirectionX(1)
	// 			break;
	// 	}
	// }.bind(this);

	// document.addEventListener('keydown', this.handleKeyDown);

	// this.handleKeyUp = function(event) {
	// 	this.player.setDirectionY(0)
	// 	this.player.setDirectionX(0)
	// }.bind(this);

	// document.addEventListener('keyup', this.handleKeyUp);

	// ----------------------------------------------------------------

	var intervalId = setInterval(function() {
		if(!this.gameIsOver) {
			++this.timeSpentBrainstorming;
		} else {
			clearInterval(intervalId);
		};
	}.bind(this), 1000);

	function upDifficulty() {
		this.difficulty++;
	};

	this.intervalIdDifficulty = setInterval(upDifficulty.bind(this), 10000);

	var loop = function() {
		if (Math.random() > this.shittyIdeaRate) {
			this.ideas.push(new Shitty(this.canvasElement));
		};

		if (Math.random() > this.goodIdeaRate) {
			this.ideas.push(new Good(this.canvasElement));
		};

		this.updateAll();
		this.clearAll();
		this.drawAll();
		this.checkDifficulty();
		this.checkAllCollisions();
		this.updateBrainstormingTime();

		if (!this.gameIsOver) {
			requestAnimationFrame(loop);
		} else {
			this.finishGame();
		}
	}.bind(this);

	loop();
}

Game.prototype.checkDifficulty = function() {

	switch (this.difficulty) {
		case 0: //only for tests
			this.shittyIdeaRate = 0.8;
			this.goodIdeaRate = 0.7;
			this.ideas.forEach(function(idea) {
				idea.setSpeed(1.5, 1.3);
			});
			break;
		case 1:
			this.shittyIdeaRate = 0.855;
			this.goodIdeaRate = 0.98;
			break;
		case 2:
			this.shittyIdeaRate = 0.852;
			this.goodIdeaRate = 0.982;
			this.ideas.forEach(function(idea) {
				idea.setSpeed(3, 2.9);
			});
			break;
		case 3:
			this.shittyIdeaRate = 0.85;
			this.goodIdeaRate = 0.984; 
			this.ideas.forEach(function(idea) {
				idea.setSpeed(4, 3.9);
			});
			break;
		case 4:
			this.shittyIdeaRate = 0.83;
			this.goodIdeaRate = 0.986;
			this.ideas.forEach(function(idea) {
				idea.setSpeed(5, 4.9);
			});
			break;
		case 5:
			this.shittyIdeaRate = 0.82;
			this.goodIdeaRate = 0.988;
			this.ideas.forEach(function(idea) {
				idea.setSpeed(6, 5.9);
			});
			break;
		case 6:
			this.shittyIdeaRate = 0.81;
			this.goodIdeaRate = 0.99;
			this.ideas.forEach(function(idea) {
				idea.setSpeed(7, 6.8);
			});
			break;
		case 7:
			this.shittyIdeaRate = 0.81;
			this.goodIdeaRate = 0.99;
			this.ideas.forEach(function(idea) {
				idea.setSpeed(9.5, 9.2);
			});
			break;
		case 8:
			this.shittyIdeaRate = 0.81;
			this.goodIdeaRate = 0.99;
			this.ideas.forEach(function(idea) {
				idea.setSpeed(10.2, 9.8);
			});
			break;
		default:
			this.shittyIdeaRate = 0.8;
			this.goodIdeaRate = 0.995;
			this.ideas.forEach(function(idea) {
				idea.setSpeed(13, 12.5);
			});
			break;
	};
};

Game.prototype.updateTimerCallback = function(callback) {
	this.newTime = callback;
};

Game.prototype.updateBrainstormingTime = function() {
	this.minutes = Math.floor(this.timeSpentBrainstorming / 60);
	this.seconds = this.timeSpentBrainstorming % 60;
	if (this.newTime) {
		this.newTime(this.minutes, this.seconds);
	};
};

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
			
			if (this.player.score >= 100 || this.player.score <= -60) {
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
