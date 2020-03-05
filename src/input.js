export default class InputHandler {
	
	constructor(player) {
	
		document.addEventListener("keydown", event => {
			
			
			switch(event.keyCode){
					
				case 37:
					if(player.speed < 0){
						player.stop();
					}
					player.moveLeft();
					break;
					
				case 39:
					if(player.speed > 0){
						player.stop();
					}
					player.moveRight();
					break;
					
			}
			
		});
		
		
		document.addEventListener("keyup", event => {
			
			
			switch(event.keyCode){
					
				case 37:
					player.stop();
					break;
					
				case 39:
					player.stop();
					break;
					
			}
			
		});
	}
	
	
}