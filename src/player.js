export default class Player {
	
	constructor(gameWidth, gameHeight){

		this.image = document.getElementById("player1");
		this.gameWidth = gameWidth;
		this.width = 277;
		this.height = 522;
		this.trueWidth = 277*.25;
		this.trueHeight = 522*.25;
		this.maxSpeed = 7;
		this.speed = 0;
		this.position = {

	x: gameWidth / 2 - this.trueWidth / 2,

	y: gameHeight - this.trueHeight - 10,

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
		
		ctx.drawImage(this.image,this.position.x, this.position.y, this.trueWidth, this.trueHeight);

		
	}
	
	update(deltaTime) {
		
		this.position.x += this.speed;
		
		//edge case
		if(this.position.x < 0){
			this.position.x = 0;
		}
		
		if(this.position.x + this.trueWidth > this.gameWidth){
			
			this.position.x = this.gameWidth - this.trueWidth;
			
		}

		
	}
	
	
}