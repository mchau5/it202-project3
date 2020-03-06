import { detectCollision } from "./collisionDetection.js";
export default class Harm{
	
	constructor(game){
		this.image = document.getElementById("harm1");
		this.gameWidth = game.gameWidth;
		this.gameHeight = game.gameHeight;
		this.game = game;
		this.width = 150 ;
		this.height = 150;
		
		this.position = { x: 500, y: 0 };
		this.speed = { y : 5  };
		
		this.delete = false;
	}
	
	
	
	
	draw(ctx){
		if (this.delete == false){
		ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
		}
	}
	
	update(deltaTime){
		


		if(this.delete == false){
			this.position.y += this.speed.y;
		}
		
		if(this.position.y > this.gameHeight) {
			this.delete = true;
		}
		
		
		
		

		if(detectCollision(this.game.player, this)){
			this.delete = true;
			this.position.x = -9999;
			this.game.lives--;
		}

		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}