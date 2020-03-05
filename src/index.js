import InputHandler from "/it202-project3/src/input.js";
import Player from "/it202-project3/src/player.js";

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext('2d');


const GAME_WIDTH = 1280;

const GAME_HEIGHT = 720;



	let player = new Player(GAME_WIDTH, GAME_HEIGHT);
	

	new InputHandler(player);
	let lastTime = 0;

	





	function gameLoop(timestamp){
		
		let deltaTime = timestamp - lastTime;
		
		lastTime = timestamp;
		
		
		ctx.clearRect(0,0, GAME_WIDTH, GAME_HEIGHT);
		
		player.update(deltaTime);


		
		player.draw(ctx);
		
		requestAnimationFrame(gameLoop);
		
	}


requestAnimationFrame(gameLoop);




