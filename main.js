'use strict';

function buildDOM(html) {
	var div = document.createElement('div');
	div.innerHTML = html;
	return div.children[0];
};

function main() {

	var splashScreen;
	var gameScreen;
	var lostGameScreen;
	var wonGameScreen;

	var brainstormButton;
	var rethinkButton;
	var backToSplashButton;
	var scoreElement;
	var timerElementMinute;
	var timerElementSecond;
	var canvasElement;
	var game;

	
	function buildSplash() {
		splashScreen = buildDOM(`
			<main>
				<h1>Aha!</h1>
				<h2>A Brainstorming Game</h2>
				<div class="wrapper">
					<h3>Instructions:</h3>
					<p>Use the arrow keys to move and catch ideas</p>
					<p>Avoid the shitty ones!</p>
				</div>
				<button>brainstorm!</button>
			</main>
		`);

		document.body.prepend(splashScreen);

		brainstormButton = document.querySelector('button');
		brainstormButton.addEventListener('click', destroySplash);
	};

	function destroySplash() {
		splashScreen.remove();
		brainstormButton.removeEventListener('click', destroySplash);
		buildGameScreen();
	};

	function buildGameScreen() {
		gameScreen = buildDOM(`
		<main>
			<p>Idea: </p><p class="score">0</p>
			<p class="timer">
				Time spent brainstorming:
				<span class="minutes">00</span>
				<span>:</span>
				<span class="seconds">00</span>
			</p>
			<canvas width="800px" height="600px"></canvas>
		</main>
		`);

		document.body.prepend(gameScreen);
		
		canvasElement = document.querySelector('canvas');
		scoreElement = document.querySelector('p.score');
		timerElementMinute = document.querySelector('span.minutes');
		timerElementSecond = document.querySelector('span.seconds');
		
		game = new Game(canvasElement);
		game.start();
		game.gameIsOverCallback(destroyGameScreen);
		game.checkScore(updateScore);
		game.updateTimerCallback(updateTimer);
	};

	function updateScore(score) {
		scoreElement.innerText = score;
	}

	function updateTimer(minutes, seconds) {
		timerElementMinute.innerText = minutes;
		timerElementSecond.innerText = seconds;
	}

	function destroyGameScreen() {
		if (gameScreen) {
			gameScreen.remove();
		};
	
		if (game.player.score < 0 ) {
			buildLostGameScreen();
		} else {
			buildWonGameScreen();
		};
	};

	function buildLostGameScreen() {
		lostGameScreen = buildDOM(`
			<main>
				<h1>Done!</h1>
				<p class="timer">
					You brainstormed for
					<span class="minutes">00</span>
					<span>minutes and</span>
					<span class="seconds">00</span>
					seconds,
				</p>
				<h2>and came up with a Piece of Crap.</h2>
				<button>rethink!</button>
				<button class="go-to-splash">back to start</button>
			</main>
		`);

		document.body.prepend(lostGameScreen);

		timerElementMinute = document.querySelector('span.minutes');
		timerElementSecond = document.querySelector('span.seconds');
		//game.updateTimerCallback(updateTimer);
		//this doesn't work because after game ends, timer values are reset
		//how do I end the game but keep the values stored somewhere?

		rethinkButton = document.querySelector('button');
		rethinkButton.addEventListener('click', destroyLostGameScreen);
	};

	function destroyLostGameScreen() {
		lostGameScreen.remove();
		rethinkButton.removeEventListener('click', destroyLostGameScreen);
		buildGameScreen();
	};

	function buildWonGameScreen() {
		wonGameScreen = buildDOM(`
			<main>
				<h1>Done!</h1>
				<p class="timer">
					You brainstormed for
					<span class="minutes">00</span>
					<span>minutes and</span>
					<span class="seconds">00</span>
					seconds,
				</p>
				<h2>and came up with a Masterpiece, you smart butt!</h2>
				<h3>Who you gonna sell it to?</h3>
				<button>Brainstorm a new one!</button>
				<button class="go-to-splash">back to start</button>
			</main>
		`);

		document.body.prepend(wonGameScreen);

		timerElementMinute = document.querySelector('span.minutes');
		timerElementSecond = document.querySelector('span.seconds');
		//game.updateTimerCallback(updateTimer);
		//this doesn't work because after game ends, timer values are reset
		//how do I end the game but keep the values stored somewhere?

		rethinkButton = document.querySelector('button');
		rethinkButton.addEventListener('click', destroyWonGameScreen);
	};

	function destroyWonGameScreen() {
		wonGameScreen.remove();
		rethinkButton.removeEventListener('click', destroyWonGameScreen);
		buildGameScreen();
	};

	buildSplash();

};

window.addEventListener('load', main);