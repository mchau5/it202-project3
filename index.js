import Paddle from "paddle.js";
import InputHandler from "input.js";


let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext('2d');


const GAME_WIDTH = 1280;

const GAME_HEIGHT = 720;

const PLAYER_WIDTH = 277;

const PLAYER_HEIGHT = 522;

	let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
	



	new InputHandler(paddle);

	let lastTime = 0;



	//images
	let imgPlayer = document.getElementById("player");








	function gameLoop(timestamp){
		let deltaTime = timestamp - lastTime;
		
		lastTime = timestamp;
		
		
		ctx.clearRect(0,0, GAME_WIDTH, GAME_HEIGHT);
		
		paddle.update(deltaTime);
		
		paddle.draw(ctx);
		
		
		ctx.drawImage(imgPlayer,10,10,.25*PLAYER_WIDTH,.25*PLAYER_HEIGHT);
		
		
		requestAnimationFrame(gameLoop);
		
	}


gameLoop();



