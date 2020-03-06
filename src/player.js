export default class Player {
	
	constructor(game){

		this.image = document.getElementById("player1");
		this.gameWidth = game.gameWidth;
		this.width = 277*.25;
		this.height = 522*.25;
		this.maxSpeed = 7;
		this.speed = 0;
		this.position = {

		x: game.gameWidth / 2 - this.width / 2,

		y: game.gameHeight - this.height,

		};

		
	}
	
	
	// moving left
	moveLeft(){
		
		this.speed = -this.maxSpeed;

	}
	
	// moving right
	moveRight(){
		this.speed = this.maxSpeed;
	
	}
	
	stop(){
		
		this.speed = 0;
		
	}
	
	
	draw(ctx){
		
		ctx.drawImage(this.image,this.position.x, this.position.y, this.width, this.height);

		
	}
	
	update(deltaTime) {
		
		this.position.x += this.speed;
		
		//edge case
		if(this.position.x < 0){
			this.position.x = 0;
		}
		
		if(this.position.x + this.width > this.gameWidth){
			
			this.position.x = this.gameWidth - this.width;
			
		}

		
	}
	
	
}