# aha
Module 1 game project

# Aha!

## Description

'Aha!' is a game about brainstorming ideas. The player can move in every direction to try to catch good ideas and avoiding shitty ideas. The winning condition is to have accumulated enough good ideas, while the losing condition is to accumulate many shitty ideas. 

Ideas fill the completion rate. While good ideas build a Masterpiece, bad ideas make the player end up brainstorming a Piece of Crap (thus losing the game).

As the player spends more and more time brainstorming, the more shitty ideas rain down and it becomes harder and harder to avoid them.


## MVP (DOM - CANVAS)
*CANVAS*
The MVP is a barebones version with Game, Player and Idea constructors. Dot graphics. Player should be able to start a new game, move, accumulate ideas, trigger end of game and restart.

## Backlog
- Ideas coming from top right corner instead of above
- Movement through mouse instead of arrow keys
- Time Spent Brainstorming
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
    this.playerStartingPosition { x, y }
    this.idea []
    this.score
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
    this.position { x, y }
    this.direction
    this.speed
    this.score
}

Player.prototype.draw()
Player.prototype.clear()
Player.prototype.update()
Player.prototype.setDirection()
Player.prototype.checkCollisionWithBorder()
Player.prototype.checkCollisionWithIdea()
Player.prototype.checkScore()

```
### enemy.js
```javascript

function Idea() {
    this.canvasElement
    this.ctx
    this.size
    this.position { x, y }
    this.type: // +10 if good, -10 if shitty
}

Idea.prototype.draw()
Idea.prototype.clear()
Idea.prototype.update()
Idea.prototype.isInCanvas()

```


## States and States Transitions
Definition of the different states and their transition (transition functions)
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
- Main - buildSplash
- Main - addEventListener
- Main - destroySplash
- Main - buildGameScreen
- Game - buildDOM
- Game - TimeOut test
- Main - destroyGameScreen
- Main - buildGameOverScreen
- Main - RETHINK
- Main - destroyGameOverScreen
- Game - addEventListener
- Game - create player
- Player - create
- Player - directions
- Game - loop
- Game - player and enemies position 
- Game - clear
- Game - create enemies
- Idea - create
- Idea - check if still in screen
- Game - collision + remove
- Game - score
- Slide presentation

## Links


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/ceciliabarudi/aha.git)
[Link Deploy]()


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)