# Aha!

Module 1 project

## Description

'Aha!' is a game about brainstorming ideas. The player moves in every direction catching good ideas and avoiding shitty ideas. The winning condition is to accumulate enough good ideas, while the losing condition is to accumulate enough shitty ideas. Ideas fill the completion rate. 

While good ideas build a Masterpiece, bad ideas make the player end up brainstorming a Piece of Crap (thus losing the game).

As the player spends more and more time brainstorming, the more shitty ideas rain down and it becomes harder and harder to avoid them.

## MVP (CANVAS)

The MVP is a barebones version with Game, Player and Idea constructors. Dot graphics. Player should be able to start a new game, move, accumulate ideas, trigger end of game and restart. Only one difficulty.

## Backlog
- Ideas coming from top right corner instead of above
- Movement through mouse instead of arrow keys
- Time Spent Brainstorming makes more shitty ideas appear
- Design
- Images and Sprites
- Music
- Add username
- Add going back to splash to check instructions or if new player
- Add different Win and Lose screens
- Mobile version


## Data structure
### game.js
```javascript

function Game() {
    this.canvasElement
    this.ctx
    this.GameIsOver
    this.player
    this.ideas []
}

Game.prototype.start(
    buildDOM()
    this.startLoop()
)

Game.prototype.startLoop = function() {
    this.handleKeyPress
    loop
}

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

Game.prototype.finishGame(

)

Game.prototype.gameIsOverCallback(

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
Player.prototype.setDirection()
Player.prototype.checkCollisionWithBorder()
Player.prototype.checkCollisionWithIdea()
Player.prototype.checkScore()
Player.prototype.updateScore()

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
Definition of the different states and their transition (transition functions) in Main.js
```javascript

buildSplash();

destroySplash();

buildGameScreen();

destroyGameScreen();

buildGameOverScreen();

destroyGameOverScreen();


```

## Task
- Create files and deploy
- Main - buildDOM
- Main - buildSplashScreen
- Main - addEventListener for start button
- Main - destroySplashScreen
- Main - buildGameScreen
- Main - destroyGameScreen
- Main - buildGameOverScreen
- Main - addEventListener for RETHINK
- Main - RETHINK
- Game - buildDOM
- Game - TimeOut test
- Main - destroyGameOverScreen
- Game - loop
- Game - clear
- Player - create Constructor
- Game - new Player
- Player - eventListener for movement
- Player - checkCollisionWithBorder and make it stop
- Idea - create Constructor
- Game - push new Idea to ideas array
- Idea - movement
- Idea - check if still in screen
- Game - collision + remove
- Player - update score
- Player - checkscore


- Slide presentation

## Links


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/ceciliabarudi/aha.git)
[Link Deploy](https://ceciliabarudi.github.io/aha/)


### Slides
URls for the project presentation (slides)
[Link Slides.com](https://slides.com/ceciliabarudi/aha)