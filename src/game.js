import InputHandler from "/src/input.js";
import Player from "/src/player.js";
import Harm from "/src/harm.js";
import Coin from "/src/coin.js";
export default class Game{
		constructor(gameWidth, gameHeight){
			
			this.gameWidth = gameWidth;
			this.gameHeight = gameHeight;
			frames = 0;
			
		}
	
	
	start(){

		this.player = new Player(this);
		this.harm = new Harm(this);
		this.coin = new Coin(this);
		this.gameObjects = [this.player, this.harm, this.coin];

		
		new InputHandler(this.player);
		
	
	}
	

		

	update(deltaTime){
		
		this.gameObjects.forEach(object => object.update(deltaTime));
		frames++;
		if (frames % 100){
		this.harm = new Harm(this)	
		}
		
		
	}
	
	
	draw(ctx){
		
		this.player.draw(ctx);
		
		this.harm.draw(ctx);
		this.gameObjects.forEach(object => object.draw(ctx));

		
	}
	
}