import Player from "./classes/Player.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth; //aqui voce esta determinando que o canvas vai ocupa toda a largura da tela
canvas.height = innerHeight;

//ctx.fillStyle = "red";estou definindo o estilo do preenchimento sendo a cor vermelha
//ctx.fillRect(0,0,100,100) aqui vamos definir em desenho preenchido(no caso ele ira receber o preenchimento definido no fillStyle)

const player = new Player(canvas.width, canvas.height)

player.draw(ctx);

addEventListener("keydown", (event)=>{
    const key = event.key.toLowerCase();
    
    if(key === "a"){
        player.position.x -= 20;
    }
    if(key === "d"){
        player.position.y += 20;
    }
})