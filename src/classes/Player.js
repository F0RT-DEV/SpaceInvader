class Player {
    constructor(canvasWidth, canvasHeight){//estamos criando alguns atributos para desenha um retangulo
        this.width = 100;
        this.height = 100;
        this.velocity = 6;
        this.position = {
            x: canvasWidth / 2 - this.width / 2, //basicamento estamos centralizando verticalmente no site
            y: canvasHeight - this.height - 30, //estamos difinindo para ficar na parte inferior do site
        };
    }

    moveLeft(){
        this.position.x -= this.velocity;
    }

    moveRight(){
        this.position.x += this.velocity;
    }

    draw(ctx){//agora estamos definindo um metodo para desenhar um retangulo
        ctx.fillStyle = "red";
        ctx.fillRect(
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height
        );
    }
}

export default Player;