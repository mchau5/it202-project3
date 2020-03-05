import Paddle from "/src/paddle.js";
import InputHandler from "/src/input.js";
import Player from "/src/player.js";

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext('2d');


const GAME_WIDTH = 1280;

const GAME_HEIGHT = 720;



	let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
	
	let player = new Player();
	

	new InputHandler(paddle);

	let lastTime = 0;

	





	function gameLoop(timestamp){
		
		let deltaTime = timestamp - lastTime;
		
		lastTime = timestamp;
		
		
		ctx.clearRect(0,0, GAME_WIDTH, GAME_HEIGHT);
		
		paddle.update(deltaTime);


		
		paddle.draw(ctx);
		
		player.draw(ctx);
		
		requestAnimationFrame(gameLoop);
		
	}


requestAnimationFrame(gameLoop);




