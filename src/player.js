export default class Player {
	
	constructor(){

		this.image = document.getElementById("player1");
		this.width = 277;
		this.height = 522;
		
		
		
	}
	
	draw(ctx){
		
		ctx.drawImage(this.image,10,10,.25*this.width,.25*this.height);
		
	}
	

	
	
}