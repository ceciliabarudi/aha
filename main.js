'use strict';
//debugger;

function buildDOM(html) {
	var div = document.createElement('div');
	div.innerHTML = html;
	return div.children[0];
};

function main() {

	//declare variables for states and interface elements
	var splashScreen;
	var gameScreen;
	var gameOverScreen;

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
			<p class="score">0</p>
			<canvas></canvas>
		</main>
		`);

		document.body.prepend(gameScreen);
		
		canvasElement = document.querySelector('canvas');
		//this shit won't work yet but i only realized after i wrote it so oh well
		//scoreElement = document.querySelector('p.score'); won't change yet, i'm scared
		
		game = new Game(canvasElement);
		game.start();
		game.gameIsOverCallback(destroyGameScreen);
		
		/*
		var timeoutID = setTimeout(function(){
			destroyGameScreen();
		}.bind(this), 3000);
		*/
	};

	function destroyGameScreen() {
		console.log('I AM THE DESTROYER OF WORLDS');
		gameScreen.remove();
		buildGameOverScreen();
	};

	function buildGameOverScreen() {
		gameOverScreen = buildDOM(`
			<main>
				<h1>Done!</h1>
				<h2>You came up with a Piece of Crap.</h2>
				<button>rethink!</button>
			</main>
		`);

		document.body.prepend(gameOverScreen);

		rethinkButton = document.querySelector('button');
		rethinkButton.addEventListener('click', destroyGameOverScreen);
	};

	function destroyGameOverScreen() {
		gameOverScreen.remove();
		rethinkButton.removeEventListener('click', destroyGameOverScreen);
		buildGameScreen();
	};

	buildSplash();

};

window.addEventListener('load', main);