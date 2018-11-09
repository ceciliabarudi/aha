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
		destroyLostGameScreen();
		destroyWonGameScreen();

		splashScreen = buildDOM(`
			<main class="relative">
				<div class="title">
					<h1>Aha!</h1>
					<h2>A Brainstorming Game</h2>
				</div>
				<div class="content">
					<h3>Instructions</h3>
					<p class="instructions inline">You're this guy:</p>
					<img src="./visuals/guy.svg" class="instructions guy inline"/>
					<br>
					<p class="instructions inline">You need to come up with </p>
					<h5 class="rainbow inline"> THE GREATEST IDEA EVER </h5>
					<p class="instructions inline"> for your next project, so it's time to brainstorm!</p>
					<br>
					<p class="instructions inline">Use the mouse to move and catch a bunch of good ideas</p>
					<img src="./visuals/lightbulb.svg" class="instructions lightbulb inline"/>
					
					<p class="instructions inline">But avoid the shitty ones, or you'll end up with a piece of crap!</p>
					<img src="./visuals/squiggle.svg" class="instructions squiggle inline"/>
				</div>
				<div class="takeaction">
					<button class="brainstorm">brainstorm!</button>
				</div>
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
		destroyLostGameScreen();
		destroyWonGameScreen();

		gameScreen = buildDOM(`
		<main class="relative">
			<div class="status">
				<p class="inline">Idea: </p><p class="score inline">0</p>
				<p class="inline">&nbsp &nbsp &nbsp &nbsp</p>
				<p class="timer inline">
					Time spent brainstorming:
					<span class="minutes">00</span>
					<span>:</span>
					<span class="seconds">00</span>
				</p>
			</div>
			<div class="moveme-esta">
				<canvas></canvas>
			</div>
		</main>
		`);

		document.body.prepend(gameScreen);
		
		canvasElement = document.querySelector('canvas');
		scoreElement = document.querySelector('p.score');
		timerElementMinute = document.querySelector('span.minutes');
		timerElementSecond = document.querySelector('span.seconds');
		
		game = new Game(canvasElement);
		game.start();
		game.gameIsOverCallback(function() {
			gameOverTransition(game.player.score, game.minutes, game.seconds)
		});
		game.checkScore(updateScore);
		game.updateTimerCallback(updateTimer);
	};

	function gameOverTransition(score, minutes, seconds, intervalIdDifficulty) {
		destroyGameScreen();
		clearInterval(intervalIdDifficulty);
		if (game.player.score < 0 ) {
			buildLostGameScreen(score, minutes, seconds);
		} else {
			buildWonGameScreen(score, minutes, seconds);
		};
	}

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
	};

	// There's some repeated code between the buildLostGameScreen y buildWonGameScreen

	function buildLostGameScreen(score, minutes, seconds) {
		lostGameScreen = buildDOM(`
			<main>
				<h1>Done!</h1>
				<p class="timer inline endtime">
					You brainstormed for
					<span class="minutes">00</span>
					<span>minutes and</span>
					<span class="seconds">00</span>
					seconds,
				</p>
				<img src="./visuals/pieceofcrap.svg" class="crap inline" />
				<h2>and came up with a Piece of Crap.</h2>
				<button class="rethink">rethink!</button>
				<button class="back">back to start</button>
			</main>
		`);

		document.body.prepend(lostGameScreen);

		timerElementMinute = document.querySelector('span.minutes');
		timerElementSecond = document.querySelector('span.seconds');
		timerElementMinute.innerText = minutes;
		timerElementSecond.innerText = seconds;

		rethinkButton = document.querySelector('.rethink');
		rethinkButton.addEventListener('click', buildGameScreen);

		backToSplashButton = document.querySelector('.back');
		backToSplashButton.addEventListener('click', buildSplash);
	};

	function destroyLostGameScreen() {
		if (lostGameScreen) {
			lostGameScreen.remove();
			rethinkButton.removeEventListener('click', buildGameScreen);
			backToSplashButton.removeEventListener('click', buildSplash);
		};
	};

	function buildWonGameScreen(score, minutes, seconds) {
		wonGameScreen = buildDOM(`
			<main>
				<h1>Done!</h1>
				<!-- <p>Score: </p><p class="score">0</p> -->
				<p class="timer inline endtime">
					You brainstormed for
					<span class="minutes">00</span>
					<span>minutes and</span>
					<span class="seconds">00</span>
					seconds,
				</p>
				<img src="./visuals/masterpiece.svg" class="masterpiece inline" />
				<h2>and came up with a Masterpiece!</h2>
				<h3>You smart butt. Who you gonna sell it to?</h3>
				<button class="rethink">brainstorm a new one!</button>
				<button class="back">back to start</button>
			</main>
		`);

		document.body.prepend(wonGameScreen);

		timerElementMinute = document.querySelector('span.minutes');
		timerElementSecond = document.querySelector('span.seconds');
		timerElementMinute.innerText = minutes;
		timerElementSecond.innerText = seconds;

		rethinkButton = document.querySelector('.rethink');
		rethinkButton.addEventListener('click', buildGameScreen);

		backToSplashButton = document.querySelector('.back');
		backToSplashButton.addEventListener('click', buildSplash);
	};

	function destroyWonGameScreen() {
		if (wonGameScreen) {
			wonGameScreen.remove();
			rethinkButton.removeEventListener('click', buildGameScreen);
			backToSplashButton.removeEventListener('click', buildSplash);
		};
	};

	buildSplash();

};

window.addEventListener('load', main);