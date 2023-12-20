export default class PyramidMap {
    constructor(tileSize) {
        this.tileSize = tileSize;
        this.block = this.#emptyblock("blankSpace.png");
        this.circle = this.#emptyblock("circle.png");
        this.star = this.#emptyblock("star.png");
        this.fourStar = this.#emptyblock("fourPointStar.png");
        this.triangle = this.#emptyblock("triangle.png");
    }
    
    #emptyblock(fileName) {
        const img = new Image();
        img.src = `images/${fileName}`;
        return img;
    }
    map = [
        [1],
        [1, 1],
        [1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1]
    ]

    draw(canvas, ctx) {
        this.#setCanvasSize(canvas);
        this.#clearCanvas(canvas, ctx);
        this.#drawMap(ctx);
    }

    #drawMap(ctx) {
        for(let row = 0; row < this.map.length; row++) { 
            for(let column = 0; column < this.map[row].length; column++) {
                const tile = this.map[row][column];
                let image = null;
                switch(tile) {
                    case 1:
                        image = this.block;
                        break;
                    case 0:
                        image = this.triangle;
                        break;
                    case 2: 
                        image = this.star;
                        break;
                    case 3: 
                        image = this.fourStar;
                        break; 
                    case 4: image = this.circle;
                    
                }

                if(image != null) {}
                ctx.drawImage(
                    image, 
                    column * this.tileSize, 
                    row * this.tileSize, 
                    this.tileSize, 
                    this.tileSize 
                    )
            }
        }
    }

    #clearCanvas(canvas, ctx) {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    #setCanvasSize(canvas) {
        canvas.height = this.map.length * this.tileSize;
        canvas.width = this.map[7].length = this.tileSize;
    }
}