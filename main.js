'use strict';

function buildDOM(html) {
	var div = document.createElement('div');
	div.innerHTML = html;
	return div.children[0];
};

function main() {

	//declare variables for states and interface elements
	var splashScreen;
	var gameScreen;
	var lostGameScreen;
	var wonGameScreen;

	var brainstormButton;
	var rethinkButton;
	var scoreElement;
	var canvasElement;
	var game;

	
	function buildSplash() {
		splashScreen = buildDOM(`
			<main>
				<h1>Aha!</h1>
				<h2>A Brainstorming Game</h2>
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
			<canvas width="800px" height="600px"></canvas>
		</main>
		`);

		document.body.prepend(gameScreen);
		
		canvasElement = document.querySelector('canvas');
		scoreElement = document.querySelector('p.score');
		
		game = new Game(canvasElement);
		game.start();
		game.gameIsOverCallback(destroyGameScreen);
		game.checkScore(updateScore);
	};

	function updateScore(score) {
		scoreElement.innerText = score;
	}

	function destroyGameScreen() {
		gameScreen.remove();
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
				<h2>You came up with a Piece of Crap.</h2>
				<button>rethink!</button>
			</main>
		`);

		document.body.prepend(lostGameScreen);

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
				<h2>You came up with a Masterpiece.</h2>
				<button>Brainstorm a new one!</button>
				<h3>You smart butt. Who you gonna sell it to?</h3>
			</main>
		`);

		document.body.prepend(wonGameScreen);

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