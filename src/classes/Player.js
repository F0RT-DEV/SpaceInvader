import { 
    path_spaceship_image,
    path_engine_image,
    path_engine_sprites
 } from "../utils/constants.js";

class Player {
    constructor(canvasWidth, canvasHeight) {
        this.width = 100;
        this.height = 100;
        this.velocity = 7;
        this.position = {
            x: canvasWidth / 2 - this.width / 2, // Centralizando horizontalmente
            y: canvasHeight - this.height - 30, // Definindo para a parte inferior
        };
        this.image = null;
        this.imageLoaded = false;

        // Carrega a imagem usando o método e armazena em this.image
        this.image = this.loadImage(path_spaceship_image);
        this.engineImage = this.loadImage(path_engine_image);
        this.engineSprites = this.loadImage(path_engine_sprites);
    }

    loadImage(path) {
        const image = new Image();
        image.onload = () => {
            this.imageLoaded = true;
        };
        image.src = path;
        return image; // Retorna a imagem carregada
    }

    moveLeft() {
        this.position.x -= this.velocity;
    }

    moveRight() {
        this.position.x += this.velocity;
    }

    draw(ctx) {
        // Desenha a imagem apenas se ela estiver carregada
        if (this.imageLoaded) {
            ctx.drawImage(
                this.image, 
                this.position.x, 
                this.position.y, 
                this.width, 
                this.height
            )
            ctx.drawImage(
                this.engineImage, 
                this.position.x, 
                this.position.y, 
                this.width, 
                this.height
            )
            ctx.drawImage(
                this.engineSprites, 
                this.position.x, 
                this.position.y, 
                this.width, 
                this.height
            )
        }
    }
}

export default Player;
