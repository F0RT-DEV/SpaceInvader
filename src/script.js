import Player from "./classes/Player.js";
import Projectile from "./classes/Projectile.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;//aqui voce esta determinando que o canvas vai ocupa toda a largura da tela
canvas.height = innerHeight;

ctx.imageSmoothingEnabled = false

//ctx.fillStyle = "red";estou definindo o estilo do preenchimento sendo a cor vermelha
//ctx.fillRect(0,0,100,100) aqui vamos definir em desenho preenchido(no caso ele ira receber o preenchimento definido no fillStyle)

const player = new Player(canvas.width, canvas.height)
const playerProjectile = []
//const p = new Projectile({x: 958, y: 700}, -5)

//essa função deixa a movimentação do player mais suave
const keys = {
    left: false,
    right:false,
    shoot: {
        pressed: false,
        released: true
    }
}

const drawProjectile = ()=> {
    
}

//agora estamos definindo um loop para poder renderizar a tela e conseguirmos mexer o retangulo atravez das teclas A e D
const gameLoop = () =>{
    ctx.clearRect(0,0, canvas.width, canvas.height)//essa função limpa o rastro deixado do desenhar ao move-se

    ctx.save();

    ctx.translate(
        player.position.x + player.width /2,
        player.position.y + player.width /2
    );

    if(keys.shoot.pressed && keys.shoot.released){
        player.shoot(playerProjectile)
        keys.shoot.released = false
        console.log(playerProjectile)
    }

    //condição para modificar a velocidade do player e player.position.x > 0 impede que o player passe da largura da tela
    if(keys.left && player.position.x >= 0){
        player.moveLeft();
        ctx.rotate(-0.15)
    }
    if(keys.right && player.position.x <= canvas.width - player.width){
        player.moveRight()
        ctx.rotate(0.15)
    }

    ctx.translate(
        - player.position.x - player.width /2,
        - player.position.y - player.width /2
    );

    player.draw(ctx);//chamando o metodo desenhar

    ctx.restore();
    requestAnimationFrame(gameLoop)//essa função requestAnimationFrame vai dizer para o Browser chama o gameLoop em um momento adequado(que vai rodar diversas vezes)
}


addEventListener("keydown", (event)=>{//addEventListener-keydown estamos adicionando um evento quando as teclas forem precionadas
    const key = event.key.toLowerCase();//estamos definindo atravez do toLowerCase() que "a" e "A" são iguais, pois o javascript entendi que "a" e "A" não são iguais.
    
    //estou mapeando as teclas "a" e "d" para poder movimenta
    if(key === "a")keys.left = true
    if(key === "d")keys.right= true
})

addEventListener("keyup", (event)=>{//addEventListener-keyup evento de quando as teclas forem soltas
    const key = event.key.toLowerCase();
    
    if(key === "a")keys.left = false;
    if(key === "d")keys.right= false;  
})

// Evento para o clique do mouse - botão pressionado
addEventListener("mousedown", () => {
    keys.shoot.pressed = true;
});

// Evento para o clique do mouse - botão solto
addEventListener("mouseup", () => {
    keys.shoot.pressed = false;
    keys.shoot.released = true;
});

gameLoop();