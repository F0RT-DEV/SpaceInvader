import Player from "./classes/Player.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth; //aqui voce esta determinando que o canvas vai ocupa toda a largura da tela
canvas.height = innerHeight;

//ctx.fillStyle = "red";estou definindo o estilo do preenchimento sendo a cor vermelha
//ctx.fillRect(0,0,100,100) aqui vamos definir em desenho preenchido(no caso ele ira receber o preenchimento definido no fillStyle)

const player = new Player(canvas.width, canvas.height)

//agora estamos definindo um loop para poder renderizar a tela e conseguirmos mexer o retangulo atravez das teclas A e D
const gameLoop = () =>{
    player.draw(ctx);//chamando o metodo desenhar
    requestAnimationFrame(gameLoop)//essa função chama o gameLoop  
}

gameLoop();

addEventListener("keydown", (event)=>{
    const key = event.key.toLowerCase();//estamos definindo atravez do toLowerCase() que "a" e "A" são iguais, pois o javascript entendi que "a" e "A" não são iguais.
    
    //estou mapeando as teclas "a" e "d" para poder movimenta
    if(key === "a"){
        player.position.x -= 20;
    }
    if(key === "d"){
        player.position.x += 20;
    }
})