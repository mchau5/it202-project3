import InputHandler from "./input.js";
import Player from "./player.js";
import Harm from "./harm.js";
import Coin from "./coin.js";




const GAMESTATE = {PAUSED:0,RUNNING:1,MENU:2,GAMEOVER:3};

export default class Game{
	
		constructor(gameWidth, gameHeight){
			
			
			this.gameWidth = gameWidth;
			this.gameHeight = gameHeight;
			this.gamestate = GAMESTATE.MENU;
			this.player = new Player(this);
			this.harm = new Harm(this);
			this.coin = new Coin(this);
			new InputHandler(this.player,this);
			this.gameObjects = [];
			this.lives = 1;
			this.points = 0;


			this.frames = 0;
			
		}
	
	
	start(){
		
		
		if(this.gamestate !== GAMESTATE.MENU){
			return;
		}
		
		
		this.gameObjects = [this.player, this.harm, this.coin];
		this.gamestate = GAMESTATE.RUNNING;

	}
	

		

	update(deltaTime){
		if (this.lives == 0){
			this.gamestate = GAMESTATE.GAMEOVER;
		}
		
		
		if (this.gamestate === GAMESTATE.PAUSED || this.gamestate === GAMESTATE.MENU || this.gamestate === GAMESTATE.GAMEOVER){
			return;
		}

		
		this.gameObjects.forEach(object => object.update(deltaTime));
		console.log(this.points);
		this.frames++;

		if (this.points >= 1){
			
			//i need to create a new projectile of coin here if the first one/ X amount is caught
			//make an array of circles and push in new ones?
			//https://stackoverflow.com/questions/22429242/randomly-spawn-one-by-one-object-in-canvas

			
		}
		
	}
	
	
	draw(ctx){
		
		this.player.draw(ctx);
		
		this.harm.draw(ctx);
		
		this.gameObjects.forEach(object => object.draw(ctx));
		
		
		if (this.gamestate == GAMESTATE.MENU){
		ctx.rect(0,0,this.gameWidth,this.gameHeight);
		ctx.fillStyle = "rgba(0,0,0,1)";
		ctx.fill();
		
		ctx.font = "30px Arial";
		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.fillText("Press space to start . . .", this.gameWidth/2, this.gameHeight/2);
		ctx.fillText("Press escape to pause while in game . . .", this.gameWidth/2, this.gameHeight/2 + 50);

		}
		
		if (this.gamestate == GAMESTATE.PAUSED){
		ctx.rect(0,0,this.gameWidth,this.gameHeight);
		ctx.fillStyle = "rgba(0,0,0,0.5)";
		ctx.fill();
		
		ctx.font = "30px Arial";
		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.fillText("Paused", this.gameWidth/2, this.gameHeight/2);
		}
		
		if (this.gamestate == GAMESTATE.GAMEOVER){
		ctx.rect(0,0,this.gameWidth,this.gameHeight);
		ctx.fillStyle = "rgba(0,0,0,1)";
		ctx.fill();
		
		ctx.font = "30px Arial";
		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.fillText("gameover", this.gameWidth/2, this.gameHeight/2);
		}

		if (this.gamestate == GAMESTATE.RUNNING){
		
		ctx.font = "30px Arial";
		ctx.fillStyle = "black";
		ctx.textAlign = "center";
		ctx.fillText("LIVES = ", 80 , this.gameHeight - 500);
		}
	}
	
	togglePause(){
		
		if(this.gamestate == GAMESTATE.PAUSED){
			
			this.gamestate = GAMESTATE.RUNNING;
		
		}
		else if(this.gamestate == GAMESTATE.MENU){
			
			this.gamestate = GAMESTATE.MENU;
		
		}
		else{
			
			this.gamestate = GAMESTATE.PAUSED;
		}
		
		
		
	}
}
