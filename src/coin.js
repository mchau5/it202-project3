import { detectCollision } from "./collisionDetection.js";
export default class Coin{
	
	constructor(game){
		this.image = document.getElementById("coin1");
		this.gameWidth = game.gameWidth;
		this.gameHeight = game.gameHeight;
		this.game = game;
		this.width = 30 ;
		this.height = 30;
		
		this.position = { x: 800, y: 0 };
		this.speed = { y : 2  };
		
		this.delete = false;
	}
	
	
	
	
	draw(ctx){
		if (this.delete == false){
		ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
		}
	}
	
	update(deltaTime){
		



		this.position.y += this.speed.y;
		
		
		if(this.position.y + this.height > this.gameHeight || this.position.y < 0) {
			this.delete = true;
		}
			
		

		if(detectCollision(this.game.player, this)){
			this.delete = true;
		}

		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}