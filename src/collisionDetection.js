export function detectCollision(player,object){
	
	
	
		let objBottom = object.position.y + object.height;
	
		let objTop = object.position.y;
		
		let pTop = player.position.y; 

		let pBot = player.position.y + player.height;
		
		
		//collision
		if ( 
			objBottom >= pTop &&
			objTop <= pBot &&
			object.position.x <= player.position.x + player.width - 20 &&  //right side
			object.position.x + object.width >= player.position.x + 20 //fat right side of img +20 - 20 to help hitbox padding

		   ){
			
			return true;
		}
	
		else{
			return false;
		}
	
	
}