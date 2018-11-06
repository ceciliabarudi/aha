# Aha!

Module 1 project

## Description

'Aha!' is a game about brainstorming ideas. The player moves in every direction catching good ideas and avoiding shitty ideas. The winning condition is to accumulate enough good ideas, while the losing condition is to accumulate enough shitty ideas. 

While good ideas build a Masterpiece, bad ideas make the player end up brainstorming a Piece of Crap (thus losing the game).

As the player spends more and more time brainstorming, the more shitty ideas rain down and it becomes harder and harder to avoid them.

## MVP (CANVAS)

The MVP is a barebones version with Game, Player and Idea constructors. Dot graphics. Player should be able to start a new game, move, accumulate ideas, trigger end of game and restart. Only one difficulty.

## Backlog
- Clean and comment code
- Add different Win and Lose screens
- Time Spent Brainstorming makes more shitty ideas appear
- Ideas coming from top right corner instead of above
- Design
- Images and Sprites
- Music
- Add going back to splash to check instructions or if new player
- Movement through mouse instead of arrow keys
- Add username
- Mobile version


## Data structure
### game.js
```javascript

function Game() {
    this.canvasElement
    this.ctx
		this.GameIsOver
		this.timeSpentBrainstorming
		this.minutes
		this.seconds
    this.player
    this.ideas []
}

Game.prototype.start(
    buildDOM()
    this.startLoop()
)

Game.prototype.startLoop = function() {
		this.handleKeyDown
		this.handleKeyUp
    loop
}

Game.prototype.updateTimerCallback()

Game.prototype.updateBrainstormingTime()

Game.prototype.drawAll(

)

Game.prototype.clearAll(
    //clear canvas
    //filter ideas not in canvas from array
)

Game.prototype.updateAll(

)

Game.prototype.checkAllCollisions(

)

Game.prototype.checkScore(callback)

Game.prototype.gameIsOverCallback(

)

Game.prototype.finishGame(

)

```
### player.js
```javascript

function Player() {
    this.canvasElement
    this.ctx
    this.size
    this.x
    this.y
		this.directionX
		this.directionY
    this.speed
    this.score
}

Player.prototype.draw()
Player.prototype.update()
Player.prototype.setDirectionY()
Player.prototype.setDirectionX()
Player.prototype.checkCollisionWithBorder()
Player.prototype.checkCollisionWithIdea()
Player.prototype.returnScoreOnCollision()

```
### idea.js
```javascript

function Idea() {
    this.canvasElement
    this.ctx
    this.size
    this.x
    this.y
}

Shitty instance of Idea() {
		this.points: -30
    this.color: 'red'
}

Good instance of Idea() {
		this.points: 10
    this.color: 'green'
 }

Idea.prototype.draw()
Idea.prototype.update()
Idea.prototype.isInCanvas()

```


## States and States Transitions
Definition of the different states and their transition (transition functions) in main.js
```javascript

buildDOM function

The main function wraps:

buildSplash();

destroySplash();

buildGameScreen();

gameOverTransition(stores game values to pass them when Game Over);

updateScore();

updateTimer();

destroyGameScreen();

buildLostGameScreen(game values);

destroyLostGameScreen();

buildWonGameScreen(game values);

destroyWonGameScreen();


```


## Tasklist
- Create files and deploy
- Add .nojekyll file to update github pages
- Three States transitions:
- Main - buildDOM
- Main - buildSplashScreen
- Main - addEventListener for 'brainstorm!' button
- Main - destroySplashScreen
- Main - buildGameScreen
- Game - setTimeout test
- Main - destroyGameScreen
- Main - buildGameOverScreen
- Main - addEventListener for 'rethink!' button
- Main - destroyGameOverScreen when pressing 'rethink!'
- Game - constructor and loop
- Player - constructor
- Game - new Player
- Player - eventListener for movement
- Game - draw, update and clear all
- Player - checkCollisionWithBorder and make it stop
- Idea - constructor and instances Good and Shitty
- Game - push new Idea to ideas array
- Idea - movement
- Idea - check if isInCanvas
- Game - collision and removal
- Player - returnScoreOnCollision
- Game - checkScore callback
- Main - updateScore

## Important tasks that never get done
- Update Slide presentation


## Links

### Git
URls for the project repo and deploy
[Link Repo](https://github.com/ceciliabarudi/aha.git)
[Link Deploy](https://ceciliabarudi.github.io/aha/)

### Slides
URls for the project presentation (slides)
[Link Slides.com](https://slides.com/ceciliabarudi/aha)